// Second pass: gentle re-scrape with 429 backoff. Fetches missing page HTML,
// rebuilds page-images.json with fallback URL candidates, downloads missing images.
import { mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://tradewiserenovations.com';
const OUT_IMG = 'public/images';
const OUT_DATA = 'scripts/scraped';
const UA = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126 Safari/537.36' } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchRetry(url, tries = 6) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, UA);
    if (r.status === 429) { await sleep(15000 * (i + 1)); continue; }
    return r;
  }
  return { ok: false, status: 429 };
}

// Given a raw image URL from HTML, return candidate original URLs in preference order.
function candidates(raw) {
  const m = raw.match(/tradewiserenovations\.com\/(wp-content\/uploads\/[^"'\s?]+\.(?:jpe?g|png|webp|gif))/i);
  if (!m) return null;
  const found = `${SITE}/${m[1]}`;
  const stripped = found.replace(/-\d+x\d+(?=\.(?:jpe?g|png|webp|gif)$)/i, '');
  const scaled = stripped.replace(/(\.(?:jpe?g|png|webp|gif))$/i, '-scaled$1');
  const list = [];
  if (stripped !== found) list.push(stripped, scaled, found);
  else list.push(found, scaled);
  return { key: stripped, list };
}

async function main() {
  const sitemap = await (await fetchRetry(`${SITE}/page-sitemap.xml`)).text();
  const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((u) => u[1]);

  // 1. fetch any page HTML we don't have yet
  for (const page of pages) {
    const slug = new URL(page).pathname.replace(/\/$/, '').replace(/^\//, '') || 'home';
    const file = path.join(OUT_DATA, slug.replace(/\//g, '__') + '.html');
    if (existsSync(file)) continue;
    const r = await fetchRetry(page);
    if (!r.ok) { console.error(`FAIL page ${slug}: ${r.status}`); continue; }
    await writeFile(file, await r.text());
    console.log(`fetched ${slug}`);
    await sleep(1200);
  }

  // 2. rebuild image map from all saved HTML
  const pageImages = {};
  const imageMap = new Map(); // key -> candidate list
  for (const f of await readdir(OUT_DATA)) {
    if (!f.endsWith('.html')) continue;
    const slug = f.replace(/\.html$/, '').replace(/__/g, '/');
    const html = await readFile(path.join(OUT_DATA, f), 'utf8');
    const keys = new Set();
    for (const m of html.matchAll(/https?:\/\/[^"'\s\\]+\.(?:jpe?g|png|webp|gif)/gi)) {
      const c = candidates(m[0]);
      if (!c || /cropped-NEW-Logo/.test(c.key)) continue;
      keys.add(c.key);
      const prev = imageMap.get(c.key);
      if (prev) c.list.forEach((u) => { if (!prev.includes(u)) prev.push(u); });
      else imageMap.set(c.key, c.list);
    }
    pageImages[slug] = [...keys];
  }
  await writeFile(path.join(OUT_DATA, 'page-images.json'), JSON.stringify(pageImages, null, 2));
  console.log(`${Object.keys(pageImages).length} pages, ${imageMap.size} unique images`);

  // 3. download missing images, gentle pace, record where each key actually landed
  const resolved = {}; // key -> local rel path (under public/images)
  let ok = 0, fail = 0, skipped = 0;
  for (const [key, list] of imageMap) {
    const rel = key.replace(`${SITE}/wp-content/uploads/`, '');
    const dest = path.join(OUT_IMG, rel.replace(/\//g, path.sep));
    if (existsSync(dest)) { resolved[key] = rel; skipped++; continue; }
    let done = false;
    for (const url of list) {
      const r = await fetchRetry(url);
      if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      await mkdir(path.dirname(dest), { recursive: true });
      await writeFile(dest, buf);
      resolved[key] = rel;
      ok++; done = true;
      break;
    }
    if (!done) { fail++; console.error(`FAIL img ${key}`); }
    await sleep(400);
  }
  await writeFile(path.join(OUT_DATA, 'resolved-images.json'), JSON.stringify(resolved, null, 2));
  console.log(`images: ${ok} downloaded, ${skipped} already present, ${fail} failed`);
}

main();
