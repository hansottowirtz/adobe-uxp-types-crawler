# Adobe UXP Types Crawler

## Intro

This project is a quickly hacked together Typescript .d.ts generator for Adobe UXP (for Photoshop).
It uses Puppeteer to crawl https://www.adobe.io/photoshop/uxp/ps_reference/ and subpages.

See `res/entrypoints.jsonc` for configuration and overrides of the crawler.

**Best used together with**: [AdobeXD/typings](https://github.com/AdobeXD/typings/blob/master/types/uxp.d.ts)

## Running

(minimum Node version: 14)

```bash
npm i
npx ts-node src/index.ts --entrypoints res/entrypoints.jsonc --templates-path res/templates --out-path tmp/out --cache-path tmp/cache
```

## Credits

This project started from [AdobeXD/typings](https://github.com/AdobeXD/typings/issues/28), which did not include types for Photoshop.
Missing enums were taken from [bbb999/Types-For-Adobe](https://github.com/bbb999/Types-for-Adobe/blob/master/Photoshop/2015.5/index.d.ts). Thanks, bbb999!
