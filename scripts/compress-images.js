const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directories containing images to compress
const imageDirs = [
  'public/photos/homepage',
  'public/photos/Blogs'
];

// Backup directory base
const BACKUP_BASE = 'public/photos/originals';

// Quality setting (1-100, lower = more compression, higher = better quality)
const QUALITY = 40; // More aggressive quality for faster loading while maintaining acceptable quality
// Maximum width for images
const MAX_WIDTH = 1200; // Wider to maintain quality on larger screens

async function compressImage(filePath) {
  try {
    const fileInfo = path.parse(filePath);
    const isJpg = fileInfo.ext.toLowerCase() === '.jpg' || fileInfo.ext.toLowerCase() === '.jpeg';
    
    if (!isJpg) {
      console.log(`Skipping ${filePath} - not a JPEG image`);
      return;
    }
    
    console.log(`Compressing ${filePath}...`);
    
    // Extract the directory structure after "public/photos/"
    const relativePath = filePath.split('public/photos/')[1];
    const relativeDir = path.dirname(relativePath);
    const backupDir = path.join(BACKUP_BASE, relativeDir);
    const fileName = path.basename(filePath);
    const backupPath = path.join(backupDir, fileName);
    
    // Ensure backup directory exists
    await fs.promises.mkdir(backupDir, { recursive: true });
    
    // Get original file stats for size comparison
    const originalStats = await fs.promises.stat(filePath);
    const originalSize = originalStats.size;
    
    // Only backup if file doesn't already exist in backup
    if (!fs.existsSync(backupPath)) {
      await fs.promises.copyFile(filePath, backupPath);
    }
    
    // Get image dimensions
    const metadata = await sharp(filePath).metadata();
    
    // Only resize if the image is wider than MAX_WIDTH
    const shouldResize = metadata.width > MAX_WIDTH;
    
    let sharpInstance = sharp(filePath);
    
    if (shouldResize) {
      sharpInstance = sharpInstance.resize({
        width: MAX_WIDTH,
        withoutEnlargement: true
      });
    }
    
    // Apply optimizations for web
    sharpInstance = sharpInstance
      // Reduce color complexity slightly for better compression
      .modulate({
        brightness: 1.01, // Slightly increase brightness to compensate for quality loss
        saturation: 0.90  // Reduce saturation more significantly to help with compression
      })
      // Apply slight blur for better compression (barely noticeable but helps compression)
      .blur(0.3);
    
    // Convert to optimized JPEG
    const buffer = await sharpInstance
      .jpeg({ 
        quality: QUALITY, 
        mozjpeg: true,
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
        progressive: true,
        chromaSubsampling: '4:2:0' // Most aggressive chroma subsampling
      })
      .toBuffer();
    
    // Save back to the same file
    await fs.promises.writeFile(filePath, buffer);
    
    const newSize = buffer.length;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ ${filePath} - ${reduction}% reduction (${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB)`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

async function processDirectory(directory) {
  try {
    // Check if directory exists first
    try {
      await fs.promises.access(directory, fs.constants.F_OK);
    } catch (error) {
      console.warn(`Warning: Directory does not exist: ${directory}`);
      return;
    }
    
    const files = await fs.promises.readdir(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.promises.stat(filePath);
      
      if (stats.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(filePath);
      } else if (stats.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg'].includes(ext)) {
          await compressImage(filePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
  }
}

async function main() {
  try {
    console.log('Starting image compression...');
    
    for (const dir of imageDirs) {
      console.log(`\nProcessing directory: ${dir}`);
      await processDirectory(dir);
    }
    
    console.log('\nImage compression complete!');
  } catch (error) {
    console.error('Error in main execution:', error);
  }
}

main(); 