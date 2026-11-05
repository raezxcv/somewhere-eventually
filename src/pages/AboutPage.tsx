import React, { useState } from 'react';
import { Camera, Send, CheckCircle, Film, Printer, AlertCircle } from 'lucide-react';
import { CONTRIBUTORS, PHILOSOPHY_POINTS } from '../data/travelData';

interface AboutPageProps {
  setActiveTab?: (tab: 'home' | 'destinations' | 'story' | 'about') => void;
}

interface SubmittedDispatch {
  id: string;
  author: string;
  location: string;
  coordinates: string;
  date: string;
  medium: string;
  observation: string;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const [authorName, setAuthorName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [travelMedium, setTravelMedium] = useState('Night Train');
  const [observationText, setObservationText] = useState('');
  const [submittedDispatches, setSubmittedDispatches] = useState<SubmittedDispatch[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !locationName.trim() || !observationText.trim()) {
      setValidationError('Please complete all required fields (Author Name, Location, and Observation).');
      return;
    }
    setValidationError('');

    const newDispatch: SubmittedDispatch = {
      id: `disp-${Date.now()}`,
      author: authorName.trim(),
      location: locationName.trim(),
      coordinates: coordinates.trim() || 'Uncharted Coordinates',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      medium: travelMedium,
      observation: observationText.trim()
    };

    setSubmittedDispatches([newDispatch, ...submittedDispatches]);
    setFormSubmitted(true);
    setAuthorName('');
    setLocationName('');
    setCoordinates('');
    setObservationText('');

    setTimeout(() => {
      setFormSubmitted(false);
    }, 4500);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-28">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <p className="text-sm font-sans-ui text-[#C8783E] tracking-wide mb-3">
            Section 04 · Philosophy & Colophon
          </p>
          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#102231]">
            Against the frictionless journey.
          </h1>
          <p className="font-serif-body text-xl sm:text-2xl text-[#485056] mt-6 leading-relaxed">
            Somewhere, Eventually was founded in the belief that travel is not an accumulation of destinations, but a state of heightened attentiveness found only when the itinerary unravels.
          </p>
        </div>
      </section>

      {/* 2. Four Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="mb-12">
          <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#102231]">
            Our Four Principles of Observation
          </h2>
          <p className="font-serif-body text-base text-[#485056] mt-1">
            Rules governing our correspondents, photographers, and essayists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PHILOSOPHY_POINTS.map((point) => (
            <div
              key={point.number}
              className="p-8 sm:p-10 bg-[#FAF7F3] space-y-4"
            >
              <span className="font-sans-ui text-sm font-bold text-[#C8783E] tracking-wider block">
                {point.number}
              </span>
              <h3 className="font-serif-display text-2xl font-semibold text-[#102231]">
                {point.title}
              </h3>
              <p className="font-serif-body text-base sm:text-lg text-[#485056] leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Photographic Ethos & Hardware Colophon */}
      <section className="bg-[#ECE5DD] py-20 mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#102231]">
                Physical Emulsion & Mechanical Shutters
              </h2>
              <p className="font-serif-body text-base sm:text-lg text-[#485056] leading-relaxed">
                Every photograph in this publication is made on silver gelatin film or calibrated medium-format sensors. We do not use digital sky replacements, AI beauty smoothing, or hyper-saturated saturation sliders.
              </p>
              <div className="space-y-2 pt-4 text-sm font-sans-ui text-[#102231]">
                <div className="flex items-center gap-2.5">
                  <Film className="w-4 h-4 text-[#C8783E]" />
                  <span>Emulsions: Kodak Portra 160/400, Tri-X 400, Ilford HP5+</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Camera className="w-4 h-4 text-[#C8783E]" />
                  <span>Optics: Hasselblad 500C/M, Leica M6, Plaubel Makina 67</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Printer className="w-4 h-4 text-[#C8783E]" />
                  <span>Print Edition: Munken Lynx 120gsm, cold-glue binding</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#FAF7F3] space-y-2">
                <span className="text-xs font-sans-ui uppercase tracking-wider text-[#8C969F] font-semibold">
                  Cartographic Rule
                </span>
                <h4 className="font-serif-display text-lg font-semibold text-[#102231]">
                  Exact Coordinates
                </h4>
                <p className="font-serif-body text-sm text-[#485056] leading-relaxed">
                  Every field entry carries degrees, minutes, and seconds from a hand-held military prism compass or topographical survey sheet.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F3] space-y-2">
                <span className="text-xs font-sans-ui uppercase tracking-wider text-[#8C969F] font-semibold">
                  Acoustic Integrity
                </span>
                <h4 className="font-serif-display text-lg font-semibold text-[#102231]">
                  Recorded Soundscapes
                </h4>
                <p className="font-serif-body text-sm text-[#485056] leading-relaxed">
                  A place is half sound. We document diesel idle frequencies, wind friction against granite, and rain on corrugated tin roofs.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F3] space-y-2">
                <span className="text-xs font-sans-ui uppercase tracking-wider text-[#8C969F] font-semibold">
                  Ethics of Travel
                </span>
                <h4 className="font-serif-display text-lg font-semibold text-[#102231]">
                  Zero Sponsored Placements
                </h4>
                <p className="font-serif-body text-sm text-[#485056] leading-relaxed">
                  Our correspondents pay for their own berths, bus tickets, and meals. We accept no tourism board junkets or sponsored hotels.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F3] space-y-2">
                <span className="text-xs font-sans-ui uppercase tracking-wider text-[#8C969F] font-semibold">
                  Typography
                </span>
                <h4 className="font-serif-display text-lg font-semibold text-[#102231]">
                  Editorial Proportions
                </h4>
                <p className="font-serif-body text-sm text-[#485056] leading-relaxed">
                  Typeset in Newsreader and Cormorant Garamond, balanced for deep continuous reading without eye strain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Editorial Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="mb-12">
          <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#102231]">
            Field Correspondents & Editors
          </h2>
          <p className="font-serif-body text-base text-[#485056] mt-1">
            Writers and photographers stationed across northern Europe, the Alpine corridor, and Japan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CONTRIBUTORS.map((contributor) => (
            <div
              key={contributor.name}
              className="p-8 bg-[#FAF7F3] space-y-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-serif-display text-xl font-semibold text-[#102231]">
                    {contributor.name}
                  </h3>
                  <span className="text-sm font-sans-ui text-[#C8783E] block">
                    {contributor.role}
                  </span>
                  <span className="text-xs font-sans-ui text-[#8C969F] block">
                    {contributor.location}
                  </span>
                </div>
              </div>

              <p className="font-serif-body text-base text-[#485056] leading-relaxed">
                {contributor.bio}
              </p>

              <div className="pt-4 border-t border-[#102231]/10 space-y-1 text-xs font-sans-ui text-[#8C969F]">
                <div>
                  <strong className="text-[#102231]">Field Gear:</strong> {contributor.gear}
                </div>
                <div>
                  <strong className="text-[#102231]">Recent Dispatch:</strong> {contributor.recentDispatch}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Submit Field Observation with Live Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102231] text-[#ECE5DD] p-8 sm:p-16">
          <div className="max-w-3xl mb-12">
            <span className="text-xs sm:text-sm font-sans-ui text-[#C8783E] tracking-wide block">
              Reader Dispatches
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-medium text-[#FAF7F3] mt-2">
              Submit a Field Observation
            </h2>
            <p className="font-serif-body text-base sm:text-lg text-[#ECE5DD]/80 mt-3 leading-relaxed">
              Were you stranded at a rural train depot? Did you walk through an unfamiliar city at dawn? Record a specific sensory detail from your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form */}
            <form onSubmit={handleFormSubmit} className="lg:col-span-6 space-y-5">
              {validationError && (
                <div className="p-4 bg-red-950/80 text-red-200 text-sm font-sans-ui flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {formSubmitted && (
                <div className="p-4 bg-emerald-950/80 text-emerald-200 text-sm font-sans-ui flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Field dispatch recorded and archived in journal logs!</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans-ui text-[#8C969F] mb-1.5 uppercase tracking-wider">
                    Your Name / Correspondent ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Thomas K."
                    className="w-full px-4 py-2.5 bg-[#182B3C] text-sm font-sans-ui text-[#ECE5DD] placeholder-[#8C969F] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans-ui text-[#8C969F] mb-1.5 uppercase tracking-wider">
                    Transit Mode
                  </label>
                  <select
                    value={travelMedium}
                    onChange={(e) => setTravelMedium(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#182B3C] text-sm font-sans-ui text-[#ECE5DD] focus:outline-hidden"
                  >
                    <option value="Night Train">Night Train / Regional Rail</option>
                    <option value="Coastal Ferry">Coastal Mail Cutter / Ferry</option>
                    <option value="On Foot">On Foot / Mountain Track</option>
                    <option value="Deserted Road">Remote Byway / Bus</option>
                    <option value="Station Waiting">Platform / Depot</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans-ui text-[#8C969F] mb-1.5 uppercase tracking-wider">
                    Location Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder="e.g. Bergen Pier 3"
                    className="w-full px-4 py-2.5 bg-[#182B3C] text-sm font-sans-ui text-[#ECE5DD] placeholder-[#8C969F] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans-ui text-[#8C969F] mb-1.5 uppercase tracking-wider">
                    Coordinates (Optional)
                  </label>
                  <input
                    type="text"
                    value={coordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                    placeholder="e.g. 60°23′N 05°19′E"
                    className="w-full px-4 py-2.5 bg-[#182B3C] text-sm font-sans-ui text-[#ECE5DD] placeholder-[#8C969F] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans-ui text-[#8C969F] mb-1.5 uppercase tracking-wider">
                  Specific Observation *
                </label>
                <textarea
                  required
                  rows={4}
                  value={observationText}
                  onChange={(e) => setObservationText(e.target.value)}
                  placeholder="The rain had stopped, but cold water was still dripping from the rusted iron gutter into an empty enamel basin..."
                  className="w-full px-4 py-2.5 bg-[#182B3C] text-sm font-sans-ui text-[#ECE5DD] placeholder-[#8C969F] focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8783E] text-[#102231] font-semibold text-sm font-sans-ui hover:bg-[#E6965C] transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Submit Field Dispatch</span>
              </button>
            </form>

            {/* Live Preview Plate */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-sans-ui uppercase tracking-wider text-[#8C969F] block">
                Live Dispatch Plate Preview
              </span>

              <div className="p-8 bg-[#182B3C] space-y-5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans-ui text-[#8C969F]">
                  <span className="text-[#C8783E] font-medium">
                    {travelMedium || 'Transit Mode'}
                  </span>
                  <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <div>
                  <h3 className="font-serif-display text-2xl font-semibold text-[#FAF7F3]">
                    {locationName || 'Location Not Specified'}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans-ui text-[#8C969F] mt-1">
                    {coordinates || 'Coordinates Pending Input'}
                  </p>
                </div>

                <div className="p-6 bg-[#102231]">
                  <p className="font-serif-body text-base italic text-[#ECE5DD] leading-relaxed">
                    "{observationText || 'Your specific observation will render here in real-time as you type...'}"
                  </p>
                </div>

                <div className="pt-2 text-xs font-sans-ui text-[#8C969F] flex items-center justify-between">
                  <span>Correspondent: {authorName || 'Anonymous Traveler'}</span>
                  <span>Issue Archive 05</span>
                </div>
              </div>

              {submittedDispatches.length > 0 && (
                <div className="pt-6 space-y-4">
                  <span className="text-sm font-sans-ui text-[#C8783E] font-medium block">
                    Recently Recorded Dispatches ({submittedDispatches.length})
                  </span>
                  {submittedDispatches.map((item) => (
                    <div key={item.id} className="p-4 bg-[#182B3C] text-sm font-sans-ui space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#8C969F]">
                        <span className="text-[#ECE5DD] font-medium">{item.location} ({item.medium})</span>
                        <span>{item.author}</span>
                      </div>
                      <p className="font-serif-body italic text-[#ECE5DD]/90 text-sm">
                        "{item.observation}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
