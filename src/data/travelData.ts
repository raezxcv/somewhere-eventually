import type { Destination, JournalExcerpt, TravelStory, Contributor } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'reinefjorden',
    title: 'Reinefjorden & The Outer Skerries',
    subtitle: 'Salt fog, dried cod frames, and the midnight tide of the 68th parallel',
    category: 'Coastal',
    region: 'Lofoten Archipelago',
    country: 'Norway',
    coordinates: '67°55′32″N 13°05′24″E',
    elevationOrSea: '0 m · Vestfjorden Tidal Basin',
    bestHours: '04:15–06:30 (Arctic nautical dawn)',
    soundscape: 'Rattling stays on aluminum masts, gulls circling gutting tables, low engine thrum',
    description:
      'Reine does not present itself for inspection; it endures. The red rorbu huts cling to glacier-scoured granite shelves by forged iron anchors, their cedar stilts submerged in brine so clear it reveals sea urchins three fathoms below. In late autumn, before the polar darkness seals the fjords, the light turns into a cold, persistent slate blue. The smell here is honest: birch smoke, cured stockfish drying on timber racks, and the sharp ozone of the North Atlantic.',
    editorialExcerpt:
      'We slept with the harbor-facing window unlatched. Around four in the morning, the diesel cutter Havsula sputtered alive, vibrating through the pine floorboards. Out on the pier, no one hurried. You don’t hurry when the swell outside the breakwater is three meters high.',
    coverImage: {
      id: 'norway-wide',
      url: '/images/coastal-village-wide.jpg',
      caption: 'Crimson rorbu huts anchored on granite stilts beneath Reinebringen’s vertical wall, shrouded in sea mist at 05:20.',
      location: 'Reinefjorden, Moskenesøya',
      coordinates: '67°55′32″N 13°05′24″E',
      cameraInfo: {
        camera: 'Hasselblad 500C/M',
        lens: 'Zeiss Distagon 50mm f/4',
        filmStock: 'Kodak Portra 160',
        exposure: '1/60s · f/8 · ISO 160',
        timeOfDay: '05:20 Arctic Twilight'
      },
      aspectRatio: '16:9'
    },
    detailImage: {
      id: 'norway-detail',
      url: '/images/coastal-village-detail.jpg',
      caption: 'Three-strand polyhemp mooring lines crusted with dried brine, taut against the morning ebb tide.',
      location: 'Kabelvåg Old Quay',
      coordinates: '68°12′40″N 14°28′55″E',
      cameraInfo: {
        camera: 'Leica M6',
        lens: 'Summicron 35mm f/2',
        filmStock: 'Ilford HP5 Plus',
        exposure: '1/125s · f/4 · ISO 400',
        timeOfDay: '07:15 Mist'
      },
      aspectRatio: '4:5'
    },
    portraitImage: {
      id: 'norway-portrait',
      url: '/images/coastal-village-portrait.jpg',
      caption: 'Einar Torvund, fourth-generation coastal line fisherman, pausing between baiting tubs at the south wharf.',
      location: 'Å i Lofoten',
      coordinates: '67°52′48″N 12°59′01″E',
      cameraInfo: {
        camera: 'Pentax 67II',
        lens: 'SMC Takumar 105mm f/2.4',
        filmStock: 'Fujicolor Pro 400H',
        exposure: '1/250s · f/2.8 · ISO 400',
        timeOfDay: '10:40 Overcast'
      },
      aspectRatio: '4:5'
    },
    fieldNotes: [
      'The ferry from Bodø arrives at Moskenes after dark; the wake churns luminescence when the sea churns cold.',
      'There is no bank in Reine, only a metal post box and a shed where they grade dried skrei cod by weight and dorsal fin curvature.',
      'To walk out onto the Hamnøy causeway in a gale is to understand that architecture here is merely temporary permission granted by the gale.'
    ],
    associatedStories: ['sleeper-to-narvik']
  },
  {
    id: 'furkapass',
    title: 'The Furka Switchbacks',
    subtitle: 'Cold granite, melting moraines, and the thin air of the 2,429-meter col',
    category: 'Alpine Corridor',
    region: 'Urner Alps / Valais',
    country: 'Switzerland',
    coordinates: '46°34′21″N 08°24′54″E',
    elevationOrSea: '2,429 m · Alpine Divide',
    bestHours: '17:45–19:15 (Granite alpine glow)',
    soundscape: 'Distant cowl bell chimes in deep couloirs, gravel ticking off wheel arches, wind shear',
    description:
      'Built in 1866 to connect Uri with the Valais, the Furkapass road is an exercise in stone masonry against sheer mass. The hairpin turns cling to gneiss scree slopes that shed stones whenever the sun melts the morning frost. At the summit, the defunct Hotel Belvédère sits wedged against the receding tongue of the Rhône Glacier, its faded green shutters locked against sleet that arrives without warning even in August.',
    editorialExcerpt:
      'We shut the engine off at the third bend above Gletsch. The silence was immediate and heavy, broken only by water rushing through subterranean glacial tunnels half a kilometer beneath the roadbed. The air tastes of wet slate and ozone.',
    coverImage: {
      id: 'furka-wide',
      url: '/images/mountain-road-wide.jpg',
      caption: 'The asphalt corridor descending into the Urseren valley as dusk shadow claims the lower pastures.',
      location: 'Furka Pass Summit Western Ramp',
      coordinates: '46°34′21″N 08°24′54″E',
      cameraInfo: {
        camera: 'Mamiya 7II',
        lens: 'Mamiya 65mm f/4 L',
        filmStock: 'Kodak Ektar 100',
        exposure: '1/30s · f/11 · ISO 100',
        timeOfDay: '18:10 Alpenglow'
      },
      aspectRatio: '16:9'
    },
    detailImage: {
      id: 'furka-detail',
      url: '/images/mountain-road-detail.jpg',
      caption: 'Swiss Federal Swisstopo 1:25,000 sheet 1231, marked with grease pencil and weighted by a 1942 prismatic compass.',
      location: 'Refugio Tiefenbach',
      coordinates: '46°35′44″N 08°27′12″E',
      cameraInfo: {
        camera: 'Contax G2',
        lens: 'Biogon 28mm f/2.8',
        filmStock: 'Kodak Tri-X 400',
        exposure: '1/60s · f/5.6 · ISO 400',
        timeOfDay: '14:20 Interior window light'
      },
      aspectRatio: '4:5'
    },
    portraitImage: {
      id: 'furka-portrait',
      url: '/images/mountain-road-hut.jpg',
      caption: 'The stone herdsman’s bothy at Realp, built dry-stone with schist slabs split by hand.',
      location: 'Wittenwasserntal',
      coordinates: '46°33′02″N 08°30′19″E',
      cameraInfo: {
        camera: 'Leica MP',
        lens: 'Summilux 50mm f/1.4',
        filmStock: 'Kodak Portra 400',
        exposure: '1/500s · f/4 · ISO 400',
        timeOfDay: '11:00 Mountain sun'
      },
      aspectRatio: '4:5'
    },
    fieldNotes: [
      'The road opens only when the rotary snow blowers clear the 4-meter drifts in mid-June; by late October, the first black ice shuts the barriers again.',
      'Cyclists cross the pass with mouths dry from hyperventilation, their knuckles white against brake hoods as they descend into the fog bank at Hospental.',
      'In the abandoned ice grotto behind the Belvédère, the light glows a subterranean sapphire.'
    ],
    associatedStories: ['sleeper-to-narvik']
  },
  {
    id: 'yanaka-tokyo',
    title: 'Yanaka & The Drizzling Lanes',
    subtitle: 'Cedar shingles, tea steam, and the wooden thresholds of Shitawachi',
    category: 'Urban Alleyways',
    region: 'Taito & Bunkyo Wards',
    country: 'Japan',
    coordinates: '35°43′16″N 139°46′04″E',
    elevationOrSea: '18 m · Ueno Upland Terrace',
    bestHours: '16:30–18:00 (Lantern ignition & shop shutters)',
    soundscape: 'Bicycle bells on damp paving stones, rain dripping from copper gutters, wooden sliding doors sliding shut',
    description:
      'Yanaka survived both the 1923 Great Kantō earthquake and the 1945 incendiary bombings, leaving its narrow Edo-era property lines intact. There are no gleaming steel towers here; instead, the world is measured in potted bonsai on wooden stools, exposed copper drainpipes oxidised to chalky verdigris, and the smell of toasted sesame oil drifting from back-alley soba shops.',
    editorialExcerpt:
      'When the autumn rain began, we stepped beneath the tiled eaves of an antique paper merchant near the cemetery. An old woman was slowly wrapping cedar woodblock prints in translucent washi with fingertips stained indigo. No music played. Just rain ticking against corrugated plastic awnings.',
    coverImage: {
      id: 'yanaka-wide',
      url: '/images/rainy-city-wide.jpg',
      caption: 'The approach to Yanaka Ginza stairwell at dusk; umbrellas reflecting neon ramen signs and wet flagstones.',
      location: 'Yuyake Dandan Steps',
      coordinates: '35°43′40″N 139°45′59″E',
      cameraInfo: {
        camera: 'Fujifilm TX-1 (XPan)',
        lens: 'Super EBC 45mm f/4',
        filmStock: 'Cinestill 800T',
        exposure: '1/30s · f/4 · ISO 800',
        timeOfDay: '17:35 Rainy Twilight'
      },
      aspectRatio: '16:9'
    },
    detailImage: {
      id: 'yanaka-detail',
      url: '/images/rainy-city-detail.jpg',
      caption: 'Hagi-ware ceramic bowl filled with steaming houjicha on a water-stained cedar counter.',
      location: 'Kissa Kayaba Alley',
      coordinates: '35°43′14″N 139°46′10″E',
      cameraInfo: {
        camera: 'Leica M10-R',
        lens: 'Noctilux 50mm f/0.95',
        filmStock: 'Digital DNG (Kodachrome Profile)',
        exposure: '1/90s · f/1.4 · ISO 400',
        timeOfDay: '15:10 Afternoon Drizzle'
      },
      aspectRatio: '4:5'
    },
    portraitImage: {
      id: 'yanaka-portrait',
      url: '/images/rainy-city-portrait.jpg',
      caption: 'Tatsuo Mori, second-generation used book dealer, inspecting a Meiji-era railway gazetteer.',
      location: 'Yanaka Bochi Boundary',
      coordinates: '35°43′18″N 139°46′02″E',
      cameraInfo: {
        camera: 'Nikon FM2',
        lens: 'Nikkor 50mm f/1.4 AI-s',
        filmStock: 'Kodak Tri-X 400',
        exposure: '1/60s · f/2 · ISO 400',
        timeOfDay: '16:50 Dusk Light'
      },
      aspectRatio: '4:5'
    },
    fieldNotes: [
      'The cats of Yanaka sleep on the warm tin roofs of bicycle repair shops.',
      'At 17:00, the municipal chimes play the "Yuyake Koyake" melody over loudspeakers to tell children to return home.',
      'The cemetery holds seven thousand tombs beneath weeping cherry trees; at night, the railway rumble from Nippori Station carries through the headstones.'
    ],
    associatedStories: ['sleeper-to-narvik']
  },
  {
    id: 'torrenieri',
    title: 'The 17:42 at Torrenieri',
    subtitle: 'Cypress dust, cast-iron benches, and the late afternoon rail line of Val d’Orcia',
    category: 'Rural Waypoints',
    region: 'Val d’Orcia / Siena Province',
    country: 'Italy',
    coordinates: '43°05′11″N 11°32′44″E',
    elevationOrSea: '254 m · Clay Badlands',
    bestHours: '17:15–18:30 (Low golden rake across the rails)',
    soundscape: 'Cicadas in the wild blackberry brambles, telegraph wire humming in the thermal breeze, diesel idle',
    description:
      'Torrenieri-Montalcino station sits in a shallow bowl of crete senesi clay, where the summer heat turns the mud into chalk fissures. The historic Asciano-Monte Antico railway line only sees occasional heritage railcars and solitary regional freight. The station building is stucco faded to the shade of dried apricot, with painted timber window headers cracked by sixty years of midday sun.',
    editorialExcerpt:
      'The stationmaster had a brass clock that ticked so loudly it could be heard across the empty platform. He told us the train to Grosseto was forty minutes behind schedule because of a track sensor south of Buonconvento. No one minded. We sat on the cast-iron bench and watched the shadows of the cypress trees elongate until they crossed the rails.',
    coverImage: {
      id: 'torrenieri-wide',
      url: '/images/train-station-wide.jpg',
      caption: 'The single-track branch line cutting through ochre wheat stubble toward Monte Amiata.',
      location: 'Torrenieri-Montalcino Waypoint',
      coordinates: '43°05′11″N 11°32′44″E',
      cameraInfo: {
        camera: 'Plaubel Makina 67',
        lens: 'Nikkor 80mm f/2.8',
        filmStock: 'Kodak Portra 400',
        exposure: '1/125s · f/8 · ISO 400',
        timeOfDay: '17:40 Golden Hour'
      },
      aspectRatio: '16:9'
    },
    detailImage: {
      id: 'torrenieri-detail',
      url: '/images/train-station-bench.jpg',
      caption: 'Cast-iron bench with floral filigree armrests, bolted to weathered travertine platform tiles in 1928.',
      location: 'Platform 1 East Eave',
      coordinates: '43°05′10″N 11°32′43″E',
      cameraInfo: {
        camera: 'Leica MP',
        lens: 'Summicron 50mm f/2 Rigid',
        filmStock: 'Kodak Gold 200',
        exposure: '1/250s · f/4 · ISO 200',
        timeOfDay: '17:10 Low Sun'
      },
      aspectRatio: '4:5'
    },
    portraitImage: {
      id: 'torrenieri-portrait',
      url: '/images/train-station-portrait.jpg',
      caption: 'A solitary traveler with a battered canvas satchel, watching the heat mirage lift from the ballast.',
      location: 'Water Tower Platform Track',
      coordinates: '43°05′12″N 11°32′46″E',
      cameraInfo: {
        camera: 'Canon EOS-1V',
        lens: 'EF 85mm f/1.2L II',
        filmStock: 'Kodak Portra 160',
        exposure: '1/1000s · f/2 · ISO 160',
        timeOfDay: '17:25 Amber Slant'
      },
      aspectRatio: '4:5'
    },
    fieldNotes: [
      'The station bar serves espresso in thick white porcelain cups with saucers chipped on the rim.',
      'A solitary dog with brindle fur sleeps under the baggage scale every afternoon between two and five.',
      'When the diesel locomotive finally pulls in, the smell of warm brake grease mixes with wild rosemary crushed on the embankment.'
    ],
    associatedStories: ['sleeper-to-narvik']
  },
  {
    id: 'dungeness-shingle',
    title: 'Cape Sound & The Shingle Edge',
    subtitle: 'Corrugated tar, sea kale, and the radioactive silence of the spit',
    category: 'Edge Lands',
    region: 'Romney Marsh Foreland',
    country: 'United Kingdom',
    coordinates: '50°54′48″N 00°58′33″E',
    elevationOrSea: '2 m · English Channel Shingle Ness',
    bestHours: '06:00–08:00 (Channel sea fret & low fog)',
    soundscape: 'Rattling flint shingle pulled by retreating tide, foghorn blast every 30 seconds, wind whipping dry grass',
    description:
      'Dungeness is Britain’s only desert—twelve square miles of flint shingle deposited by longshore drift since the Middle Ages. Weatherboard cottages coated in black bitumen sit unfenced amidst wild yellow sea poppy and rusty boat winches. At its southern tip, two decommissioned nuclear power stations loom over the horizon like monoliths stranded by an ancient civilization.',
    editorialExcerpt:
      'Walking across the shingle is exhausting work; your boots sink two inches with every step, and the stones grind together like broken porcelain. The wind here has no obstructions for thirty miles. It blows the salt directly into your eyes until everything looks silver.',
    coverImage: {
      id: 'dungeness-wide',
      url: '/images/seaside-landscape-wide.jpg',
      caption: 'Windswept flint expanses under a shelf of heavy maritime stratus clouds looking south toward France.',
      location: 'Dungeness Foreland',
      coordinates: '50°54′48″N 00°58′33″E',
      cameraInfo: {
        camera: 'Linhof Master Technika 4x5',
        lens: 'Schneider Super-Angulon 90mm f/5.6',
        filmStock: 'Kodak T-Max 100',
        exposure: '1/8s · f/22 · ISO 100',
        timeOfDay: '08:15 Sea Fret'
      },
      aspectRatio: '16:9'
    },
    detailImage: {
      id: 'dungeness-detail',
      url: '/images/seaside-detail.jpg',
      caption: 'Tumbled sea glass, rusty hand-forged spikes from a 1912 coal barge wreck, and flint nodules.',
      location: 'High Water Mark Drift Line',
      coordinates: '50°54′52″N 00°58′40″E',
      cameraInfo: {
        camera: 'Leica M-A',
        lens: 'Elmarit-M 28mm f/2.8 ASPH',
        filmStock: 'Kodak Portra 400',
        exposure: '1/125s · f/5.6 · ISO 400',
        timeOfDay: '09:30 Overcast'
      },
      aspectRatio: '4:5'
    },
    portraitImage: {
      id: 'dungeness-portrait',
      url: '/images/seaside-beacon.jpg',
      caption: 'The black-and-white banded daymark tower standing steadfast against salt spray and offshore gale winds.',
      location: 'East Ness Navigation Point',
      coordinates: '50°54′45″N 00°58′30″E',
      cameraInfo: {
        camera: 'Rolleiflex 2.8F',
        lens: 'Carl Zeiss Planar 80mm f/2.8',
        filmStock: 'Fujichrome Provia 100F',
        exposure: '1/250s · f/8 · ISO 100',
        timeOfDay: '07:45 Morning Gale'
      },
      aspectRatio: '4:5'
    },
    fieldNotes: [
      'The miniature Romney, Hythe & Dymchurch Railway terminates here; the tiny steam locomotive smells of Welsh coal and hot cylinder oil.',
      'Derek Jarman’s Prospect Cottage still has its wooden garden stakes planted in stone, defying the salt gales with santolina and sea kale.',
      'At night, the lighthouse beam sweeps across the roofs every twelve seconds, turning bedroom walls bright white then instant pitch.'
    ],
    associatedStories: ['sleeper-to-narvik']
  }
];

