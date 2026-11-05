import React, { useState, useEffect } from 'react';
import { Clock, Compass, ArrowRight, Eye } from 'lucide-react';
import { FEATURED_STORY } from '../data/travelData';
import type { Photo } from '../types';

interface StoryPageProps {
  onSelectPhoto: (photo: Photo) => void;
  setActiveTab: (tab: 'home' | 'destinations' | 'story' | 'about') => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onSelectPhoto, setActiveTab }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [readingTheme, setReadingTheme] = useState<'linen' | 'darkroom' | 'sepia'>('linen');
  const [activeChapterId, setActiveChapterId] = useState<string>('ch-1');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      FEATURED_STORY.chapters.forEach((chap) => {
        const el = document.getElementById(chap.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveChapterId(chap.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const themeClasses = {
    linen: 'bg-[#F4EFEB] text-[#1E2225]',
    darkroom: 'bg-[#102231] text-[#ECE5DD]',
    sepia: 'bg-[#ECE5DD] text-[#2C241E]'
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeClasses[readingTheme]}`}>
      {/* Sticky Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-current/10">
        <div
          className="h-full bg-[#C8783E] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="pt-28 sm:pt-36 pb-28">
        {/* Story Masthead */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
            <div className="flex items-center gap-3 text-sm font-sans-ui opacity-75">
              <span className="text-[#C8783E] font-semibold">{FEATURED_STORY.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {FEATURED_STORY.readTime}
              </span>
            </div>

            {/* Reading Mode Switcher */}
            <div className="flex items-center gap-2 p-1 bg-current/5 text-xs font-sans-ui">
              <span className="opacity-60 mr-1 hidden sm:inline">Tone:</span>
              <button
                onClick={() => setReadingTheme('linen')}
                className={`px-3 py-1 transition-colors ${
                  readingTheme === 'linen'
                    ? 'bg-[#102231] text-[#FAF7F3]'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Paper
              </button>
              <button
                onClick={() => setReadingTheme('darkroom')}
                className={`px-3 py-1 transition-colors ${
                  readingTheme === 'darkroom'
                    ? 'bg-[#C8783E] text-[#102231] font-semibold'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Darkroom
              </button>
              <button
                onClick={() => setReadingTheme('sepia')}
                className={`px-3 py-1 transition-colors ${
                  readingTheme === 'sepia'
                    ? 'bg-[#4A3225] text-[#FAF7F3]'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Sepia
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08]">
              {FEATURED_STORY.title}
            </h1>
            <p className="font-serif-body text-xl sm:text-2xl opacity-80 leading-relaxed italic">
              {FEATURED_STORY.subtitle}
            </p>
          </div>

          <div className="mt-8 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm font-sans-ui border-t border-current/15">
            <div className="flex items-center gap-4">
              <img
                src={FEATURED_STORY.author.avatar}
                alt={FEATURED_STORY.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className="block font-medium">{FEATURED_STORY.author.name}</span>
                <span className="opacity-70 text-xs">{FEATURED_STORY.author.role}</span>
              </div>
            </div>

            <div className="sm:text-right text-xs">
              <span className="opacity-60 block uppercase tracking-wider">Itinerary Corridor</span>
              <span className="text-[#C8783E] font-medium text-sm">{FEATURED_STORY.route}</span>
            </div>
          </div>
        </header>

        {/* Lead Hero Full Bleed */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div
            onClick={() => onSelectPhoto(FEATURED_STORY.coverImage)}
            className="cursor-pointer group relative overflow-hidden bg-black"
          >
            <img
              src={FEATURED_STORY.coverImage.url}
              alt={FEATURED_STORY.coverImage.caption}
              className="w-full aspect-[16/9] object-cover editorial-image-hover"
            />
            <div className="p-4 bg-black/85 text-[#ECE5DD] flex items-center justify-between text-xs sm:text-sm font-sans-ui">
              <span className="italic font-serif-body text-base line-clamp-1">
                "{FEATURED_STORY.coverImage.caption}"
              </span>
              <span className="text-[#C8783E] shrink-0 ml-4 flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>Inspect Plate</span>
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-sans-ui opacity-70">
            <span>{FEATURED_STORY.coverImage.location} · {FEATURED_STORY.coverImage.coordinates}</span>
            <span>{FEATURED_STORY.coverImage.cameraInfo.filmStock}</span>
          </div>
        </div>

        {/* Reading Layout with Sticky Directory */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32 space-y-8">
              <div className="p-6 bg-current/5 space-y-4">
                <span className="text-xs font-sans-ui uppercase tracking-wider text-[#C8783E] font-semibold block">
                  Chapter Directory
                </span>
                <nav className="space-y-2 font-sans-ui text-sm">
                  {FEATURED_STORY.chapters.map((chap) => {
                    const isActive = activeChapterId === chap.id;
                    return (
                      <button
                        key={chap.id}
                        onClick={() => scrollToChapter(chap.id)}
                        className={`w-full text-left p-2 transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-[#C8783E] text-[#102231] font-semibold'
                            : 'opacity-70 hover:opacity-100 hover:bg-current/5'
                        }`}
                      >
                        <span className="truncate">{chap.number}: {chap.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="p-6 bg-current/5 space-y-2 text-xs font-sans-ui opacity-80">
                <span className="text-[#C8783E] block uppercase tracking-wider font-semibold">
                  Transit Note
                </span>
                <p className="leading-relaxed font-serif-body text-sm">
                  {FEATURED_STORY.overview}
                </p>
              </div>
            </aside>

            {/* Narrative Body */}
            <main className="lg:col-span-9 space-y-24 max-w-2xl">
              {FEATURED_STORY.chapters.map((chapter) => (
                <section
                  key={chapter.id}
                  id={chapter.id}
                  className="space-y-8 scroll-mt-32"
                >
                  <div className="space-y-2 pb-2">
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-sans-ui opacity-75">
                      <span className="text-[#C8783E] font-bold">{chapter.number}</span>
                      <span>·</span>
                      <span>{chapter.timeMarker}</span>
                      <span>·</span>
                      <span>{chapter.locationMarker}</span>
                    </div>
                    <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold mt-1">
                      {chapter.title}
                    </h2>
                  </div>

                  {/* Paragraphs with Drop Caps */}
                  <div className="space-y-6 font-serif-body text-lg sm:text-xl leading-[1.85] opacity-90">
                    {chapter.content.map((paragraph, pIdx) => {
                      if (pIdx === 0) {
                        const firstLetter = paragraph.charAt(0);
                        const rest = paragraph.slice(1);
                        return (
                          <p key={pIdx}>
                            <span className="float-left text-6xl font-serif-display font-medium leading-[0.75] pr-3 pt-1 text-[#C8783E]">
                              {firstLetter}
                            </span>
                            {rest}
                          </p>
                        );
                      }
                      return <p key={pIdx}>{paragraph}</p>;
                    })}
                  </div>

                  {/* Pull Quote */}
                  {chapter.pullQuote && (
                    <div className="my-10 p-8 bg-current/5">
                      <blockquote className="font-serif-display text-2xl sm:text-3xl italic leading-snug font-medium text-center max-w-xl mx-auto">
                        "{chapter.pullQuote}"
                      </blockquote>
                    </div>
                  )}

                  {/* Chapter Photograph */}
                  {chapter.photo && (
                    <div className="my-10 space-y-3">
                      <div
                        onClick={() => onSelectPhoto(chapter.photo!)}
                        className="cursor-pointer group relative overflow-hidden bg-black"
                      >
                        <img
                          src={chapter.photo.url}
                          alt={chapter.photo.caption}
                          className="w-full aspect-[16/9] object-cover editorial-image-hover"
                        />
                        <div className="p-3 bg-black/85 text-[#ECE5DD] flex items-center justify-between text-xs font-sans-ui">
                          <span className="italic font-serif-body text-sm line-clamp-1">
                            {chapter.photo.caption}
                          </span>
                          <span className="text-[#C8783E] shrink-0 ml-3">Inspect Negative</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs font-sans-ui opacity-70">
                        <span>{chapter.photo.location} ({chapter.photo.cameraInfo.timeOfDay})</span>
                        <span>{chapter.photo.cameraInfo.camera} · {chapter.photo.cameraInfo.filmStock}</span>
                      </div>
                    </div>
                  )}

                  {/* Ambient Telemetry */}
                  {chapter.ambientNote && (
                    <div className="p-4 bg-current/5 flex items-center gap-3 text-xs font-sans-ui opacity-75">
                      <Compass className="w-4 h-4 text-[#C8783E]" />
                      <span>{chapter.ambientNote}</span>
                    </div>
                  )}
                </section>
              ))}

              {/* Colophon & Navigation */}
              <div className="pt-16 space-y-6">
                <span className="text-sm font-sans-ui uppercase tracking-wider text-[#C8783E] font-semibold block">
                  Field Postscript & Negative Archives
                </span>
                <p className="font-serif-body text-base sm:text-lg italic leading-relaxed opacity-80">
                  {FEATURED_STORY.postscript}
                </p>

                <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      setActiveTab('destinations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8783E] text-[#102231] font-semibold text-sm font-sans-ui hover:bg-[#E6965C] transition-colors"
                  >
                    <span>Explore Associated Arctic Outposts</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm font-sans-ui opacity-70 hover:opacity-100 transition-opacity"
                  >
                    ↑ Return to Story Head
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
