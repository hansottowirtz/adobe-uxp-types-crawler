import { Command } from "commander";
import { promises as fs } from "fs";
import path from "path";
import { crawl, Entrypoints } from "./crawler";
import stripJsonComments from "strip-json-comments";
import { emit } from "dts-dom";
import deepEqual from "fast-deep-equal";
import glob from "glob-promise";

const program = new Command();

program
  .requiredOption("--entrypoints <entrypoints>", "entrypoints json path")
  .requiredOption("--templates-path <templatesPath>", "dir with templates")
  .requiredOption("--out-path <outPath>", "out dir")
  .requiredOption("--cache-path <cachePath>", "puppeteer cache dir");

program.parse(process.argv);

(async () => {
  const options = program.opts();

  console.log("Reading entrypoints...");

  const entrypointsJsonStr = await fs.readFile(options.entrypoints, "utf-8");

  const entrypoints: Entrypoints = JSON.parse(stripJsonComments(entrypointsJsonStr));

  const outDir = path.resolve(options.outPath);
  fs.mkdir(outDir, { recursive: true });

  const dModuleMap = await crawl(entrypoints, { cachePath: options.cachePath });

  console.log("Writing to disk...");

  for (const [moduleName, dModule] of dModuleMap) {
    let fileContent = emit(dModule);
    const moduleOverrides = entrypoints.generatorConfig.find(({ path }) =>
      deepEqual(path, [moduleName])
    );
    if (moduleOverrides?.config.prependTemplates) {
      const allTemplatePaths = new Set<string>();

      for (const templateGlob of moduleOverrides.config.prependTemplates) {
        const templatePaths = await glob(templateGlob, {
          cwd: path.resolve(options.templatesPath),
        });
        templatePaths.forEach((p) => allTemplatePaths.add(p));
      }
      const templateFilesContent = await Promise.all(
        Array.from(allTemplatePaths).map(async (p, i) => {
          const absPath = path.resolve(options.templatesPath, p);
          const content = await fs.readFile(absPath, "utf-8");
          return `// Part ${i + 1} - from ${p}\n${content}`;
        })
      );

      fileContent = [
        "// Part 0 - Generated by https://github.com/hansottowirtz/adobe-uxp-types-crawler",
        fileContent,
        ...templateFilesContent,
      ].join("\n");
    }
    await fs.writeFile(path.resolve(outDir, `${moduleName}.d.ts`), fileContent);
  }

  console.log("Done.");

  process.exit(0);
})();
