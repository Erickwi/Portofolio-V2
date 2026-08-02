import sharp from 'sharp';
import { readdir, stat, writeFile, unlink, rename } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '..', 'src', 'assets');
const SUPPORTED_EXT = ['.png', '.jpg', '.jpeg'];
const QUALITY = 80;

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      const subFiles = await getImages(fullPath);
      files.push(...subFiles);
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (SUPPORTED_EXT.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeImage(filePath) {
  const before = (await stat(filePath)).size;
  const ext = extname(filePath).toLowerCase();
  const filename = filePath.split(/[\\/]/).pop();
  const tmpFile = join(dirname(filePath), `.opt-${Date.now()}${ext}`);

  let pipeline = sharp(filePath);

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
  } else if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  }

  await pipeline.toFile(tmpFile);
  await unlink(filePath);
  await rename(tmpFile, filePath);

  const after = (await stat(filePath)).size;
  const saved = before - after;
  const pct = ((saved / before) * 100).toFixed(1);

  return { filename, before, after, saved, pct };
}

async function main() {
  console.log('Optimizando imagenes en src/assets/...\n');

  const images = await getImages(ASSETS_DIR);

  if (images.length === 0) {
    console.log('No se encontraron imagenes para optimizar.');
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    const result = await optimizeImage(img);
    totalBefore += result.before;
    totalAfter += result.after;

    console.log(
      `${result.filename}: ${formatSize(result.before)} → ${formatSize(result.after)} (-${result.pct}%)`
    );
  }

  const totalSaved = totalBefore - totalAfter;
  const totalPct = ((totalSaved / totalBefore) * 100).toFixed(1);

  console.log('\n--- Resumen ---');
  console.log(`Total antes:  ${formatSize(totalBefore)}`);
  console.log(`Total despues: ${formatSize(totalAfter)}`);
  console.log(`Ahorrado:     ${formatSize(totalSaved)} (-${totalPct}%)`);
}

main().catch(console.error);
