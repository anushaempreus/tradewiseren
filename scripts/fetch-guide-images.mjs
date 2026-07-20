// Download guide-page images. If the original wp-content URL 404s, fall back to
// the NitroPack CDN URL found in the saved page HTML.
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const UA = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126' } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const WANTED = [
  '2023/10/kitchen-renovations-canberra-1.jpg',
  '2023/10/kitchen-renovations-canberra-2.jpg',
  '2023/10/kitchen-renovations-canberra-3.jpg',
  '2023/10/Home-Renovations-Canberra-1.jpg',
  '2023/10/Home-Renovations-Canberra-2.jpg',
  '2023/10/Home-Renovations-Canberra-3.jpg',
  '2023/10/bathroom-renovations-canberra-01.jpg',
  '2023/10/bathroom-renovations-canberra-02.jpg',
  '2023/10/bathroom-renovations-canberra-03.jpg',
  '2024/08/kitchen-design-canberra-2.jpeg',
  '2024/08/kitchen-design-canberra-5.jpeg',
  '2024/09/kitchen-design-canberra-2.jpg',
  '2024/09/kitchen-design-canberra-1.jpg',
  '2024/09/interior-designer-canberra.jpg',
  '2024/08/interior-designer-canberra-1.jpg',
  '2024/08/interior-designer-canberra-3.jpg',
  '2023/10/Tradewise-kitchen-1170x658-1.webp',
  '2023/10/Interiors-Copy.webp',
  '2024/07/Home-Renovations-Canberra-1.jpg',
  '2018/12/Bathroom-Renovations-1170x658-1.webp',
];

// Build a lookup of every image URL present in the scraped HTML files
const allHtml = [];
for (const f of await readdir('scripts/scraped')) {
  if (f.endsWith('.html')) allHtml.push(await readFile(path.join('scripts/scraped', f), 'utf8'));
}
const blob = allHtml.join('\n');

for (const rel of WANTED) {
  const dest = path.join('public/images', rel.replace(/\//g, path.sep));
  if (existsSync(dest)) { console.log('have  ' + rel); continue; }
  const file = rel.split('/').pop();
  const candidates = [
    `https://tradewiserenovations.com/wp-content/uploads/${rel}`,
    // any nitropack URL in the HTML that ends with this path
    ...[...blob.matchAll(new RegExp(`https://tradewiserenovations\\.com/nitropack_static/[^"'\\s\\\\]+/${rel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'))].map((m) => m[0]),
    // scaled variant
    `https://tradewiserenovations.com/wp-content/uploads/${rel.replace(/(\.[a-z]+)$/i, '-scaled$1')}`,
  ];
  let ok = false;
  for (const url of [...new Set(candidates)]) {
    const r = await fetch(url, UA);
    if (r.status === 429) { await sleep(15000); continue; }
    if (!r.ok) continue;
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await r.arrayBuffer()));
    console.log('got   ' + rel + (url.includes('nitropack') ? ' (nitropack)' : ''));
    ok = true;
    break;
  }
  if (!ok) console.error('FAIL  ' + rel + ` (${file})`);
  await sleep(600);
}
