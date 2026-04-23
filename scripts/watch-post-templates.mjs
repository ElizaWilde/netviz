import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, 'src', 'data', 'post');
const AUTHOR = 'QYep';
const DEFAULT_EXCERPT = "'' # 摘抄";
const CATEGORY_TITLE_BY_FOLDER = {
  'Spring Framework Core': 'Spring / Framework Core',
};

const seen = new Set();

const formatDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

const toTitleFromFilename = (filename) => path.basename(filename, path.extname(filename));

const toCategoryFromFolder = (filePath) => {
  const relativeDir = path.relative(POSTS_DIR, path.dirname(filePath));
  if (!relativeDir || relativeDir === '.') return '';

  const firstSegment = relativeDir.split(path.sep)[0];
  const match = firstSegment.match(/^p\d+-(.+)$/i);
  if (!match) return '';

  const folderLabel = match[1];
  return CATEGORY_TITLE_BY_FOLDER[folderLabel] ?? folderLabel;
};

const buildTemplate = (filePath) => {
  const date = formatDate();
  const title = toTitleFromFilename(filePath);
  const category = toCategoryFromFolder(filePath);

  return `---
title: '${title}'

publishDate: ${date}

updateDate: ${date}

draft: true

excerpt: ${DEFAULT_EXCERPT}

category: '${category}'

author: '${AUTHOR}'

metadata: {}
---

---



---\n`;
};

const shouldInitialize = (filePath) => {
  if (path.basename(filePath) === '_template.md') return false;
  if (!filePath.endsWith('.md')) return false;
  if (!filePath.startsWith(POSTS_DIR)) return false;
  return true;
};

const initializeFile = (filePath) => {
  if (!shouldInitialize(filePath) || seen.has(filePath)) return;

  seen.add(filePath);

  setTimeout(() => {
    try {
      if (!fs.existsSync(filePath)) return;

      const stat = fs.statSync(filePath);
      if (!stat.isFile()) return;
      if (stat.size > 0) return;

      fs.writeFileSync(filePath, buildTemplate(filePath), 'utf8');
      console.log(`[post-template] initialized ${path.relative(ROOT, filePath)}`);
    } catch (error) {
      console.error(`[post-template] failed to initialize ${filePath}`);
      console.error(error);
    } finally {
      seen.delete(filePath);
    }
  }, 120);
};

const walk = (dirPath) => {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    }
  }
};

if (!fs.existsSync(POSTS_DIR)) {
  console.error(`[post-template] missing posts directory: ${POSTS_DIR}`);
  process.exit(1);
}

walk(POSTS_DIR);

fs.watch(
  POSTS_DIR,
  {
    recursive: true,
  },
  (_, filename) => {
    if (!filename) return;
    const filePath = path.join(POSTS_DIR, filename);
    initializeFile(filePath);
  }
);

console.log(`[post-template] watching ${POSTS_DIR}`);
