// Generate lib/projects.json from scraped page-image data.
// Images appearing on many pages are chrome (logos, icons, backgrounds) and excluded.
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const pageImages = JSON.parse(await readFile('scripts/scraped/page-images.json', 'utf8'));

const GALLERY = [
  ['ensuite-bonython', 'Ensuite, Bonython', 'bathroom'],
  ['bathroom-toilet-bonython', 'Bathroom & Ensuite, Bonython', 'bathroom'],
  ['bathroom-kambah', 'Bathroom, Kambah', 'bathroom'],
  ['ensuite-forde', 'Ensuite, Forde', 'bathroom'],
  ['bathroom-gowrie', 'Bathroom, Gowrie', 'bathroom'],
  ['ensuite-deakin', 'Ensuite, Deakin', 'bathroom'],
  ['mainbathroom-calwell', 'Main Bathroom, Calwell', 'bathroom'],
  ['main-bathroom-conder', 'Main Bathroom, Conder', 'bathroom'],
  ['ensuite-kambah', 'Ensuite, Kambah', 'bathroom'],
  ['bathroom-chapman', 'Bathroom, Chapman', 'bathroom'],
  ['ensuite-bathroom-powderoom-chapman', 'Ensuite, Bathroom & Powder Room, Chapman', 'bathroom'],
  ['bathroom-toilet-monash', 'Bathroom & Toilet, Monash', 'bathroom'],
  ['bathroomensuitetoilet-conder', 'Bathroom, Ensuite & Toilet, Conder', 'bathroom'],
  ['bathroom-florey', 'Bathroom, Florey', 'bathroom'],
  ['mainbathroom-conder', 'Main Bathroom, Conder', 'bathroom'],
  ['kitchen-bonython-2', 'Kitchen, Bonython', 'kitchen'],
  ['kitchen-dickson', 'Kitchen, Dickson', 'kitchen'],
  ['kitchen-project', 'Kitchen Project', 'kitchen'],
  ['kitchen-fadden', 'Kitchen, Fadden', 'kitchen'],
  ['alfresco-bonython', 'Alfresco, Bonython', 'kitchen'],
  ['kitchen-kambah', 'Kitchen, Kambah', 'kitchen'],
  ['kitchen-jerrabomberra', 'Kitchen, Jerrabomberra', 'kitchen'],
  ['kitchen-bonython-3', 'Kitchen, Bonython', 'kitchen'],
  ['kitchen-calwell-2', 'Kitchen, Calwell', 'kitchen'],
  ['kitchen-conder', 'Kitchen, Conder', 'kitchen'],
  ['kitchen-bonython', 'Kitchen, Bonython', 'kitchen'],
  ['kitchen-calwell', 'Kitchen, Calwell', 'kitchen'],
  ['kitchen-monash', 'Kitchen, Monash', 'kitchen'],
  ['laundry-bonython-2', 'Laundry, Bonython', 'laundry'],
  ['laundry-project', 'Laundry Project', 'laundry'],
  ['laundry-bonython', 'Laundry, Bonython', 'laundry'],
  ['laundry-jerrabomberra', 'Laundry, Jerrabomberra', 'laundry'],
  ['laundry-kambah', 'Laundry, Kambah', 'laundry'],
  ['laundry-oxley', 'Laundry, Oxley', 'laundry'],
  ['laundry-macgregor', 'Laundry, Macgregor', 'laundry'],
  ['laundry-conder', 'Laundry, Conder', 'laundry'],
  ['living-areas-bonython', 'Living Areas, Bonython', 'interior'],
  ['living-and-entry-dickson', 'Living and Entry, Dickson', 'interior'],
  ['office-bonython', 'Office, Bonython', 'interior'],
  ['rumpus-room-calwell', 'Rumpus Room, Calwell', 'interior'],
];

// count how many pages each image appears on; frequent = site chrome, not project photos
const freq = new Map();
for (const imgs of Object.values(pageImages))
  for (const u of imgs) freq.set(u, (freq.get(u) || 0) + 1);

const toLocal = (u) => '/images/' + u.replace(/^https:\/\/tradewiserenovations\.com\/wp-content\/uploads\//, '');

const projects = [];
for (const [slug, title, category] of GALLERY) {
  const urls = pageImages[slug] || [];
  const images = urls
    .filter((u) => (freq.get(u) || 0) <= 3)
    .map(toLocal)
    .filter((p) => existsSync('public' + p));
  if (!images.length) { console.warn(`WARN ${slug}: no images`); continue; }
  projects.push({ slug, title, category, images });
}

await writeFile('lib/projects.json', JSON.stringify(projects, null, 2));
console.log(`${projects.length} projects written`);
for (const p of projects) console.log(`${p.slug}: ${p.images.length} images`);
