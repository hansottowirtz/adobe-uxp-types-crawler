import puppeteer from "puppeteer";
import path from "path";
import * as dts from "dts-dom";
import { DeclarationFlags, Parameter, ParameterFlags } from "dts-dom";
import deepEqual from "fast-deep-equal";
import { promises as fs } from "fs";
import _ from "lodash";

const t: dts.Type = {
  kind: "array",
  type: "ActionDescriptor" as any
}

interface InterfaceConfig {
  urlType?: UrlType;
  // requireStr?: string;
  partOfModule?: string;
  interfaceName?: string;
  extendsInterfaces?: string[];
  ignore?: boolean;
}

export interface Entrypoints {
  base: string;
  modules: string[];
  entrypoints: {
    type: "index" | "interface";
    url: string;
    interfaceConfig?: InterfaceConfig;
  }[];
  generatorConfig: {
    path: string[];
    config: {
      ignore?: boolean;
      extendsInterfaces?: string[];
      prependTemplates?: string[];
      returnType?: dts.Type;
      paramsTypes?: Record<string, dts.Type>;
      paramsFlags?: Record<string, {
        optional?: boolean;
      }>;
    };
  }[];
  globals?: string[];
  urlInterfaceConfig?: Record<string, InterfaceConfig>;
}

type UrlType = "index" | "interface" | "module" | "globals";

interface Attr {
  /** @deprecated */
  name: string; // not used
  definitions: Def[];
}

interface Def {
  raw?: string;
  rawFunctionName?: string;
  rawReturnType?: string;
  rawFunctionParams?: { name: string; type: string }[];
  comments: string[];
  examples: string[];
  paramsTypes: Record<string, { name: string; type: string }[]>;
  access?: 'read-only' | 'read-write';
}

interface AttrList {
  constructors: Attr[];
  properties: Attr[];
  accessors: Attr[];
  methods: Attr[];
  functions: Attr[];
  variables: Attr[];
}

