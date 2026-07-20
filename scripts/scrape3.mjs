// Third pass: hash-prefixed NitroPack filenames (<md5hash>.<name>.jpg) — fetch the
// de-hashed original and update page-images.json keys to match.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://tradewiserenovations.com';
const UA = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126 Safari/537.36' } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const file = 'scripts/scraped/page-images.json';
const pageImages = JSON.parse(await readFile(file, 'utf8'));
const HASH = /\/[0-9a-f]{32}\.(?=[^/]+$)/;

const tried = new Map();
for (const [slug, urls] of Object.entries(pageImages)) {
  for (let i = 0; i < urls.length; i++) {
    if (!HASH.test(urls[i])) continue;
    const clean = urls[i].replace(HASH, '/');
    urls[i] = clean;
    if (tried.has(clean)) continue;
    tried.set(clean, true);
    const rel = clean.replace(`${SITE}/wp-content/uploads/`, '');
    const dest = path.join('public/images', rel.replace(/\//g, path.sep));
    if (existsSync(dest)) continue;
    for (const cand of [clean, clean.replace(/(\.[a-z]+)$/i, '-scaled$1')]) {
      const r = await fetch(cand, UA);
      if (r.ok) {
        await mkdir(path.dirname(dest), { recursive: true });
        await writeFile(dest, Buffer.from(await r.arrayBuffer()));
        console.log(`got ${rel}`);
        break;
      }
      if (r.status === 429) await sleep(15000);
    }
    await sleep(400);
  }
  pageImages[slug] = [...new Set(urls)];
}
await writeFile(file, JSON.stringify(pageImages, null, 2));
console.log('done');
