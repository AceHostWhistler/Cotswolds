const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SVG_PATH = path.join(__dirname, '../public/favicons/reel-room-diamond-logo.svg');
const OUTPUT_DIR = path.join(__dirname, '../public');

// Ensure the favicon directory exists
if (!fs.existsSync(path.join(OUTPUT_DIR, 'favicons'))) {
  fs.mkdirSync(path.join(OUTPUT_DIR, 'favicons'), { recursive: true });
}

async function generateFavicon() {
  try {
    // Generate favicon.ico (multi-size)
    await sharp(SVG_PATH)
      .resize(16, 16)
      .toFile(path.join(OUTPUT_DIR, 'favicon-16x16.png'));
      
    await sharp(SVG_PATH)
      .resize(32, 32)
      .toFile(path.join(OUTPUT_DIR, 'favicon-32x32.png'));
      
    await sharp(SVG_PATH)
      .resize(16, 16)
      .toFile(path.join(OUTPUT_DIR, 'favicon.ico'));
      
    await sharp(SVG_PATH)
      .resize(180, 180)
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
      
    // Copy SVG as favicon.svg
    fs.copyFileSync(
      SVG_PATH,
      path.join(OUTPUT_DIR, 'favicon.svg')
    );
    
    console.log('✅ Favicons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
  }
}

generateFavicon(); 