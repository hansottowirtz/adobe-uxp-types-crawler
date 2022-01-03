# Adobe UXP Types Crawler

Currently includes types for Adobe Photoshop and UXP.

This project crawls the Adobe UXP documentation and generates Typescript declaration files.

## Usage

```bash
npm i -D adobe-uxp-types-photoshop
npm i -D adobe-uxp-types-uxp
```

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "typeRoots": ["node_modules/@types", "node_modules/adobe-uxp-types-photoshop", "node_modules/adobe-uxp-types-uxp"],
    "types": ["adobe-uxp-types-photoshop", "adobe-uxp-types-uxp", /* other types */] // this field is optional
  }
}
```

**Best used together with**: [AdobeXD/typings](https://github.com/AdobeXD/typings/blob/master/types/uxp.d.ts)

**Warning**: These typings are not thoroughly tested and will contain a lot of bugs! Please open an [issue](https://github.com/hansottowirtz/adobe-uxp-types-crawler/issues) if you find any inconsistencies.

## Intro

_Currently only includes types for Photoshop and UXP_

This project is a quickly hacked together Typescript .d.ts generator for Adobe UXP (for Photoshop).
It uses Puppeteer to crawl https://www.adobe.io/photoshop/uxp/ps_reference/ and subpages, and `dts-dom` to
stitch together the typings files.

See `res/entrypoints.jsonc` for configuration and overrides of the crawler.

## Crawling

(minimum Node version: 14)

```bash
npm i
npx ts-node src/index.ts --entrypoints res/entrypoints.jsonc --templates-path res/templates --out-path tmp/out --cache-path tmp/cache
```

## Publishing

This project is managed with a very basic Lerna setup.

```bash
npx ts-node src/index.ts --entrypoints res/entrypoints.jsonc --templates-path res/templates --out-path packages/photoshop --cache-path tmp/cache
```

Bumping package versions:
Edit version in `lerna.json` and `packages/photoshop/package.json`.

__Publishing to npm is currently done in Github Actions.__, based on the Lerna version. See `.github/workflows/build-and-publish.yml`.

Manually publishing:
```bash
npx lerna publish from-package
```

## Credits

This project started from [AdobeXD/typings](https://github.com/AdobeXD/typings/issues/28), which did not include types for Photoshop.
Descriptor enums and interfaces were taken from [simonhenke/photoshop-types](https://github.com/simonhenke/photoshop-types).Other types were taken from [@types/photoshop](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/photoshop).
A missing interface was taken from [bbb999/Types-For-Adobe](https://github.com/bbb999/Types-for-Adobe/blob/master/Photoshop/2015.5/index.d.ts).
The common UXP typings were taken from [thejustinwalsh/uxp-types](https://github.com/thejustinwalsh/uxp-types).
