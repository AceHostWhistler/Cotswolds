const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIRS = [
  'public/photos/originals/homepage',
  'public/photos/gallery/elle-wedding',
];
const OUTPUT_DIR = 'public/photos/optimized';

const VARIANTS = [
  { suffix: '800', width: 800, quality: 88 },
  { suffix: '1280', width: 1280, quality: 90 },
  { suffix: '1920', width: 1920, quality: 92 },
];

async function generateVariants(sourcePath) {
  const filename = path.basename(sourcePath);
  const baseName = path.parse(filename).name;
  const results = [];

  for (const variant of VARIANTS) {
    const outputPath = path.join(OUTPUT_DIR, `${baseName}-${variant.suffix}.jpg`);

    await sharp(sourcePath)
      .rotate()
      .resize(variant.width, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({
        quality: variant.quality,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: '4:4:4',
      })
      .toFile(outputPath);

    const sizeKb = (fs.statSync(outputPath).size / 1024).toFixed(0);
    results.push(`${variant.suffix}px/${sizeKb}KB`);
  }

  return { baseName, results };
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let allSources = [];

  for (const sourceDir of SOURCE_DIRS) {
    if (!fs.existsSync(sourceDir)) {
      console.warn(`Skipping missing directory: ${sourceDir}`);
      continue;
    }

    const sources = fs
      .readdirSync(sourceDir)
      .filter((file) => /\.(jpe?g)$/i.test(file))
      .map((file) => path.join(sourceDir, file));

    allSources = allSources.concat(sources);
  }

  allSources.sort();

  console.log(`Generating responsive photos for ${allSources.length} source images...`);

  let processed = 0;

  for (const sourcePath of allSources) {
    try {
      const { baseName, results } = await generateVariants(sourcePath);
      processed += 1;
      console.log(`✓ ${baseName} → ${results.join(', ')}`);
    } catch (error) {
      console.error(`✗ ${path.basename(sourcePath)}:`, error.message);
    }
  }

  console.log(`\nDone. Generated variants for ${processed}/${allSources.length} images.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