export const crawl = async (entrypoints: Entrypoints, opts: { cachePath: string }) => {
  console.log("Launching Puppeteer...");

  const userDataDir = path.resolve(opts.cachePath, "user-data-dir");

  await fs.mkdir(userDataDir, { recursive: true });

  const browser = await puppeteer.launch({
    devtools: process.env.OPEN_DEVTOOLS === 'true',
    userDataDir,
  });

  const page = await browser.newPage();

  page.on("console", (e) => console.log("[Puppeteer]", e.text()));

  /** Maps urls to its type */
  const urlTypesMap = new Map<string, UrlType>();

  const normalizeUrl = (url: string) => {
    let pathname = new URL(url, entrypoints.base).pathname;
    if (pathname.endsWith("/")) pathname = pathname.slice(0, -1);
    return pathname;
  };

  const setUrlType = (url: string, type: UrlType) => {
    const pathname = normalizeUrl(url);
    if (!urlTypesMap.has(pathname)) urlTypesMap.set(pathname, type);
  };

  Object.entries(entrypoints.urlInterfaceConfig).forEach(([url, configObj]) => {
    const urlType = configObj?.urlType;
    if (urlType) setUrlType(url, urlType);
  });
  entrypoints.entrypoints.forEach(({ url, type }) => setUrlType(url, type));
  entrypoints.globals.forEach((url) => setUrlType(url, "globals"));

  /** Maps urls to the correctly cased names of the interface */
  const urlNamesMap = new Map<string, string>();
  /** Maps urls */
  const urlInterfaceConfigMap = new Map<string, InterfaceConfig>();

  console.log("Collecting all interface urls...");

  for (const entrypoint of entrypoints.entrypoints) {
    const entrypointUrl = `${entrypoints.base}${entrypoint.url}`;
    console.log('Going to', entrypointUrl)
    await page.goto(entrypointUrl, { waitUntil: ["domcontentloaded"] });
    if (entrypoint.type === "index") {
      const entriesUlTag = (
        await (await page.$("main ul.spectrum-Body--sizeM > li > a")).$x("../..")
      )[0];
      const entriesNamesAndUrls = await page.evaluate((classesUlTag: HTMLUListElement) => {
        return Array.from(classesUlTag.querySelectorAll("a")).map((a) => {
          return {
            name: a.textContent,
            url: a.href,
          };
        });
      }, entriesUlTag);
      entriesNamesAndUrls.forEach(({ url }) => setUrlType(url, "interface"));
      entriesNamesAndUrls.forEach(({ name, url }) =>
        urlNamesMap.set(normalizeUrl(url), capitalize(name))
      );
      entriesNamesAndUrls.forEach(({ url }) =>
        urlInterfaceConfigMap.set(normalizeUrl(url), entrypoint.interfaceConfig)
      );
    } else {
      const normalizedUrl = normalizeUrl(entrypoint.url);
      setUrlType(normalizedUrl, "interface");
      let titleContent: string = null;
      // wait for title element to get content
      await new Promise<void>(async (res) => {
        while (true) {
          titleContent = await page.evaluate(() => {
            return document.querySelector("title").textContent;
          });
          if (titleContent) {
            res();
            break;
          }
          await new Promise((res) => setTimeout(res, 100));
        }
      });
      urlNamesMap.set(normalizedUrl, titleContent);
      urlInterfaceConfigMap.set(normalizedUrl, entrypoint.interfaceConfig);
    }
  }

  console.log("Collected all interface urls.");

  const interfaceParsingMap = new Map<
    string,
    { attrs: AttrList; examples: string[]; comments: string[] }
  >();

  console.log("Parsing all interface urls...");

  const allInterfaceUrls = Array.from(urlTypesMap.entries())
    .filter(([, urlType]) => urlType === "interface")
    .map(([url]) => url);


  const findOverrides = (path2: string[]) => {
    const overrides = entrypoints.generatorConfig.find(({ path }) =>
      deepEqual(path, path2)
    );
    return overrides;
  };

  for (const interfaceUrl of allInterfaceUrls) {
    const fullInterfaceUrl = `${entrypoints.base}${interfaceUrl}`;
    const is2022 = interfaceUrl.includes('2022');
    console.log('Going to', fullInterfaceUrl)
    await page.goto(fullInterfaceUrl, { waitUntil: ["load"] });
    const contentDivTag = (await (await page.$("main h1, main h3")).$x(".."))[0];
    const interfaceParsing = await page.evaluate((contentDivTag: HTMLDivElement, is2022: boolean) => {
      const preTagToExampleJsdocStr = (preTag: Element) => {
        preTag.querySelectorAll("span:not(.token-line):not(.token)").forEach((x) => x.remove());
        let example = "";
        for (const lineTag of Array.from(
          preTag.querySelector("div > pre").querySelectorAll(".token-line")
        )) {
          example += `\n${lineTag.textContent.trimEnd()}`;
        }
        return example;
      };

      const tableToMatrix = (table: Element) => {
        const trTags = Array.from(table.querySelectorAll("tbody tr"));
        const trTagsMatrix = trTags.map((trTag) => Array.from(trTag.children).map(td => td.textContent));
        return trTagsMatrix;
      }

      const tableToObjects = (table: Element) => {
        const thTags = Array.from(table.querySelectorAll("thead th"));
        const trTags = Array.from(table.querySelectorAll("tbody tr"));
        const objects = trTags.map(
          (trTag) => {
            const children = Array.from(trTag.children);
            const entries = children.map((td, i) => [thTags[i].textContent.toLowerCase(), td.textContent]);
            const typeEntryIndex = entries.findIndex(([k]) => k === "type");
            return Object.fromEntries([
              ...entries,
              ['typeUrl', trTag.children[typeEntryIndex].querySelector('a')?.href]
            ])
          }
        );
        return objects;
      }

      const normalizeType = ({ type, typeUrl }: { type: string, typeUrl: string}) => {
        /** Whether the type is a UXP "constant", which is typed by enums in @types/photoshop */
        const isConst = typeUrl?.includes('constants');
        return type + (isConst ? 'Consts' : '');
      }
      const interfaceComments: string[] = [];
      const interfaceExamples: string[] = [];

      let part: keyof AttrList | "index" | "start" = "start";
      let subPart: "main" | "parameters" = "main";
      let subPartCurrParameterName: string = null;
      let currAttr: Attr = null;
      let currDefinition: Def = null;

      function resetCursors() {
        currAttr = null;
        currDefinition = null;
        subPart = "main";
        subPartCurrParameterName = null;
      }

      const attrs: AttrList = {
        accessors: [],
        methods: [],
        properties: [],
        constructors: [],
        functions: [],
        variables: [],
      };
      for (const child of Array.from(contentDivTag.children)) {
        if (child.matches(".spectrum-Heading--sizeM")) {
          // this will be "accessors", "properties", "constructors", "methods", "functions", "variables" or "index"
          part = child
            .querySelector("a")
            .getAttribute("href")
            .replace("#", "")
            .split("-")[0] as any;
        }

        if (part === "start" && child.matches("table")) part = "properties";

        if (part === "index") continue;

        if (part === "start" && child.matches("pre")) {
          interfaceExamples.push(preTagToExampleJsdocStr(child));
        }
        if (part === "start" && child.matches("p.spectrum-Body--sizeM")) {
          interfaceComments.push(child.textContent);
        }

        if (part === "start") continue; // below only for attrs

        if (child.matches("hr")) {
          resetCursors();
          continue;
        }

        if (is2022 && child.matches(".spectrum-Heading--sizeS") && (child.nextSibling as Element).matches(".spectrum-Body--sizeM")) {
          const name = child.nextSibling.textContent.replace(/^(•|▸|\+) /, "").replace("#", "");
          resetCursors();
          currAttr = {
            name,
            definitions: [],
          };
          attrs[part as keyof AttrList].push(currAttr);
        } else if (is2022 && part === "properties" && child.matches("table")) {
          const objects = tableToObjects(child);
          for (const obj of objects) {
            if (!obj.name.replace('-', '').trim() || !obj.type.replace('-', '').trim() || obj.name.includes('..')) continue;
            currAttr = {
              name: '',
              definitions: [{
                raw: obj.name,
                rawReturnType: normalizeType(obj),
                comments: [obj.description],
                examples: [],
                paramsTypes: {},
                access: obj.access?.toLowerCase() as any,
              }],
            };
            attrs[part as keyof AttrList].push(currAttr);
          }
          continue; // nothing to be added
        } else if (!is2022 && child.matches(".spectrum-Heading--sizeS")) {
          const name = child.textContent.replace("#", ""); // not really used
          resetCursors();
          currAttr = {
            name,
            definitions: [],
          };
          attrs[part as keyof AttrList].push(currAttr);
        }

        if (!currAttr) continue; // below only if attr defined

        if (child.textContent.trim().startsWith("Parameters")) {
          subPart = "parameters";
          continue;
        }
        if (is2022 && subPart === "parameters" && child.matches("table")) {
          currDefinition.rawFunctionParams = tableToObjects(child)
            .map((obj) => ({
              name: obj.name,
              type: normalizeType(obj),
            }));
        }
        if (!is2022 && subPart === "parameters" && child.matches("p.spectrum-Body--sizeM")) {
          const raw = child.textContent;
          subPartCurrParameterName = raw
            .split(":")[0]
            .trim()
            .replace(/^▪/, "")
            .trim()
            .replace(/^Optional/, "")
            .trim();
        }
        if (is2022 && part === "properties" && child.matches("table")) {
          currDefinition.rawFunctionParams = tableToMatrix(child)
            .map(([k, v]) => ({
              name: k,
              type: v,
            }));
        }
        if (is2022 && subPartCurrParameterName && child.matches("table")) {
          currDefinition.paramsTypes[subPartCurrParameterName] = tableToMatrix(child).map(([k, v]) => ({
            name: k,
            type: v,
          }));
        }

        if (subPart === "parameters") continue; // below only "main" is possible

        if (is2022 && child.matches("p.spectrum-Body--sizeM") && child.previousSibling.nodeName === "H3" && ["functions", "methods"].includes(part)) {
          const attrName = child.previousSibling.textContent.replace("#", "");
          const returnType = child.textContent
            .replace("async : ", "")
            .replaceAll("‹", "<")
            .replaceAll("›", ">");
          currDefinition = {
            rawFunctionName: attrName,
            rawReturnType: returnType,
            rawFunctionParams: [],
            // raw: `${attrName}(...ukargs: any[]): ${returnType}`,
            comments: [],
            examples: [],
            paramsTypes: {},
          };
          currAttr.definitions.push(currDefinition);
        } else if (child.matches("p.spectrum-Body--sizeM") && child.textContent.match(/^(•|▸|\+) /)) {
          const raw = child.textContent
            .replace(/^(•|▸|\+) /, "")
            .replaceAll("‹", "<")
            .replaceAll("›", ">");
          currDefinition = {
            raw: raw,
            comments: [],
            examples: [],
            paramsTypes: {},
          };
          currAttr.definitions.push(currDefinition);
        } else if (child.matches("p.spectrum-Body--sizeM")) {
          if (["async"].includes(child.textContent.trim())) continue;
          currDefinition.comments.push(child.textContent);
        } else if (child.matches("pre")) {
          currDefinition.examples.push(preTagToExampleJsdocStr(child));
        }
      }
      return { attrs, comments: interfaceComments, examples: interfaceExamples };
    }, contentDivTag, is2022);

    interfaceParsingMap.set(interfaceUrl, interfaceParsing);
  }

  const dModuleMap = new Map<string, dts.ModuleDeclaration>();

  for (const moduleName of entrypoints.modules) {
    const dModule = dts.create.module(moduleName);
    dModuleMap.set(moduleName, dModule);
  }

  for (const [interfaceUrl, interfaceParsing] of interfaceParsingMap.entries()) {
    const interfaceConfig = {
      ...urlInterfaceConfigMap.get(interfaceUrl),
      ...entrypoints.urlInterfaceConfig[interfaceUrl],
    };

    const moduleName = interfaceConfig?.partOfModule || "test";
    const interfaceName = interfaceConfig?.interfaceName || urlNamesMap.get(interfaceUrl);

    const interfaceOverrides = findOverrides([moduleName, interfaceName]);

    if (interfaceOverrides?.config?.ignore) continue;

    const dInterface = dts.create.interface(interfaceName);
    dInterface.jsDocComment = generateJsdoc(interfaceParsing);
    if (interfaceOverrides?.config.extendsInterfaces) {
      dInterface.baseTypes.push(...(interfaceOverrides?.config.extendsInterfaces as any));
    }

    function getRawReturnType(def: Def) {
      return def.rawReturnType || def.raw.split(":").reverse()[0].trim();
    }
    for (const attr of [
      ...interfaceParsing.attrs.variables,
      ...interfaceParsing.attrs.accessors,
      ...interfaceParsing.attrs.properties,
    ]) {
      const access = attr.definitions.find((def) => def.access)?.access;
      let isReadonly = access ? access === 'read-only' : null;
      if (isReadonly === null) {
        isReadonly = attr.definitions.some((def) => def.raw.startsWith("set"));
      }
      const def0 = attr.definitions[0];

      // raw can be getter or setter, optional or normal
      const attrName = def0.raw.replace(/^(get|set|Optional|Readonly|Let) /, "").split(/(\(|\?|\:)/)[0];

      const attrOverrides = findOverrides([moduleName, interfaceName, attrName]);

      if (attrOverrides?.config?.ignore) continue;

      const rawReturnType = getRawReturnType(def0);
      const returnType = attrOverrides?.config?.returnType || (objectToAny(rawReturnType) as any);

      let flags = DeclarationFlags.None;
      if (isReadonly) flags = flags | DeclarationFlags.ReadOnly;
      if (def0.raw.includes("?") || def0.raw.startsWith("Optional ")) flags = flags | DeclarationFlags.Optional;

      const dAttr = dts.create.property(attrName, returnType, flags);
      dAttr.jsDocComment = generateJsdoc(def0);
      dInterface.members.push(dAttr);
    }

    for (const attr of [...interfaceParsing.attrs.methods, ...interfaceParsing.attrs.functions]) {
      const def0 = attr.definitions[0];

      let flags = DeclarationFlags.None;

      const attrName = def0.rawFunctionName || def0.raw.split(/(\(|\?)/)[0];

      const attrOverrides = findOverrides([moduleName, interfaceName, attrName]);

      if (attrOverrides?.config?.ignore) continue;

      const rawReturnType = getRawReturnType(def0);
      const returnType = attrOverrides?.config?.returnType || (objectToAny(rawReturnType) as any);

      let dParams: Parameter[] = [];
      if (def0.raw) {
        // We need to parse the raw definition in order to add it to dts-dom
        let rawParamsList = def0.raw.split(/(\(|\))/)[2].split(",")
        rawParamsList = rawParamsList[0] ? rawParamsList : [];
        dParams = rawParamsList.map((rawParam) => {
          const splitParam = rawParam.split(/\??\:/);
          const paramName = splitParam[0].trim();
          let paramType: dts.Type = splitParam[1].trim() as any;

          if (def0.paramsTypes[paramName]) {
            const t: dts.Type = {
              kind: "object",
              members: def0.paramsTypes[paramName].map((v) => ({
                kind: "property",
                name: v.name,
                type: v.type as any,
              })),
            };
            paramType = t;
          }

          paramType = attrOverrides?.config?.paramsTypes?.[paramName] || paramType;

          const isOptional = attrOverrides?.config?.paramsFlags?.[paramName]?.optional || rawParam.includes("?");

          const dParam: Parameter = {
            name: paramName,
            type: objectToAny(paramType) as any,
            kind: "parameter",
            flags: isOptional ? ParameterFlags.Optional : ParameterFlags.None,
          };
          return dParam;
        });
      } else {
        // const topParamNames = def0.rawFunctionParams
        //   .filter((rawParam) => !rawParam.name.includes('.'))
        //   .map((rawParam) => rawParam.name);
        def0.rawFunctionParams.map((rawParam) => {
          const hasDot = rawParam.name.includes('.');
          if (hasDot) {
            const parts = rawParam.name.replace('?', '').split('.');
            const isOptional = rawParam.name.endsWith('?');
            const dParam = dParams.find((x) => x.name === parts[0]);
            // dParam.type = dParam.type || { kind: 'object', members: [] };
            // dParam.type.kind = 'object';
            (dParam.type as dts.ObjectType).members.push({
              name: parts.slice(1).join('_todo_'),
              type: objectToAny(rawParam.type) as any,
              kind: 'property',
              flags: isOptional ? DeclarationFlags.Optional : DeclarationFlags.None,
            });
          } else {
            const isOptional = rawParam.name.endsWith("?");
            const paramName = rawParam.name.replace(/\?$/, "");
            const paramType = attrOverrides?.config?.paramsTypes?.[paramName] || rawParam.type;
            const dParam: Parameter = {
              name: paramName,
              type: paramType as any,
              kind: "parameter",
              flags: isOptional ? ParameterFlags.Optional : ParameterFlags.None,
            };
            if (dParam.type === 'object') dParam.type = {
              kind: 'object',
              members: [],
            };
            dParams.push(dParam);
          }
        });
      }

      const dAttr = dts.create.method(attrName, dParams, returnType, flags);
      dAttr.jsDocComment = generateJsdoc(def0);
      dInterface.members.push(dAttr);
    }

    const dModule = dModuleMap.get(moduleName);
    dModule.members.push(dInterface);
  }

  console.log("Parsed all interface urls.");

  await browser.close();

  return dModuleMap;
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const generateJsdoc = (def: Pick<Def, "comments" | "examples">) => {
  return [...def.comments, ...def.examples.map((x) => `@example ${x}`)].join("\n");
};

const objectToAny = (t: string | dts.Type) => {
  return t === "object" ? "any" : t;
};
