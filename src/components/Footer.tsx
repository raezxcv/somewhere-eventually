import React from 'react';
import { ArrowUp, Compass, Camera } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

interface FooterProps {
  setActiveTab: (tab: 'home' | 'destinations' | 'story' | 'about') => void;
  onSelectDestination?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectDestination }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102231] text-[#ECE5DD] pt-24 pb-16 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand Manifesto Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif-display text-3xl font-medium tracking-tight text-[#FAF7F3] block">
              Somewhere, Eventually
            </span>
            <p className="font-serif-body text-base text-[#ECE5DD]/80 leading-relaxed max-w-md">
              This publication does not sell packages, rate breakfast buffets, or curate bucket lists. We chronicle the slow, contemplative hours of transit: cold platforms, forgotten branch lines, rain on cedar roofs, and the quiet dignity of places that exist for themselves.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-sans-ui text-[#ECE5DD]/70">
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C8783E]" /> Printed on Munken Lynx 120gsm
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#C8783E]" /> 35mm & 120 Rollfilm
              </span>
            </div>
          </div>

          {/* Editorial Territories Column */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-sm font-sans-ui font-semibold text-[#C8783E]">
              Editorial Coordinates
            </h2>
            <ul className="space-y-3 text-sm font-sans-ui">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => {
                      if (onSelectDestination) {
                        onSelectDestination(dest.id);
                      }
                      setActiveTab('destinations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group flex items-baseline justify-between w-full text-left hover:text-[#C8783E] transition-colors"
                  >
                    <span className="text-[#ECE5DD] group-hover:text-[#C8783E]">
                      {dest.title.split('&')[0]}
                    </span>
                    <span className="text-[#ECE5DD]/60 text-sm">{dest.coordinates}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-sm font-sans-ui font-semibold text-[#C8783E]">
              Publication Index
            </h2>
            <ul className="space-y-2.5 font-sans-ui text-sm">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    scrollToTop();
                  }}
                  className="text-[#ECE5DD]/80 hover:text-[#C8783E] transition-colors"
                >
                  Front Page & Journal Excerpts
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('destinations');
                    scrollToTop();
                  }}
                  className="text-[#ECE5DD]/80 hover:text-[#C8783E] transition-colors"
                >
                  Territory Profiles & Field Notes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('story');
                    scrollToTop();
                  }}
                  className="text-[#ECE5DD]/80 hover:text-[#C8783E] transition-colors"
                >
                  Featured Dispatch: Sleeper to Narvik
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    scrollToTop();
                  }}
                  className="text-[#ECE5DD]/80 hover:text-[#C8783E] transition-colors"
                >
                  Publication Philosophy & Colophon
                </button>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#ECE5DD]/10 hover:bg-[#C8783E] hover:text-[#102231] text-sm font-sans-ui transition-all"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Return to Summit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm font-sans-ui text-[#ECE5DD]/60 gap-4">
          <p>© 2026 Somewhere, Eventually. All field negatives, texts, and cartography reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <span>Non-commercial editorial</span>
            <span>·</span>
            <span>Issue Volume V</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
