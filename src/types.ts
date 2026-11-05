export interface Photo {
  id: string;
  url: string;
  fallbackUrl?: string;
  caption: string;
  location: string;
  coordinates: string;
  cameraInfo: {
    camera: string;
    lens: string;
    filmStock: string;
    exposure: string;
    timeOfDay: string;
  };
  aspectRatio: '16:9' | '4:5' | '1:1';
}

export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  category: 'Coastal' | 'Alpine Corridor' | 'Urban Alleyways' | 'Rural Waypoints' | 'Edge Lands';
  region: string;
  country: string;
  coordinates: string;
  elevationOrSea: string;
  bestHours: string;
  soundscape: string;
  description: string;
  editorialExcerpt: string;
  coverImage: Photo;
  detailImage: Photo;
  portraitImage: Photo;
  fieldNotes: string[];
  associatedStories: string[];
}

export interface JournalExcerpt {
  id: string;
  destinationId: string;
  destinationName: string;
  author: string;
  date: string;
  time: string;
  coordinates: string;
  entry: string;
  quote: string;
  image: Photo;
}

export interface StoryChapter {
  id: string;
  number: string;
  title: string;
  timeMarker: string;
  locationMarker: string;
  content: string[];
  pullQuote?: string;
  photo?: Photo;
  ambientNote?: string;
}

export interface TravelStory {
  id: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  route: string;
  overview: string;
  coverImage: Photo;
  chapters: StoryChapter[];
  postscript: string;
}

export interface Contributor {
  name: string;
  role: string;
  location: string;
  bio: string;
  gear: string;
  avatar: string;
  recentDispatch: string;
}

