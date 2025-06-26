import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { allArticles, Article } from '../../utils/blogArticles';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set appropriate headers
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // 24 hour cache

  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Base URL for the site
  const baseUrl = 'https://reelroom.ca';
  
  // Start building the sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>${baseUrl}/experiences</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/reservations</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/media</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/book-now</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`;

  // Add blog articles
  try {
    allArticles.forEach((article: Article) => {
      // Extract the slug from the link
      const slug = article.link.split('/').pop();
      
      sitemap += `
  <url>
    <loc>${baseUrl}/blog-articles/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  } catch (error) {
    console.error('Error processing blog articles:', error);
  }

  // Add listings
  try {
    const listingsDir = path.join(process.cwd(), 'src', 'pages', 'listings');
    
    if (fs.existsSync(listingsDir)) {
      const listings = fs.readdirSync(listingsDir)
        .filter(file => !file.startsWith('.') && !file.endsWith('.tsx')) // Skip hidden files and .tsx files
        .filter(file => fs.statSync(path.join(listingsDir, file)).isDirectory());
      
      listings.forEach(listing => {
        sitemap += `
  <url>
    <loc>${baseUrl}/listings/${listing}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
      });
    }
  } catch (error) {
    console.error('Error reading listings directory:', error);
  }

  // Close the sitemap XML
  sitemap += `
</urlset>`;

  // Write the sitemap to the public directory
  try {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  } catch (error) {
    console.error('Error writing sitemap file:', error);
  }

  // Return the sitemap
  res.status(200).send(sitemap);
} 