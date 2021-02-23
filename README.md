# Adobe UXP Types Crawler

### Intro

This project is a quickly hacked together Typescript .d.ts generator for Adobe UXP (for Photoshop).
It uses Puppeteer to crawl https://www.adobe.io/photoshop/uxp/ps_reference/ and subpages.

See `res/entrypoints.jsonc` for configuration and overrides of the crawler.

### Running

(minimum Node version: 14)

```bash
npm i
npx ts-node src/index.ts --entrypoints res/entrypoints.jsonc --templates-path res/templates --out-path tmp/out --cache-path tmp/cache
```
