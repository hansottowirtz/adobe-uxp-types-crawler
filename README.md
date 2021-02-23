# Adobe UXP Types Crawler

Crawls the Adobe UXP documentation and generates Typescript declaration files.

## Usage

```bash
npm i -D adobe-uxp-types-photoshop
```

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "typeRoots": ["node_modules/@types", "node_modules/adobe-uxp-types-photoshop"],
    "types": ["adobe-uxp-types-photoshop", /* other types */] // this field is optional
  }
}
```

**Best used together with**: [AdobeXD/typings](https://github.com/AdobeXD/typings/blob/master/types/uxp.d.ts)

**Warning**: These typings are not thoroughly tested and will contain a lot of bugs! Please open an [issue](https://github.com/hansottowirtz/adobe-uxp-types-crawler/issues) if you find any inconsistencies.

## Intro

_Currently only includes types for Photoshop_

This project is a quickly hacked together Typescript .d.ts generator for Adobe UXP (for Photoshop).
It uses Puppeteer to crawl https://www.adobe.io/photoshop/uxp/ps_reference/ and subpages, and `dts-dom` to
stitch together the typings files.

See `res/entrypoints.jsonc` for configuration and overrides of the crawler.

## Running

(minimum Node version: 14)

```bash
npm i
npx ts-node src/index.ts --entrypoints res/entrypoints.jsonc --templates-path res/templates --out-path tmp/out --cache-path tmp/cache
```

## Publishing

```bash
npx ts-node src/index.ts --entrypoints res/entrypoints.jsonc --templates-path res/templates --out-path packages/photoshop --cache-path tmp/cache
npx lerna publish from-package
```

## Credits

This project started from [AdobeXD/typings](https://github.com/AdobeXD/typings/issues/28), which did not include types for Photoshop.
Missing enums were taken from [bbb999/Types-For-Adobe](https://github.com/bbb999/Types-for-Adobe/blob/master/Photoshop/2015.5/index.d.ts).