export const JOURNAL_EXCERPTS: JournalExcerpt[] = [
  {
    id: 'exc-1',
    destinationId: 'reinefjorden',
    destinationName: 'Reinefjorden',
    author: 'Elena Lindqvist',
    date: 'October 14, 2025',
    time: '04:40',
    coordinates: '67°55′32″N 13°05′24″E',
    entry:
      'The salt crust on the window glass turned pink fifteen minutes before the sun cleared the horizon behind the mainland peaks. In Lofoten, morning does not begin with traffic or alarms; it begins with the slap of water against the stilt pilings and the smell of coffee brewed strong enough to strip paint.',
    quote: 'You don’t come here to find yourself. You come here because the landscape doesn’t care whether you exist at all.',
    image: {
      id: 'exc-norway',
      url: '/images/coastal-village-wide.jpg',
      caption: 'Reinefjorden twilight reflections.',
      location: 'Reine, Lofoten',
      coordinates: '67°55′32″N 13°05′24″E',
      cameraInfo: {
        camera: 'Hasselblad 500C/M',
        lens: '50mm',
        filmStock: 'Portra 160',
        exposure: '1/60s f/8',
        timeOfDay: 'Dawn'
      },
      aspectRatio: '16:9'
    }
  },
  {
    id: 'exc-2',
    destinationId: 'furkapass',
    destinationName: 'Furkapass',
    author: 'Marcus Vance',
    date: 'September 22, 2025',
    time: '18:15',
    coordinates: '46°34′21″N 08°24′54″E',
    entry:
      'We waited for thirty minutes at the summit hairpin for a herd of Simmental dairy cattle to clear the tarmac. The herdsman leaned on an ash stick and said nothing, his face lined like walnut bark. The bells made an irregular copper polyrhythm that echoed off the glacier tongue.',
    quote: 'The mountain road is never a straight line between two points; it is an argument between gravity and human stubbornness.',
    image: {
      id: 'exc-furka',
      url: '/images/mountain-road-wide.jpg',
      caption: 'The descending ribbon toward Gletsch.',
      location: 'Furkapass Summit',
      coordinates: '46°34′21″N 08°24′54″E',
      cameraInfo: {
        camera: 'Mamiya 7II',
        lens: '65mm',
        filmStock: 'Ektar 100',
        exposure: '1/30s f/11',
        timeOfDay: 'Alpenglow'
      },
      aspectRatio: '16:9'
    }
  },
  {
    id: 'exc-3',
    destinationId: 'yanaka-tokyo',
    destinationName: 'Yanaka Lanes',
    author: 'Kenji Takahashi',
    date: 'November 02, 2025',
    time: '16:50',
    coordinates: '35°43′16″N 139°46′04″E',
    entry:
      'Rain in Shitawachi is quieter than rain in Shibuya. It drops straight down from the clay tile eaves into stone basins filled with goldfish. An old man in wool tabi socks pushed an iron barrow of charcoal briquettes past the sento bathhouse, nodding once as he passed.',
    quote: 'There is a dignity in places that have refused to modernize faster than their inhabitants can breathe.',
    image: {
      id: 'exc-yanaka',
      url: '/images/rainy-city-wide.jpg',
      caption: 'Lantern reflections in wet alleyway.',
      location: 'Yanaka, Tokyo',
      coordinates: '35°43′16″N 139°46′04″E',
      cameraInfo: {
        camera: 'Fujifilm TX-1',
        lens: '45mm',
        filmStock: 'Cinestill 800T',
        exposure: '1/30s f/4',
        timeOfDay: 'Twilight'
      },
      aspectRatio: '16:9'
    }
  },
  {
    id: 'exc-4',
    destinationId: 'torrenieri',
    destinationName: 'Torrenieri-Montalcino',
    author: 'Elena Lindqvist',
    date: 'August 19, 2025',
    time: '17:42',
    coordinates: '43°05′11″N 11°32′44″E',
    entry:
      'The train had two carriages, both painted the faded terracotta red of the state railways. When it slowed to a stop, the brake pads smelled of charred resin. Two farmers with wicker baskets got off; no one got on. The guard blew a tin whistle that sounded like a tired sparrow.',
    quote: 'Waiting for a delayed train in the Tuscan dust is not lost time; it is the only time that actually belongs to you.',
    image: {
      id: 'exc-torrenieri',
      url: '/images/train-station-wide.jpg',
      caption: 'Single rail track cutting through golden clay.',
      location: 'Torrenieri, Siena',
      coordinates: '43°05′11″N 11°32′44″E',
      cameraInfo: {
        camera: 'Plaubel Makina 67',
        lens: '80mm',
        filmStock: 'Portra 400',
        exposure: '1/125s f/8',
        timeOfDay: '17:42'
      },
      aspectRatio: '16:9'
    }
  }
];

