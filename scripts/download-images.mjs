import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../public/images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToDownload = [
  // Destination 1: Coastal Village
  {
    name: 'coastal-village-detail.jpg',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Weathered nautical mooring lines on wet wooden dock'
  },
  {
    name: 'coastal-village-portrait.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    description: 'Elder maritime fisherman portrait in wool sweater'
  },
  // Destination 2: Mountain Road
  {
    name: 'mountain-road-wide.jpg',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80',
    description: 'Serpentine alpine pass weaving through jagged granite peaks'
  },
  {
    name: 'mountain-road-hut.jpg',
    url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
    description: 'Solitary alpine stone shelter hut beneath towering cliffs'
  },
  {
    name: 'mountain-road-detail.jpg',
    url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    description: 'Brass vintage compass resting on topographical field map'
  },
  // Destination 3: Rainy City
  {
    name: 'rainy-city-wide.jpg',
    url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=80',
    description: 'Rainy Tokyo alleyway illuminated by soft amber paper lanterns'
  },
  {
    name: 'rainy-city-detail.jpg',
    url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    description: 'Steaming ceramic tea cup on wet cedar window ledge'
  },
  {
    name: 'rainy-city-portrait.jpg',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    description: 'Antiquarian bookseller shelter in rainy twilight'
  },
  // Destination 4: Countryside Train Station
  {
    name: 'train-station-wide.jpg',
    url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1800&q=80',
    description: 'Single-track rural railway station amid rolling golden hills'
  },
  {
    name: 'train-station-bench.jpg',
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    description: 'Empty wooden waiting bench on quiet sunlit railway platform'
  },
  {
    name: 'train-station-portrait.jpg',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    description: 'Solo traveler with canvas luggage waiting by the tracks'
  },
  // Destination 5: Remote Seaside Landscape
  {
    name: 'seaside-landscape-wide.jpg',
    url: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=1800&q=80',
    description: 'Expansive desolate pebble beach under heavy brooding maritime clouds'
  },
  {
    name: 'seaside-beacon.jpg',
    url: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1200&q=80',
    description: 'Solitary coastal navigation lighthouse weathering ocean gale'
  },
  {
    name: 'seaside-detail.jpg',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Sea glass, tide-smoothed stones and salt spray'
  },
  // Extra Travel Story chapters & editorial images
  {
    name: 'story-sleeper-car.jpg',
    url: 'https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&w=1600&q=80',
    description: 'Interior of midnight sleeper rail carriage with reading light'
  },
  {
    name: 'story-foggy-pine.jpg',
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
    description: 'Ancient pine forest shrouded in dense Arctic dawn fog'
  },
  {
    name: 'contributor-elena.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    description: 'Elena Lindqvist portrait'
  },
  {
    name: 'contributor-marcus.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    description: 'Marcus Vance portrait'
  },
  {
    name: 'contributor-kenji.jpg',
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    description: 'Kenji Takahashi portrait'
  }
];

async function downloadAll() {
  console.log(`Starting download of ${imagesToDownload.length} curated images...`);
  for (const item of imagesToDownload) {
    const dest = path.join(targetDir, item.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`[SKIP] Already exists: ${item.name}`);
      continue;
    }
    try {
      console.log(`[FETCH] ${item.name} (${item.description})...`);
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`[OK] Saved ${item.name} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`[ERR] Failed to download ${item.name}: ${err.message}`);
    }
  }
  console.log('All downloads completed!');
}

downloadAll();

