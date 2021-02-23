import { Command } from 'commander';
import { promises as fs } from 'fs';
import path from 'path';
import { crawl, Entrypoints } from './crawler';
import stripJsonComments from 'strip-json-comments';
import { emit } from "dts-dom";
import deepEqual from "fast-deep-equal"

const program = new Command();

program
  .requiredOption('--entrypoints <entrypoints>', 'entrypoints json path')
  .requiredOption('--templates-path <templatesPath>', 'dir with templates')
  .requiredOption('--out-path <outPath>', 'out dir')
  .requiredOption('--cache-path <cachePath>', 'puppeteer cache dir');

program.parse(process.argv);

(async () => {
  const options = program.opts();

  console.log("Reading entrypoints...");

  const entrypointsJsonStr = await fs.readFile(options.entrypoints, 'utf-8');

  const entrypoints: Entrypoints = JSON.parse(stripJsonComments(entrypointsJsonStr));

  const tmpDir = path.resolve(__dirname, "../tmp");
  const outDir = path.resolve(tmpDir, "out");
  fs.mkdir(outDir, { recursive: true });

  const dModuleMap = await crawl(entrypoints, { cachePath: options.cachePath });

  console.log("Writing to disk...");

  for (const [moduleName, dModule] of dModuleMap) {
    let fileContent = emit(dModule);
    const moduleOverrides = entrypoints.generatorConfig.find(({ path }) => deepEqual(path, [moduleName]));
    if (moduleOverrides?.config.prependTemplate) {
      const templatePath = path.resolve(options.templatesPath, moduleOverrides.config.prependTemplate);
      fileContent = [await fs.readFile(templatePath), fileContent].join('\n');
    }
    await fs.writeFile(path.resolve(outDir, `${moduleName}.d.ts`), fileContent);
  }

  console.log("Done.");

  process.exit(0);
})();