export const FEATURED_STORY: TravelStory = {
  id: 'sleeper-to-narvik',
  title: 'On Waiting for the Night Train to Narvik',
  subtitle: 'Twelve hours in transit across the Arctic circle: iron ore wagons, birch smoke, and the geography of departure',
  author: {
    name: 'Elena Lindqvist',
    role: 'Editorial Director & Field Correspondent',
    avatar: '/images/contributor-elena.jpg'
  },
  date: 'November 2025 · Issue 04',
  readTime: '14 min read',
  route: 'Stockholm Central → Kiruna → Riksgränsen → Narvik Havn',
  overview:
    'The Arctic night train is not transportation in the commercial sense. It is a slow, rhythmic decompression chamber that strips away the urgency of European capitals until all that remains is the sound of bogies clicking over sub-zero rail steel and the infinite black horizon of the Lapland tundra.',
  coverImage: {
    id: 'story-hero',
    url: '/images/story-sleeper-car.jpg',
    caption: 'Carriage 74, second-class couchette, passing north of the Arctic Circle at 02:40 AM.',
    location: 'Lapland Corridor, Sweden',
    coordinates: '66°33′07″N 20°45′12″E',
    cameraInfo: {
      camera: 'Leica M6',
      lens: 'Summicron 35mm f/2 ASPH',
      filmStock: 'Kodak Tri-X 400 pushed to 1600',
      exposure: '1/15s · f/2 · ISO 1600',
      timeOfDay: '02:40 Interior Night'
    },
    aspectRatio: '16:9'
  },
  chapters: [
    {
      id: 'ch-1',
      number: 'Chapter I',
      title: 'The Platform at Track 10',
      timeMarker: '22:15 · Stockholm Central Station',
      locationMarker: '59°19′48″N 18°03′30″E',
      content: [
        'Stockholm Central at ten at night smells of lukewarm filter coffee, diesel exhaust, and wet wool overcoats. Track 10 is always the furthest out, past the commuter turnstiles, where the electric regional trains don’t reach.',
        'The train to Narvik is long—sixteen blue-painted carriages built by Kalmar Verkstad in the late eighties. Their corrugated steel flanks are scarred by gravel kicked up from the iron-ore tracks. Passengers gather with heavy luggage: students in canvas boots with skis strapped to rucksacks, solitary railway engineers carrying steel lunchboxes, and pensioners heading north to summer huts that have already been boarded up for the winter.',
        'When the conductor checks your ticket, he doesn’t scan a QR code with a phone; he looks at the stamped paper slip, marks it with a red crayon stub, and hands you a small cardboard key card with a brass punched hole. There is no Wi-Fi on board. The sign in the vestibule simply reads: "Vagnen är rökfri. Sov gott."'
      ],
      pullQuote:
        'There is a particular kind of solitude that only exists in a second-class sleeper carriage when the train pulls out of the city and the streetlights are replaced by impenetrable pine forest.',
      ambientNote: 'Recorded ambient temp on platform: 3°C. Rake weight: 640 tonnes.'
    },
    {
      id: 'ch-2',
      number: 'Chapter II',
      title: 'The Rhythm of the Bogies North of Gävle',
      timeMarker: '02:40 · Lapland Tundra Frontier',
      locationMarker: '63°11′20″N 16°22′45″E',
      content: [
        'By two in the morning, the heating vents in the compartment hiss with dry, metallic warmth. Outside, the world has ceased to exist as a collection of towns; it is now a continuous black corridor of dwarf birch and peat bogs, punctuated every twenty minutes by the yellow flash of an unmanned grade crossing.',
        'To lie in the upper berth of a swaying couchette is to surrender control entirely. Your ear rests against the thin vinyl-covered pillow, inches from the outer wall of the car. Through the cold sheet metal, you can hear the high-pitched singing of the rails—a resonant chime that changes pitch whenever the train crosses a trestle over frozen rivers.',
        'In the corridor, someone is always awake. A man in an unbuttoned flannel shirt leans his forehead against the double-paned window, watching his own ghost reflection glide through the birch trees. Nobody talks. In the Arctic sleeper, silence is not awkwardness; it is an unspoken agreement.'
      ],
      photo: {
        id: 'story-pine',
        url: '/images/story-foggy-pine.jpg',
        caption: 'Taiga forest at dawn north of Gällivare; sub-zero ground fog lingering among dwarf birch.',
        location: 'Lapland Boreal Zone',
        coordinates: '67°08′12″N 20°39′20″E',
        cameraInfo: {
          camera: 'Hasselblad 500C/M',
          lens: 'Planar 80mm f/2.8',
          filmStock: 'Kodak Portra 160',
          exposure: '1/60s · f/5.6 · ISO 160',
          timeOfDay: '05:45 Dawn'
        },
        aspectRatio: '16:9'
      },
      ambientNote: 'Rail speed: 92 km/h. Frost formation inside outer double glazing.'
    },
    {
      id: 'ch-3',
      number: 'Chapter III',
      title: 'The Iron Ore Basin at Kiruna',
      timeMarker: '08:15 · The Subterranean Mine',
      locationMarker: '67°51′00″N 20°13′00″E',
      content: [
        'We woke to the sound of heavy industrial shunting. Kiruna. The city that is being moved building by building because the underground magnetite mine is eating its foundations.',
        'Out on the sidings, double-headed IORE electric locomotives—the most powerful freight engines in the world—sit with fifty loaded hoppers, each filled with dense black pellets of iron ore bound for the ice-free port of Narvik. The scale is staggering: millions of tonnes of bedrock ripped from deep beneath Kiirunavaara, transported along this single mountain pass to keep European steel mills breathing.',
        'The air here smells of crushed rock dust, ozone, and cold sulfur. On the station platform, miners in high-visibility orange jackets drink lukewarm coffee from insulated thermos flasks while waiting for the shift shuttle. They don’t look at the passengers, and we don’t intrude. This is a working frontier.'
      ],
      pullQuote:
        'A place built around extraction has no vanity. Everything is heavy steel, concrete footing, and thick rubber cable.',
      ambientNote: 'Barometric pressure: 982 hPa. Elevation: 506 m.'
    },
    {
      id: 'ch-4',
      number: 'Chapter IV',
      title: 'The Descent into Rombaksbotn',
      timeMarker: '11:30 · Approaching the Fjord',
      locationMarker: '68°25′10″N 17°34′25″E',
      content: [
        'Beyond the ski huts of Riksgränsen, the Swedish tundra suddenly falls off a precipice. The railway clings to a sheer granite ledge four hundred meters above the green-black surface of Rombaksbotn fjord.',
        'This is the Ofoten line, blasted through solid rock by navvies at the turn of the twentieth century with hand drills and dynamite. Looking out the right-hand carriage windows, you look directly down into the abyss: waterfalls cascading into saltwater, rusted ship hulls from the 1940 naval battles half-submerged on the rocky shallows, and the sudden, breathtaking arrival of the North Atlantic.',
        'The train screeches as the driver rides the dynamic brakes down the three-percent grade. When the wheels finally glide to a halt at Narvik station, the smell of sea brine hits you through the opening door. You have traveled twelve hundred kilometers north of Stockholm. There are no more rails heading north. The journey has ended, and the world begins.'
      ],
      photo: {
        id: 'story-fjord-arrival',
        url: '/images/coastal-village-wide.jpg',
        caption: 'The northern terminus: cold seawater meeting sheer rock at the head of Ofotfjorden.',
        location: 'Narvik Harbor Outskirts',
        coordinates: '68°26′22″N 17°25′33″E',
        cameraInfo: {
          camera: 'Leica MP',
          lens: 'Summilux 50mm f/1.4',
          filmStock: 'Kodak Portra 400',
          exposure: '1/250s · f/4 · ISO 400',
          timeOfDay: '12:10 Arctic Noon'
        },
        aspectRatio: '16:9'
      },
      ambientNote: 'Final destination reached: Narvik Stasjon, 68°26′N.'
    }
  ],
  postscript:
    'Dispatch recorded on notebook pages numbered 48 through 62. Field negatives developed in D-76 at 20°C in a temporary darkroom improvised in the bathroom of the Grand Hotel Narvik.'
};

