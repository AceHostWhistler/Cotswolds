const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.reelroom.ca';

const SITEMAP_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/experiences', priority: '0.9', changefreq: 'weekly' },
  { path: '/book-now', priority: '0.9', changefreq: 'weekly' },
  { path: '/media', priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
];

function generateSitemapXml(lastmod = new Date().toISOString().split('T')[0]) {
  const urls = SITEMAP_PAGES.map(
    ({ path: pagePath, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${pagePath === '/' ? '' : pagePath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function writeSitemapFile(outputPath) {
  const xml = generateSitemapXml();
  fs.writeFileSync(outputPath, xml);
  return xml;
}

module.exports = {
  SITE_URL,
  SITEMAP_PAGES,
  generateSitemapXml,
  writeSitemapFile,
  OUTPUT_PATH: path.join(process.cwd(), 'public', 'sitemap.xml'),
};
