// Extract readable text from a scraped HTML file: node scripts/extract-text.mjs <slug>
import { readFile } from 'node:fs/promises';

const slug = process.argv[2];
let h = await readFile(`scripts/scraped/${slug}.html`, 'utf8');
h = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
const start = h.search(/<h1/i);
const end = h.search(/<footer/i);
if (start > -1) h = h.slice(start, end > start ? end : undefined);
const text = h
  .replace(/<(h[1-6])[^>]*>/g, '\n\n## ')
  .replace(/<li[^>]*>/g, '\n- ')
  .replace(/<\/p>|<br\s*\/?>/g, '\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ')
  .replace(/&#8217;|&rsquo;/g, "’")
  .replace(/&#8211;|&ndash;/g, '–')
  .replace(/&#8220;|&#8221;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/[ \t]+/g, ' ')
  .replace(/\n{3,}/g, '\n\n');
console.log(text.trim());
