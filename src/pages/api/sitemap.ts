import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

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

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');

  const sitemap = generateSitemapXml();

  try {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  } catch (error) {
    console.error('Error writing sitemap file:', error);
  }

  res.status(200).send(sitemap);
}
