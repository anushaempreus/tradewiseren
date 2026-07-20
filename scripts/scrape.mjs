// Scrape tradewiserenovations.com: map each page to its original wp-content images,
// download all originals into public/images/, and save the mapping + page HTML for reference.
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://tradewiserenovations.com';
const OUT_IMG = 'public/images';
const OUT_DATA = 'scripts/scraped';
const UA = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126 Safari/537.36' } };

const fetchText = async (url) => {
  const r = await fetch(url, UA);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
};

// Normalize any image URL (incl. nitropack-cached) to the original wp-content URL,
// and strip WxH thumbnail suffixes so we download full-size originals.
function normalize(url) {
  const m = url.match(/tradewiserenovations\.com\/(wp-content\/uploads\/[^"'\s?]+\.(?:jpe?g|png|webp|gif))/i);
  if (!m) return null;
  let p = m[1];
  p = p.replace(/-\d+x\d+(?=\.(?:jpe?g|png|webp|gif)$)/i, '');
  return `${SITE}/${p}`;
}

async function main() {
  await mkdir(OUT_DATA, { recursive: true });
  const sitemap = await fetchText(`${SITE}/page-sitemap.xml`);
  const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`${pages.length} pages in sitemap`);

  const pageImages = {};
  const allImages = new Set();

  for (const page of pages) {
    const slug = new URL(page).pathname.replace(/\/$/, '').replace(/^\//, '') || 'home';
    try {
      const html = await fetchText(page);
      await writeFile(path.join(OUT_DATA, slug.replace(/\//g, '__') + '.html'), html);
      const found = new Set();
      for (const m of html.matchAll(/https?:\/\/[^"'\s\\]+\.(?:jpe?g|png|webp|gif)/gi)) {
        const orig = normalize(m[0]);
        if (orig && !/cropped-NEW-Logo|NEW-Logo-High-Res/.test(orig)) found.add(orig);
      }
      // logo handled separately
      pageImages[slug] = [...found];
      found.forEach((u) => allImages.add(u));
      console.log(`${slug}: ${found.size} images`);
    } catch (e) {
      console.error(`FAIL page ${page}: ${e.message}`);
    }
  }
  allImages.add(`${SITE}/wp-content/uploads/2023/11/NEW-Logo-High-Res.png`);

  await writeFile(path.join(OUT_DATA, 'page-images.json'), JSON.stringify(pageImages, null, 2));
  console.log(`\nDownloading ${allImages.size} unique images...`);

  let ok = 0, fail = 0;
  const queue = [...allImages];
  const workers = Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      const rel = url.replace(`${SITE}/wp-content/uploads/`, '');
      const dest = path.join(OUT_IMG, rel.replace(/\//g, path.sep));
      if (existsSync(dest)) { ok++; continue; }
      try {
        let r = await fetch(url, UA);
        if (!r.ok && /\.jpg$/i.test(url)) r = await fetch(url.replace(/\.jpg$/i, '-scaled.jpg'), UA);
        if (!r.ok) throw new Error(r.status);
        const buf = Buffer.from(await r.arrayBuffer());
        await mkdir(path.dirname(dest), { recursive: true });
        await writeFile(dest, buf);
        ok++;
      } catch (e) {
        fail++;
        console.error(`FAIL img ${url}: ${e.message}`);
      }
    }
  });
  await Promise.all(workers);
  console.log(`Images done: ${ok} ok, ${fail} failed`);
}

main();
