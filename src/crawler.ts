import puppeteer from "puppeteer";
import path from "path";
import * as dts from "dts-dom";
import { DeclarationFlags, Parameter, ParameterFlags } from "dts-dom";
import deepEqual from "fast-deep-equal";

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
}

export interface Entrypoints {
  base: string;
  entrypoints: {
    type: "index" | "interface";
    url: string;
    interfaceConfig?: InterfaceConfig;
  }[];
  generatorConfig: {
    path: string[];
    config: {
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
  raw: string;
  comments: string[];
  examples: string[];
  paramsTypes: Record<string, { name: string; type: string }[]>;
}

interface AttrList {
  constructors: Attr[];
  properties: Attr[];
  accessors: Attr[];
  methods: Attr[];
  functions: Attr[];
}

export const crawl = async (entrypoints: Entrypoints, opts: { cachePath: string }) => {
  console.log("Launching Puppeteer...");

  const browser = await puppeteer.launch({
    devtools: false,
    userDataDir: path.resolve(opts.cachePath, "user-data-dir"),
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
    const url = `${entrypoints.base}${entrypoint.url}`;
    console.log(`fetch url: ${url}`);
    await page.goto(url, { waitUntil: ["domcontentloaded"] });
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

  for (const interfaceUrl of allInterfaceUrls) {
    await page.goto(`${entrypoints.base}${interfaceUrl}`, { waitUntil: ["load"] });
    const contentDivTag = (await (await page.$("main h3")).$x(".."))[0];
    const interfaceParsing = await page.evaluate((contentDivTag: HTMLDivElement) => {
      const preTagToExampleJsdocStr = (preTag: Element) => {
        preTag.querySelectorAll("span:not(.token-line):not(.token)").forEach((x) => x.remove());
        let example = "";
        for (const lineTag of Array.from(
          preTag.querySelector("div > pre").querySelectorAll(".token-line")
        )) {
          example += `\n${lineTag.textContent}`;
        }
        return example;
      };

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
      };
      for (const child of Array.from(contentDivTag.children)) {
        if (child.matches(".spectrum-Heading--M")) {
          // this will be "accessors", "properties", "constructors", "methods", "functions" or "index"
          part = child
            .querySelector("a")
            .getAttribute("href")
            .replace("#", "")
            .split("-")[0] as any;
        }

        if (part === "index") continue;

        if (part === "start" && child.matches("pre")) {
          interfaceExamples.push(preTagToExampleJsdocStr(child));
        }
        if (part === "start" && child.matches("p.spectrum-Body--M")) {
          interfaceComments.push(child.textContent);
        }

        if (part === "start") continue; // below only for attrs

        if (child.matches("hr")) {
          resetCursors();
          continue;
        }

        if (child.matches(".spectrum-Heading--S")) {
          const name = child.textContent.replace("#", ""); // not really used
          resetCursors();
          currAttr = {
            name,
            definitions: [],
          };
          attrs[part as keyof AttrList].push(currAttr);
        }

        if (!currAttr) continue; // below only if attr defined

        if (child.matches("p.spectrum-Body--M") && child.textContent.trim() === "Parameters:") {
          subPart = "parameters";
          continue;
        }
        if (subPart === "parameters" && child.matches("p.spectrum-Body--M")) {
          const raw = child.textContent;
          subPartCurrParameterName = raw
            .split(":")[0]
            .trim()
            .replace(/^▪/, "")
            .trim()
            .replace(/^Optional/, "")
            .trim();
        }
        if (subPartCurrParameterName && child.matches("table")) {
          const trTags = Array.from(child.querySelectorAll("tbody tr"));
          currDefinition.paramsTypes[subPartCurrParameterName] = trTags.map((trTag) => ({
            name: trTag.children[0].textContent.replace("?", ""),
            type: trTag.children[1].textContent,
          }));
        }

        if (subPart === "parameters") continue; // below only "main" is possible

        if (child.matches("p.spectrum-Body--M") && child.textContent.match(/^(•|▸|\+) /)) {
          const raw = child.textContent
            .replace(/^(•|▸|\+) /, "")
            .replaceAll("‹", "<")
            .replaceAll("›", ">");
          currDefinition = {
            raw: raw.replace(/^Optional /, ""),
            comments: [],
            examples: [],
            paramsTypes: {},
          };
          currAttr.definitions.push(currDefinition);
        } else if (child.matches("p.spectrum-Body--M")) {
          if (["async"].includes(child.textContent.trim())) continue;
          currDefinition.comments.push(child.textContent);
        } else if (child.matches("pre")) {
          currDefinition.examples.push(preTagToExampleJsdocStr(child));
        }
      }
      return { attrs, comments: interfaceComments, examples: interfaceExamples };
    }, contentDivTag);

    interfaceParsingMap.set(interfaceUrl, interfaceParsing);
  }

  const dModuleMap = new Map<string, dts.ModuleDeclaration>();

  for (const [interfaceUrl, interfaceParsing] of interfaceParsingMap.entries()) {
    const interfaceConfig = {
      ...urlInterfaceConfigMap.get(interfaceUrl),
      ...entrypoints.urlInterfaceConfig[interfaceUrl],
    };

    const moduleName = interfaceConfig?.partOfModule || "test";
    const interfaceName = interfaceConfig?.interfaceName || urlNamesMap.get(interfaceUrl);

    const interfaceOverrides = entrypoints.generatorConfig.find(({ path }) =>
      deepEqual(path, [moduleName, interfaceName])
    );

    const dInterface = dts.create.interface(interfaceName);
    dInterface.jsDocComment = generateJsdoc(interfaceParsing);
    if (interfaceOverrides?.config.extendsInterfaces) {
      dInterface.baseTypes.push(...(interfaceOverrides?.config.extendsInterfaces as any));
    }

    for (const attr of [
      ...interfaceParsing.attrs.accessors,
      ...interfaceParsing.attrs.properties,
    ]) {
      const isReadonly = !attr.definitions.some((def) => def.raw.startsWith("set"));
      const def0 = attr.definitions[0];

      // raw can be getter or setter, optional or normal
      const attrName = def0.raw.replace(/^(get|set) /, "").split(/(\(|\?|\:)/)[0];

      const attrOverrides = entrypoints.generatorConfig.find(({ path }) =>
        deepEqual(path, [moduleName, interfaceName, attrName])
      );

      const rawReturnType = def0.raw.split(":").reverse()[0].trim();
      const returnType = attrOverrides?.config?.returnType || (objectToAny(rawReturnType) as any);

      let flags = DeclarationFlags.None;
      if (isReadonly) flags = flags | DeclarationFlags.ReadOnly;
      if (def0.raw.includes("?")) flags = flags | DeclarationFlags.Optional;

      const dAttr = dts.create.property(attrName, returnType, flags);
      dAttr.jsDocComment = generateJsdoc(def0);
      dInterface.members.push(dAttr);
    }

    for (const attr of [...interfaceParsing.attrs.methods, ...interfaceParsing.attrs.functions]) {
      const def0 = attr.definitions[0];

      let flags = DeclarationFlags.None;

      const attrName = def0.raw.split(/(\(|\?)/)[0];

      const attrOverrides = entrypoints.generatorConfig.find(({ path }) =>
        deepEqual(path, [moduleName, interfaceName, attrName])
      );

      const rawReturnType = def0.raw.split(":").reverse()[0].trim();
      const returnType = attrOverrides?.config?.returnType || (objectToAny(rawReturnType) as any);

      // We need to parse the raw definition in order to add it to dts-dom
      let rawParamsList = def0.raw.split(/(\(|\))/)[2].split(",");
      rawParamsList = rawParamsList[0] ? rawParamsList : [];

      const dParams: Parameter[] = rawParamsList.map((rawParam) => {
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

      const dAttr = dts.create.method(attrName, dParams, returnType, flags);
      dAttr.jsDocComment = generateJsdoc(def0);
      dInterface.members.push(dAttr);
    }

    let dModule = dModuleMap.get(moduleName);
    if (!dModule) {
      dModule = dts.create.module(moduleName);
      dModuleMap.set(moduleName, dModule);
    }

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
