const { writeSitemapFile, OUTPUT_PATH } = require('./sitemap-config');

writeSitemapFile(OUTPUT_PATH);
console.log(`Sitemap generated at ${OUTPUT_PATH}`);
