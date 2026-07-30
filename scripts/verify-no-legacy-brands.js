#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const SCAN_PATHS = [
  path.join(ROOT, 'src'),
  path.join(ROOT, 'public'),
  path.join(ROOT, 'redirects'),
  path.join(ROOT, 'next.config.js'),
];

const BANNED_PATTERNS = [
  { label: 'acehost', regex: /acehost/i },
  { label: 'ace host', regex: /ace\s+host/i },
  { label: 'acehost.ca', regex: /acehost\.ca/i },
  { label: 'ben@acehost', regex: /ben@acehost/i },
  { label: 'ace cascade', regex: /ace\s+cascade/i },
  { label: 'acecascade', regex: /acecascade/i },
  { label: 'whistler', regex: /whistler/i },
  { label: 'kadenwood', regex: /kadenwood/i },
  { label: 'vacation rental', regex: /vacation\s+rental/i },
  { label: 'property management', regex: /property\s+management/i },
];

const IGNORED_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  'out',
  'build',
  'dist',
  '.cache',
]);

function collectFiles(targetPath) {
  const files = [];

  if (!fs.existsSync(targetPath)) {
    return files;
  }

  const stat = fs.statSync(targetPath);
  if (stat.isFile()) {
    return [targetPath];
  }

  for (const entry of fs.readdirSync(targetPath)) {
    const fullPath = path.join(targetPath, entry);
    const entryStat = fs.statSync(fullPath);

    if (entryStat.isDirectory()) {
      if (IGNORED_DIRS.has(entry)) continue;
      files.push(...collectFiles(fullPath));
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

function isTextFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return [
    '.ts',
    '.tsx',
    '.js',
    '.jsx',
    '.json',
    '.md',
    '.txt',
    '.xml',
    '.css',
    '.html',
    '.svg',
    '.webmanifest',
    '.mjs',
    '.cjs',
    '',
  ].includes(ext);
}

function scanFile(filePath) {
  if (!isTextFile(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const matches = [];

  lines.forEach((line, index) => {
    for (const pattern of BANNED_PATTERNS) {
      if (pattern.regex.test(line)) {
        matches.push({
          file: path.relative(ROOT, filePath),
          line: index + 1,
          label: pattern.label,
          excerpt: line.trim().slice(0, 120),
        });
      }
    }
  });

  return matches;
}

function main() {
  const allFiles = SCAN_PATHS.flatMap((scanPath) => collectFiles(scanPath));
  const violations = allFiles.flatMap(scanFile);

  if (violations.length === 0) {
    console.log('✓ No legacy brand references found.');
    process.exit(0);
  }

  console.error('Legacy brand references detected:\n');
  for (const violation of violations) {
    console.error(
      `- ${violation.file}:${violation.line} [${violation.label}] ${violation.excerpt}`
    );
  }
  console.error(`\nFound ${violations.length} violation(s).`);
  process.exit(1);
}

main();