export const CONTRIBUTORS: Contributor[] = [
  {
    name: 'Elena Lindqvist',
    role: 'Editorial Director & Lead Field Correspondent',
    location: 'Stockholm & Lofoten',
    bio: 'Former documentary photographer and essayist. Spent fifteen years documenting Arctic shipping lanes, maritime outposts, and solitary border crossings across Fennoscandia.',
    gear: 'Hasselblad 500C/M · Leica M6 · 35mm & 50mm Summicron',
    avatar: '/images/contributor-elena.jpg',
    recentDispatch: 'The 23:14 Sleeper to Narvik'
  },
  {
    name: 'Marcus Vance',
    role: 'Alpine Correspondent & Cartographic Editor',
    location: 'Zürich & Valais',
    bio: 'Mountain guide and architectural researcher specializing in high-altitude infrastructure, forgotten military switchbacks, and alpine meteorological stations.',
    gear: 'Mamiya 7II · Plaubel Makina 67 · Kodak Ektar 100',
    avatar: '/images/contributor-marcus.jpg',
    recentDispatch: 'The Furka Switchbacks at Twilight'
  },
  {
    name: 'Kenji Takahashi',
    role: 'Urban Topography & Ephemera Correspondent',
    location: 'Tokyo & Kyoto',
    bio: 'Writer and book collector focusing on the post-war timber architecture of Tokyo’s Shitawachi neighborhoods, neighborhood bathhouses, and transit rituals.',
    gear: 'Fujifilm TX-1 (XPan) · Nikon FM2 · Cinestill 800T',
    avatar: '/images/contributor-kenji.jpg',
    recentDispatch: 'Yanaka & The Drizzling Lanes'
  }
];

