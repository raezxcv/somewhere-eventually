import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PhotoLightbox } from './components/PhotoLightbox';
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { StoryPage } from './pages/StoryPage';
import { AboutPage } from './pages/AboutPage';
import { ambientAudio } from './utils/audioSynth';
import type { Photo } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'destinations' | 'story' | 'about'>('home');
  const [inspectedPhoto, setInspectedPhoto] = useState<Photo | null>(null);
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | undefined>(undefined);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  const handleToggleAudio = (playing: boolean) => {
    if (playing) {
      ambientAudio.start();
      setAudioPlaying(true);
    } else {
      ambientAudio.stop();
      setAudioPlaying(false);
    }
  };

  const handleSelectDestination = (id: string) => {
    setSelectedDestinationId(id);
    setActiveTab('destinations');
  };

  return (
    <div className="min-h-screen bg-[#F4EFEB] text-[#1E2225] flex flex-col selection:bg-[#C8783E]/20 selection:text-[#102231]">
      {/* Primary Masthead & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        audioPlaying={audioPlaying}
        setAudioPlaying={handleToggleAudio}
      />

      {/* Dynamic View Container */}
      <main className="flex-1" id="main-content">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onSelectPhoto={(photo) => setInspectedPhoto(photo)}
            onSelectDestination={handleSelectDestination}
          />
        )}

        {activeTab === 'destinations' && (
          <DestinationsPage
            onSelectPhoto={(photo) => setInspectedPhoto(photo)}
            selectedDestinationId={selectedDestinationId}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'story' && (
          <StoryPage
            onSelectPhoto={(photo) => setInspectedPhoto(photo)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage setActiveTab={setActiveTab} />
        )}
      </main>

      {/* Curatorial Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectDestination={handleSelectDestination}
      />

      {/* Full-Screen Photographic Inspector Lightbox */}
      <PhotoLightbox
        photo={inspectedPhoto}
        onClose={() => setInspectedPhoto(null)}
      />
    </div>
  );
}

export default App;
