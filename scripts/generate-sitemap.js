const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SITE_URL = 'https://acehost.ca';
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');
const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');
const EXCLUDED_PATHS = [
  '_app.tsx',
  '_document.tsx',
  'api',
  '404.tsx',
  '500.tsx',
  '_error.tsx',
];

// Get current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split('T')[0];

// Function to recursively get all pages
function getAllPages() {
  // Get all .tsx and .jsx files in the pages directory
  const files = glob.sync('**/*.{tsx,jsx,ts,js}', { cwd: PAGES_DIR });
  
  // Filter out excluded paths and process the valid ones
  return files
    .filter(file => !EXCLUDED_PATHS.some(excluded => file.startsWith(excluded)))
    .map(file => {
      // Replace index files with directory path
      const url = file
        .replace(/\.(tsx|jsx|ts|js)$/, '')
        .replace(/\/index$/, '');
      
      // Create URL path with leading slash
      return url === 'index' ? '/' : `/${url}`;
    });
}

// Generate a single URL entry for the sitemap
function generateUrlEntry(path, priority = 0.8) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  
  // Set higher priority for home page and key sections
  let finalPriority = priority;
  if (path === '/') {
    finalPriority = 1.0;
  } else if (path.includes('/post/')) {
    finalPriority = 0.7;
  }

  return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${finalPriority}</priority>
  </url>`;
}

// Generate the complete sitemap XML
function generateSitemap() {
  const pages = getAllPages();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => generateUrlEntry(page)).join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`Sitemap generated at ${OUTPUT_PATH}`);
}

// Generate the sitemap
generateSitemap(); 