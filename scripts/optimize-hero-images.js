const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImages = [
  'public/photos/originals/homepage/DSC03070-Enhanced-NR.jpg',
  'public/photos/originals/homepage/DSC03081-Enhanced-NR.jpg',
  'public/photos/originals/homepage/DSC03264-Enhanced-NR.jpg'
];

const outputDir = 'public/photos/optimized';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create optimized versions at different sizes
async function optimizeImages() {
  for (const sourcePath of sourceImages) {
    const filename = path.basename(sourcePath);
    const baseName = path.parse(filename).name;
    
    console.log(`Processing ${filename}...`);
    
    try {
      // Create a high-quality version with reasonable file size
      await sharp(sourcePath)
        .resize(1920, null, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(path.join(outputDir, `${baseName}-1920.jpg`));
      
      console.log(`Created optimized 1920px version of ${filename}`);
      
      // Create a medium-sized version for faster loading
      await sharp(sourcePath)
        .resize(1280, null, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(path.join(outputDir, `${baseName}-1280.jpg`));
      
      console.log(`Created optimized 1280px version of ${filename}`);
      
      // Create a smaller version for mobile
      await sharp(sourcePath)
        .resize(800, null, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(path.join(outputDir, `${baseName}-800.jpg`));
      
      console.log(`Created optimized 800px version of ${filename}`);
      
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
    }
  }
}

optimizeImages()
  .then(() => console.log('Image optimization complete!'))
  .catch(err => console.error('Error optimizing images:', err)); 