export const PHILOSOPHY_POINTS = [
  {
    number: '01',
    title: 'The Anti-Destination Principle',
    text: 'A destination is a consumer product; a place is a living organism. We reject curated top-ten checklists, frictionless resort bubbles, and algorithmic tourism. The most honest moments of travel occur in the liminal spaces: waiting for delayed ferries, walking down unmarked alleys in the drizzle, and discovering that the grocery store only takes cash.'
  },
  {
    number: '02',
    title: 'The Ethics of Photographic Stillness',
    text: 'We shoot medium-format and 35mm mechanical film because film requires patience and physical consequence. A shutter pressed is an irrevocable decision. We do not use drones to strip places of their human scale, nor do we stage false spontaneity. Our photographs are records of light, weather, and authentic presence.'
  },
  {
    number: '03',
    title: 'Slowness as an Instrument of Perception',
    text: 'Speed is the enemy of observation. When you cross a continent by night train or coastal mail cutter, your body adjusts to the shifting terrain at a biological cadence. You notice the change in soil color, the gradual tilt of tree trunks under prevailing winds, and the exact hour when dusk turns cold.'
  },
  {
    number: '04',
    title: 'Preserving the Texture of Ordinary Life',
    text: 'The soul of a place does not reside in its monuments. It lives in the rust on a harbor bollard, the worn leather handle of a railway carriage door, the grease pencil mark on a surveyor’s map, and the quiet dignity of people who have lived in the same valley for generations.'
  }
];

