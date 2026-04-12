const fs = require('fs/promises');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WWW_DIR = path.join(ROOT, 'www');

const STATIC_FILES = ['index.html', 'manifest.json', 'sw.js'];
const STATIC_DIRS = ['scripts', 'styles', 'icons'];
const STATIC_ASSET_JPG_ALLOWLIST = new Set([
  path.normalize('assets/icon-shop.jpg'),
  path.normalize('assets/icon-family.jpg')
]);

async function removeDir(targetPath) {
  await fs.rm(targetPath, { recursive: true, force: true });
}

async function ensureDir(targetPath) {
  await fs.mkdir(targetPath, { recursive: true });
}

async function copyFileRelative(relativePath) {
  const sourcePath = path.join(ROOT, relativePath);
  const targetPath = path.join(WWW_DIR, relativePath);
  await ensureDir(path.dirname(targetPath));
  await fs.copyFile(sourcePath, targetPath);
}

async function copyDirRelative(relativePath) {
  const sourcePath = path.join(ROOT, relativePath);
  const targetPath = path.join(WWW_DIR, relativePath);
  await fs.cp(sourcePath, targetPath, { recursive: true });
}

async function copyAssetsRelative(relativePath = 'assets') {
  const sourcePath = path.join(ROOT, relativePath);
  const targetPath = path.join(WWW_DIR, relativePath);
  await ensureDir(targetPath);

  const entries = await fs.readdir(sourcePath, { withFileTypes: true });
  for (const entry of entries) {
    const childRelativePath = path.join(relativePath, entry.name);
    const normalizedRelativePath = path.normalize(childRelativePath);

    if (entry.isDirectory()) {
      await copyAssetsRelative(childRelativePath);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    const isLargeSourceJpg = (extension === '.jpg' || extension === '.jpeg')
      && !STATIC_ASSET_JPG_ALLOWLIST.has(normalizedRelativePath);

    if (isLargeSourceJpg) {
      continue;
    }

    await copyFileRelative(childRelativePath);
  }
}

async function build() {
  await removeDir(WWW_DIR);
  await ensureDir(WWW_DIR);

  for (const relativePath of STATIC_FILES) {
    await copyFileRelative(relativePath);
  }

  for (const relativePath of STATIC_DIRS) {
    await copyDirRelative(relativePath);
  }

  await copyFileRelative(path.join('data', 'venues.json'));
  await copyAssetsRelative();
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
