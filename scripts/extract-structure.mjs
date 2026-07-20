// Print ordered structure (headings, paragraphs, images) of a scraped page:
// node scripts/extract-structure.mjs <slug>
import { readFile } from 'node:fs/promises';

const slug = process.argv[2];
let h = await readFile(`scripts/scraped/${slug}.html`, 'utf8');
h = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<noscript[\s\S]*?<\/noscript>/g, '');
const start = h.search(/<h1/i);
const end = h.search(/<footer/i);
if (start > -1) h = h.slice(start, end > start ? end : undefined);

const tokens = [...h.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>|<img[^>]*>|<p[^>]*>([\s\S]*?)<\/p>|background-image:\s*url\(([^)]+)\)/gi)];
const clean = (s) => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&#8217;|&rsquo;/g, "’").replace(/&#8211;|&ndash;/g, '–').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
for (const t of tokens) {
  const raw = t[0];
  if (raw.startsWith('<img')) {
    const src = raw.match(/(?:data-src|src)="([^"]+)"/)?.[1] ?? '';
    const orig = src.match(/uploads\/[^"'?]+/)?.[0];
    if (orig && !/logo|Address-pin|pod-icon|\/n\d/i.test(orig)) console.log(`  [IMG] ${orig}`);
  } else if (t[4]) {
    const orig = t[4].match(/uploads\/[^"'?)]+/)?.[0];
    if (orig && !/logo|Address-pin|pod-icon/i.test(orig)) console.log(`  [BG ] ${orig}`);
  } else if (t[1]) {
    const txt = clean(t[2]);
    if (txt) console.log(`${t[1].toUpperCase()}: ${txt}`);
  } else if (t[3] !== undefined) {
    const txt = clean(t[3]);
    if (txt && txt.length > 2) console.log(`  p: ${txt.slice(0, 160)}`);
  }
}
