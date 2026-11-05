import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'destinations' | 'story' | 'about';
  setActiveTab: (tab: 'home' | 'destinations' | 'story' | 'about') => void;
  audioPlaying: boolean;
  setAudioPlaying: (playing: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  audioPlaying,
  setAudioPlaying
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Journal' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'story', label: 'Featured Dispatch' },
    { id: 'about', label: 'Colophon & Philosophy' },
  ] as const;

  return (
    <header className="relative w-full z-30 bg-[#F4EFEB] pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-6">
          {/* Masthead */}
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group focus:outline-hidden"
            aria-label="Somewhere Eventually Home"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-serif-display text-3xl sm:text-4xl font-medium tracking-tight text-[#102231] group-hover:text-[#C8783E] transition-colors">
                Somewhere, Eventually
              </span>
              <span className="text-sm font-serif-body italic text-[#485056] hidden sm:inline">
                Autumn Dispatches
              </span>
            </div>
            <p className="text-sm font-sans-ui text-[#485056] tracking-wide mt-1">
              A travel journal for the in-between
            </p>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-base font-sans-ui transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#102231] font-semibold'
                      : 'text-[#485056] hover:text-[#102231]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8783E]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Ambient Soundscape & Mobile Trigger */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setAudioPlaying(!audioPlaying)}
              className="flex items-center gap-2 text-sm font-sans-ui text-[#102231] hover:text-[#C8783E] transition-colors focus:outline-hidden py-1.5 px-3 rounded-xs bg-[#ECE5DD]"
              title={audioPlaying ? 'Mute ambient soundscape' : 'Listen to ambient transit soundscape'}
              aria-label={audioPlaying ? 'Mute ambient audio' : 'Play ambient audio'}
            >
              {audioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#C8783E]" />
                  <span className="hidden sm:inline">Soundscape Playing</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#485056]" />
                  <span className="hidden sm:inline">Ambient Audio</span>
                </>
              )}
            </button>

            {/* Mobile / Tablet Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#102231] focus:outline-hidden cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ECE5DD] px-6 py-6 mt-4 space-y-4">
          <div className="flex flex-col space-y-4 font-serif-display text-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left transition-colors cursor-pointer ${
                  activeTab === item.id ? 'text-[#C8783E] font-semibold' : 'text-[#102231]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
