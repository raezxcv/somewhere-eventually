import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Camera, Eye, BookOpen, Quote } from 'lucide-react';
import { DESTINATIONS, JOURNAL_EXCERPTS, FEATURED_STORY } from '../data/travelData';
import type { Photo } from '../types';

interface HomePageProps {
  setActiveTab: (tab: 'home' | 'destinations' | 'story' | 'about') => void;
  onSelectPhoto: (photo: Photo) => void;
  onSelectDestination: (id: string) => void;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onSelectPhoto,
  onSelectDestination
}) => {
  const [activeExcerptIndex, setActiveExcerptIndex] = useState(0);
  const featuredDest = DESTINATIONS[0]; // Reinefjorden Lofoten

  return (
    <div className="min-h-screen pt-20 sm:pt-28 pb-20">
      {/* 1. EDITORIAL OPENING: HEADLINE, PRIMARY CALL TO ACTION & FULL-BLEED PLATE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-12 sm:mb-16"
        >
          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#102231] leading-[1.08]">
            A travel journal for the in-between.
          </h1>
          <p className="font-serif-body text-xl sm:text-2xl text-[#2D3236] mt-6 leading-relaxed max-w-3xl">
            We chronicle the unhurried textures of arrival and departure: the long wait on cold railway platforms, walking through rainy foreign alleys at dusk, and remembering the small details that commercial itineraries erase.
          </p>

          {/* First screen primary actions (48px tall) */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveTab('story');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="h-12 px-8 bg-[#C8783E] text-[#102231] font-semibold text-base font-sans-ui hover:bg-[#E6965C] transition-colors inline-flex items-center gap-3 cursor-pointer"
            >
              <span>Read Lead Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveTab('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="h-12 px-6 bg-[#ECE5DD] text-[#102231] font-medium text-base font-sans-ui hover:bg-[#FAF7F3] transition-colors cursor-pointer"
            >
              Explore 5 Territories
            </motion.button>
          </div>
        </motion.div>

        {/* Large Opening Photographic Plate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div
            onClick={() =>
              onSelectPhoto({
                id: 'hero-ferry',
                url: '/images/hero-cover.jpg',
                caption: 'The morning ferry crossing Vestfjorden in October; spray freezing against the iron railings.',
                location: 'Vestfjorden Corridor, Norway',
                coordinates: '68°10′15″N 14°12′30″E',
                cameraInfo: {
                  camera: 'Hasselblad 500C/M',
                  lens: 'Distagon 50mm f/4',
                  filmStock: 'Kodak Portra 400',
                  exposure: '1/125s · f/8 · ISO 400',
                  timeOfDay: '06:40 Arctic Dawn'
                },
                aspectRatio: '16:9'
              })
            }
            className="cursor-pointer group relative overflow-hidden bg-[#102231]"
          >
            <img
              src="/images/hero-cover.jpg"
              alt="Misty coastal ferry cutting through dark Nordic waters"
              className="w-full aspect-[16/9] lg:aspect-[21/9] object-cover editorial-image-hover"
            />
            <div className="absolute bottom-4 right-4 bg-[#102231]/90 text-white font-medium px-4 py-2 text-sm font-sans-ui flex items-center gap-2 group-hover:bg-[#C8783E] group-hover:text-[#102231] transition-colors">
              <Eye className="w-4 h-4" />
              <span>Inspect Plate</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-sm font-sans-ui text-[#485056] pt-1">
            <p className="font-serif-body italic max-w-2xl text-base text-[#1E2225]">
              Plate 01: The morning ferry crossing Vestfjorden in October; spray freezing against the iron railings.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <span>Hasselblad 500C/M</span>
              <span>·</span>
              <span>68°10′N · 14°12′E</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE CURATORIAL STATEMENT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="bg-[#ECE5DD] py-20 mb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 space-y-2"
            >
              <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#102231]">
                Not a booking platform.
              </h2>
              <p className="text-sm font-sans-ui text-[#8B3C0D] font-medium">
                The editorial stance
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-8 space-y-4 font-serif-body text-lg sm:text-xl text-[#1E2225] leading-relaxed"
            >
              <p>
                Every place has a rhythm that only surfaces once the tourists have departed. We do not evaluate hotel amenities, calculate star ratings, or construct lists of "must-see highlights."
              </p>
              <p className="text-[#485056] text-base sm:text-lg">
                We practice slow observation through medium format photography and literary reporting. Our dispatches come from correspondents who travel by sleeper car, mail cutter, and foot.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. FEATURED TERRITORY DOSSIER */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 gap-4">
          <div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-medium text-[#102231]">
              {featuredDest.title}
            </h2>
            <p className="font-serif-body italic text-lg sm:text-xl text-[#485056] mt-1">
              {featuredDest.subtitle}
            </p>
          </div>
          <button
            onClick={() => {
              onSelectDestination(featuredDest.id);
              setActiveTab('destinations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-sans-ui font-medium text-[#102231] hover:text-[#C8783E] transition-colors cursor-pointer"
          >
            <span>Read Territory Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div
              onClick={() => onSelectPhoto(featuredDest.coverImage)}
              className="group cursor-pointer relative overflow-hidden bg-[#102231]"
            >
              <img
                src={featuredDest.coverImage.url}
                alt={featuredDest.coverImage.caption}
                className="w-full aspect-[16/9] object-cover editorial-image-hover"
              />
              <div className="p-4 bg-[#102231] text-[#ECE5DD] flex items-center justify-between text-sm font-sans-ui">
                <span className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#C8783E]" />
                  <span>{featuredDest.coverImage.cameraInfo.camera} · {featuredDest.coverImage.cameraInfo.filmStock}</span>
                </span>
                <span className="text-white font-medium hover:underline">Click to Inspect Plate</span>
              </div>
            </div>
            <p className="font-serif-body text-base text-[#485056] italic">
              {featuredDest.coverImage.caption}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-sm font-sans-ui text-[#2D3236] block font-medium">
                {featuredDest.coordinates} · {featuredDest.elevationOrSea}
              </span>
              <h3 className="font-serif-display text-2xl font-medium text-[#102231]">
                A Fisherman's Tide
              </h3>
              <p className="font-serif-body text-base text-[#485056] leading-relaxed">
                {featuredDest.description}
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F3] space-y-3">
              <Quote className="w-5 h-5 text-[#C8783E]" />
              <p className="font-serif-body text-base italic text-[#102231] leading-relaxed">
                "{featuredDest.editorialExcerpt}"
              </p>
            </div>

            <div
              onClick={() => onSelectPhoto(featuredDest.detailImage)}
              className="cursor-pointer group relative overflow-hidden bg-[#102231]"
            >
              <img
                src={featuredDest.detailImage.url}
                alt={featuredDest.detailImage.caption}
                className="w-full aspect-[4/3] object-cover editorial-image-hover"
              />
              <div className="p-3.5 bg-[#ECE5DD] text-sm font-sans-ui text-[#485056] flex items-center justify-between">
                <span className="truncate pr-2">{featuredDest.detailImage.caption}</span>
                <span className="text-[#102231] shrink-0 font-medium">Inspect</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. THE FIVE LANDSCAPES GALLERY */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="bg-[#FAF7F3] py-24 mb-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 gap-4">
            <div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#102231]">
                Five Landscapes of the In-Between
              </h2>
              <p className="font-serif-body text-base text-[#485056] mt-1">
                Field studies across Arctic waters, alpine switchbacks, rainy enclaves, rural depots, and desolate shingle.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-sans-ui text-[#102231] hover:text-[#C8783E] transition-colors cursor-pointer"
            >
              <span>Explore All Territories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => {
                  onSelectDestination(dest.id);
                  setActiveTab('destinations');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer flex flex-col justify-between bg-[#F4EFEB] p-4 transition-colors hover:bg-[#ECE5DD]"
              >
                <div>
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#102231] mb-4">
                    <img
                      src={dest.coverImage.url}
                      alt={dest.title}
                      className="w-full h-full object-cover editorial-image-hover"
                    />
                  </div>
                  <span className="text-sm font-sans-ui text-[#8B3C0D] font-medium">
                    {dest.category}
                  </span>
                  <h3 className="font-serif-display text-lg font-semibold text-[#102231] group-hover:text-[#C8783E] transition-colors mt-1">
                    {dest.title}
                  </h3>
                  <p className="text-sm font-sans-ui text-[#485056] mt-1">
                    {dest.country} · {dest.elevationOrSea}
                  </p>
                </div>

                <div className="pt-4 mt-4 flex items-center justify-between text-sm font-sans-ui text-[#485056]">
                  <span>Field Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C8783E]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. TRAVEL NOTEBOOK EXCERPTS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28"
      >
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#102231]">
            Field Excerpts & Observations
          </h2>
          <p className="font-serif-body text-base sm:text-lg text-[#485056] mt-2">
            Unedited notebook entries written on platform benches, ferry decks, and diner counters while waiting for transit.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {JOURNAL_EXCERPTS.map((exc, idx) => (
            <motion.button
              key={exc.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveExcerptIndex(idx)}
              className={`px-4 py-2.5 text-sm font-sans-ui transition-colors cursor-pointer ${
                activeExcerptIndex === idx
                  ? 'bg-[#102231] text-[#FAF7F3] font-medium'
                  : 'bg-[#ECE5DD] text-[#485056] hover:text-[#102231]'
              }`}
            >
              {exc.destinationName} ({exc.author})
            </motion.button>
          ))}
        </div>

        {/* Active Spread */}
        {(() => {
          const current = JOURNAL_EXCERPTS[activeExcerptIndex];
          return (
            <div className="bg-[#FAF7F3] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <blockquote className="font-serif-display text-2xl sm:text-3xl text-[#102231] font-medium leading-snug">
                  "{current.quote}"
                </blockquote>

                <p className="font-serif-body text-base sm:text-lg text-[#485056] leading-relaxed">
                  {current.entry}
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-sm font-sans-ui text-[#485056]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#102231] font-medium">{current.author}</span>
                    <span>·</span>
                    <span>{current.date}</span>
                    <span>·</span>
                    <span className="text-[#8B3C0D] font-medium">{current.coordinates}</span>
                  </div>
                  <button
                    onClick={() => {
                      onSelectDestination(current.destinationId);
                      setActiveTab('destinations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#8B3C0D] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <span>View Destination Dossier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div
                  onClick={() => onSelectPhoto(current.image)}
                  className="cursor-pointer group relative overflow-hidden bg-[#102231]"
                >
                  <img
                    src={current.image.url}
                    alt={current.image.caption}
                    className="w-full aspect-[4/3] object-cover editorial-image-hover"
                  />
                  <div className="p-3.5 bg-[#ECE5DD] text-sm font-sans-ui text-[#485056] flex items-center justify-between">
                    <span className="truncate pr-2">{current.image.caption}</span>
                    <span className="text-[#102231] font-medium">Inspect Plate</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </motion.section>

      {/* 6. LEAD LONGFORM DISPATCH CALLOUT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#102231] text-[#ECE5DD] p-8 sm:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-serif-display text-3xl sm:text-5xl font-medium text-[#FAF7F3] leading-tight">
                {FEATURED_STORY.title}
              </h2>
              <p className="font-serif-body text-base sm:text-lg text-[#ECE5DD]/80 leading-relaxed">
                {FEATURED_STORY.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm font-sans-ui text-[#ECE5DD]/70">
                <span>By {FEATURED_STORY.author.name}</span>
                <span>·</span>
                <span>{FEATURED_STORY.readTime}</span>
                <span>·</span>
                <span className="text-[#ECE5DD]">{FEATURED_STORY.route}</span>
              </div>
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveTab('story');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C8783E] text-[#102231] font-semibold text-base font-sans-ui hover:bg-[#E6965C] transition-colors cursor-pointer"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Read Longform Story</span>
                </motion.button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                onClick={() => onSelectPhoto(FEATURED_STORY.coverImage)}
                className="cursor-pointer group relative overflow-hidden bg-black"
              >
                <img
                  src={FEATURED_STORY.coverImage.url}
                  alt={FEATURED_STORY.coverImage.caption}
                  className="w-full aspect-[4/3] object-cover editorial-image-hover"
                />
                <div className="p-3.5 bg-[#182B3C] text-sm font-sans-ui text-[#ECE5DD]/70 flex items-center justify-between">
                  <span className="truncate pr-2">Carriage 74 · 02:40 AM Night Train</span>
                  <span className="text-white font-medium">Inspect Plate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
