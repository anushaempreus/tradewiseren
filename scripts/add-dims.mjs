// Embed real width/height into lib/projects.json so project galleries can
// render portrait photos as portrait (client change request #9).
// Run after gen-projects.mjs: node scripts/add-dims.mjs
import { readFile, writeFile } from 'node:fs/promises';
import { imageSizeFromFile } from 'image-size/fromFile';

const projects = JSON.parse(await readFile('lib/projects.json', 'utf8'));

for (const p of projects) {
  p.images = await Promise.all(
    p.images.map(async (img) => {
      const src = typeof img === 'string' ? img : img.src;
      const { width, height } = await imageSizeFromFile('public' + src);
      return { src, w: width, h: height };
    })
  );
}

await writeFile('lib/projects.json', JSON.stringify(projects, null, 2));
const total = projects.reduce((n, p) => n + p.images.length, 0);
const portrait = projects.reduce(
  (n, p) => n + p.images.filter((i) => i.h > i.w).length,
  0
);
console.log(`${projects.length} projects, ${total} images (${portrait} portrait)`);
