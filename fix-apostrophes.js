const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files that contain &apos;
const findFilesWithApostrophesCmd = 'grep -r --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" -l "&apos;" src';
const files = execSync(findFilesWithApostrophesCmd, { encoding: 'utf8' }).split('\n').filter(Boolean);

console.log(`Found ${files.length} files with &apos; entities.`);

let totalReplacements = 0;

files.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File ${filePath} not found, skipping.`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace &apos; with '
    content = content.replace(/&apos;/g, "'");
    
    // Count replacements
    const replacementsInFile = (originalContent.match(/&apos;/g) || []).length;
    totalReplacements += replacementsInFile;
    
    if (originalContent !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ${replacementsInFile} occurrences in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
});

console.log(`Total replacements: ${totalReplacements}`);
console.log('Apostrophe replacement complete!'); 