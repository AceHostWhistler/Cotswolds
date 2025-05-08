const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Directories to process
const PHOTO_DIRECTORIES = [
  'public/photos',
  'public/images'
];

// Skip already optimized images
const SKIP_OPTIMIZED = true;

// Maximum width for different image types
const MAX_WIDTHS = {
  THUMBNAIL: 400,
  MEDIUM: 800,
  LARGE: 1200,
  HERO: 1920
};

// Quality settings
const QUALITY_SETTINGS = {
  JPEG: 80,
  PNG: 80,
  WEBP: 75
};

// Helper function to get image type from filename
function getImageType(filename) {
  if (filename.includes('hero') || filename.includes('banner')) {
    return 'HERO';
  } else if (filename.includes('thumbnail') || filename.includes('thumb')) {
    return 'THUMBNAIL';
  } else {
    return 'MEDIUM';
  }
}

// Helper function to check if an image is already optimized
function isOptimized(filePath) {
  if (!SKIP_OPTIMIZED) return false;
  
  try {
    const stats = fs.statSync(filePath);
    // If file is smaller than 100KB, consider it already optimized
    return stats.size < 100 * 1024;
  } catch (error) {
    return false;
  }
}

// Process images in directory
async function processImages() {
  console.log('Starting image optimization...');
  let totalSaved = 0;
  let filesProcessed = 0;
  let filesSkipped = 0;
  
  for (const dir of PHOTO_DIRECTORIES) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory ${dir} does not exist, skipping...`);
      continue;
    }
    
    const images = glob.sync(`${dir}/**/*.{jpg,jpeg,png}`, {
      nocase: true,
      ignore: ['**/*.webp', '**/*.optimized.*']
    });
    
    console.log(`Found ${images.length} images in ${dir}`);
    
    for (const imagePath of images) {
      try {
        if (isOptimized(imagePath)) {
          console.log(`Skipping already optimized: ${imagePath}`);
          filesSkipped++;
          continue;
        }
        
        // Get file info
        const ext = path.extname(imagePath).toLowerCase();
        const filename = path.basename(imagePath, ext);
        const dir = path.dirname(imagePath);
        const imageType = getImageType(filename.toLowerCase());
        const maxWidth = MAX_WIDTHS[imageType];
        
        // Get original file size
        const originalSize = fs.statSync(imagePath).size;
        
        // Create output path
        const outputPath = path.join(dir, `${filename}${ext}`);
        
        // Read image
        let pipeline = sharp(imagePath);
        
        // Get image metadata
        const metadata = await pipeline.metadata();
        
        // Resize only if image is larger than max width
        if (metadata.width > maxWidth) {
          pipeline = pipeline.resize(maxWidth);
        }
        
        // Format-specific compression
        if (ext === '.jpg' || ext === '.jpeg') {
          pipeline = pipeline.jpeg({ quality: QUALITY_SETTINGS.JPEG, mozjpeg: true });
        } else if (ext === '.png') {
          pipeline = pipeline.png({ quality: QUALITY_SETTINGS.PNG, compressionLevel: 9 });
        }
        
        // Save optimized image (replace original)
        await pipeline.toBuffer().then(data => {
          fs.writeFileSync(outputPath, data);
          
          // Also create WebP version for modern browsers
          const webpPath = path.join(dir, `${filename}.webp`);
          return sharp(data)
            .webp({ quality: QUALITY_SETTINGS.WEBP })
            .toFile(webpPath);
        });
        
        // Calculate saved size
        const newSize = fs.statSync(outputPath).size;
        const saved = originalSize - newSize;
        totalSaved += saved;
        
        console.log(
          `Optimized: ${imagePath} (${(originalSize / 1024).toFixed(2)}KB → ${(newSize / 1024).toFixed(2)}KB, saved ${(saved / 1024).toFixed(2)}KB)`
        );
        
        filesProcessed++;
      } catch (error) {
        console.error(`Error processing ${imagePath}:`, error);
      }
    }
  }
  
  console.log('\nOptimization complete!');
  console.log(`Processed: ${filesProcessed} images`);
  console.log(`Skipped: ${filesSkipped} images`);
  console.log(`Total space saved: ${(totalSaved / (1024 * 1024)).toFixed(2)}MB`);
}

processImages().catch(console.error); 