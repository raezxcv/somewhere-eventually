import React, { useState, useEffect } from 'react';
import { Camera, Volume2, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import type { Photo } from '../types';

interface DestinationsPageProps {
  onSelectPhoto: (photo: Photo) => void;
  selectedDestinationId?: string;
  setActiveTab: (tab: 'home' | 'destinations' | 'story' | 'about') => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onSelectPhoto,
  selectedDestinationId,
  setActiveTab
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedId, setHighlightedId] = useState<string | null>(selectedDestinationId || null);

  const categories = [
    'All',
    'Coastal',
    'Alpine Corridor',
    'Urban Alleyways',
    'Rural Waypoints',
    'Edge Lands'
  ];

  useEffect(() => {
    if (selectedDestinationId) {
      setHighlightedId(selectedDestinationId);
      const element = document.getElementById(`destination-${selectedDestinationId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedDestinationId]);

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24">
      {/* 1. Header Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl">
          <p className="text-sm font-sans-ui text-[#C8783E] tracking-wide mb-3">
            Section 02 · Territory Profiles
          </p>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-medium tracking-tight text-[#102231]">
            Territories of the In-Between
          </h1>
          <p className="font-serif-body text-xl sm:text-2xl text-[#485056] mt-4 leading-relaxed">
            Detailed photographic dossiers across five distinct environments: Arctic fishing outposts, high Alpine passes, rainy Tokyo backstreets, Tuscan railway waypoints, and the desolate English Channel shingle.
          </p>
        </div>

        {/* 2. Filter Bar & Search */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
          <div className="flex flex-wrap items-center gap-2" role="toolbar" aria-label="Filter territories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-sans-ui transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#102231] text-[#FAF7F3] font-medium'
                    : 'bg-[#ECE5DD] text-[#485056] hover:text-[#102231]'
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country, terrain..."
              className="w-full px-4 py-2 bg-[#FAF7F3] text-sm font-sans-ui text-[#102231] placeholder-[#8C969F] focus:outline-hidden"
              aria-label="Search destination profiles"
            />
          </div>
        </div>
      </section>

      {/* 3. Editorial Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {filteredDestinations.length === 0 ? (
          <div className="py-20 text-center bg-[#FAF7F3] p-12">
            <p className="font-serif-display text-2xl text-[#102231]">No territory matches your query.</p>
            <p className="font-serif-body text-base text-[#485056] mt-2">Try clearing your search query or selecting 'All'.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-6 px-6 py-2.5 bg-[#102231] text-[#FAF7F3] text-sm font-sans-ui hover:bg-[#C8783E] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredDestinations.map((dest) => (
            <article
              key={dest.id}
              id={`destination-${dest.id}`}
              className={`pt-12 transition-all ${
                highlightedId === dest.id ? 'bg-[#ECE5DD]/40 p-6 -mx-6 rounded-xs' : ''
              }`}
            >
              {/* Header Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-start">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-sm font-sans-ui text-[#8C969F]">
                    <span className="text-[#C8783E] font-medium">{dest.category}</span>
                    <span>·</span>
                    <span className="text-[#102231]">{dest.country}</span>
                    <span>·</span>
                    <span>{dest.elevationOrSea}</span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-5xl font-semibold text-[#102231]">
                    {dest.title}
                  </h2>
                  <p className="font-serif-body text-lg sm:text-xl text-[#485056] italic">
                    {dest.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-[#FAF7F3] p-6 text-sm font-sans-ui space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8C969F]">Coordinates:</span>
                    <span className="text-[#102231] font-medium">{dest.coordinates}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8C969F]">Best Hours:</span>
                    <span className="text-[#C8783E] font-medium">{dest.bestHours}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#8C969F] block text-xs uppercase tracking-wider mb-1">
                      Acoustic Fieldscape:
                    </span>
                    <p className="text-[#485056] text-xs leading-relaxed flex items-start gap-2">
                      <Volume2 className="w-4 h-4 text-[#C8783E] shrink-0 mt-0.5" />
                      <span>{dest.soundscape}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Wide Environmental Shot */}
              <div className="space-y-4 mb-12">
                <div
                  onClick={() => onSelectPhoto(dest.coverImage)}
                  className="group cursor-pointer relative overflow-hidden bg-[#102231]"
                >
                  <img
                    src={dest.coverImage.url}
                    alt={dest.coverImage.caption}
                    className="w-full aspect-[16/9] object-cover editorial-image-hover"
                  />
                  <div className="p-4 bg-[#102231] text-[#ECE5DD] flex items-center justify-between text-xs sm:text-sm font-sans-ui">
                    <p className="font-serif-body italic truncate pr-4 text-base">
                      "{dest.coverImage.caption}"
                    </p>
                    <span className="text-[#C8783E] shrink-0 flex items-center gap-1.5">
                      <Camera className="w-4 h-4" />
                      <span>Inspect Metadata</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm font-sans-ui text-[#8C969F]">
                  <span>{dest.coverImage.cameraInfo.camera} · {dest.coverImage.cameraInfo.lens}</span>
                  <span>{dest.coverImage.cameraInfo.filmStock} · {dest.coverImage.cameraInfo.exposure}</span>
                </div>
              </div>

              {/* Literary Observations & Paired Vertical Images */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#102231] mb-4">
                      Field Account & Atmosphere
                    </h3>
                    <p className="font-serif-body text-lg text-[#1E2225] leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="p-6 bg-[#ECE5DD] space-y-2">
                    <p className="font-serif-body text-base italic text-[#102231] leading-relaxed">
                      "{dest.editorialExcerpt}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <span className="text-sm font-sans-ui text-[#8C969F] uppercase tracking-wider block">
                      Topographical & Vernacular Notes
                    </span>
                    <ul className="space-y-3 font-serif-body text-base text-[#485056]">
                      {dest.fieldNotes.map((note, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#C8783E] shrink-0 mt-2.5" />
                          <span className="leading-relaxed">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setActiveTab('story');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-sm font-sans-ui text-[#102231] hover:text-[#C8783E] transition-colors font-medium"
                    >
                      <span>Read Associated Longform Dispatch: The Sleeper to Narvik</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Vertical Images */}
                <div className="lg:col-span-5 space-y-10">
                  <div className="space-y-3">
                    <div
                      onClick={() => onSelectPhoto(dest.detailImage)}
                      className="group cursor-pointer relative overflow-hidden bg-[#102231]"
                    >
                      <img
                        src={dest.detailImage.url}
                        alt={dest.detailImage.caption}
                        className="w-full aspect-[4/5] object-cover editorial-image-hover"
                      />
                      <div className="p-3 bg-[#FAF7F3] text-xs font-sans-ui text-[#485056] flex items-center justify-between">
                        <span className="truncate pr-2 font-serif-body italic text-sm">{dest.detailImage.caption}</span>
                        <span className="text-[#C8783E] font-medium">Inspect</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div
                      onClick={() => onSelectPhoto(dest.portraitImage)}
                      className="group cursor-pointer relative overflow-hidden bg-[#102231]"
                    >
                      <img
                        src={dest.portraitImage.url}
                        alt={dest.portraitImage.caption}
                        className="w-full aspect-[4/5] object-cover editorial-image-hover"
                      />
                      <div className="p-3 bg-[#FAF7F3] text-xs font-sans-ui text-[#485056] flex items-center justify-between">
                        <span className="truncate pr-2 font-serif-body italic text-sm">{dest.portraitImage.caption}</span>
                        <span className="text-[#C8783E] font-medium">Inspect</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
};
