import React, { useEffect } from 'react';
import { X, Camera, Film, Clock, MapPin, Eye } from 'lucide-react';
import type { Photo } from '../types';

interface PhotoLightboxProps {
  photo: Photo | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#102231]/95 backdrop-blur-md p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label={`Photograph inspection: ${photo.caption}`}
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#182B3C] border border-[#ECE5DD]/20 rounded-xs shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-[#102231]/80 text-[#ECE5DD] hover:bg-[#C8783E] hover:text-[#102231] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#C8783E]"
          aria-label="Close photograph inspector"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-full object-contain max-h-[75vh]"
          />
          <div className="absolute bottom-3 left-3 bg-[#102231]/80 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/10 text-[10px] font-mono-tag text-[#ECE5DD] flex items-center gap-1.5">
            <Eye className="w-3 h-3 text-[#C8783E]" />
            <span>35mm Archival Plate</span>
          </div>
        </div>

        {/* Technical EXIF & Curatorial Marginalia */}
        <div className="w-full md:w-80 lg:w-96 p-6 flex flex-col justify-between bg-[#142332] border-t md:border-t-0 md:border-l border-[#ECE5DD]/10 overflow-y-auto">
          <div className="space-y-5">
            {/* Location & Title */}
            <div>
              <span className="text-[10px] font-mono-tag uppercase tracking-[0.2em] text-[#C8783E]">
                Field Plate
              </span>
              <h3 className="font-serif-display text-lg font-semibold text-[#FAF7F3] mt-1 leading-snug">
                {photo.location}
              </h3>
              <p className="text-xs font-mono-tag text-[#8C969F] flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-[#C8783E]" />
                {photo.coordinates}
              </p>
            </div>

            {/* Poetic Caption */}
            <div className="pt-2 border-t border-white/10">
              <p className="font-serif-body text-sm text-[#ECE5DD] leading-relaxed italic">
                "{photo.caption}"
              </p>
            </div>

            {/* Technical Camera Sheet */}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <span className="text-[10px] font-mono-tag uppercase tracking-[0.2em] text-[#8C969F] block">
                Technical Manifest
              </span>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono-tag">
                <div className="bg-[#102231] p-2 rounded-xs border border-white/5">
                  <span className="text-[10px] text-[#8C969F] block flex items-center gap-1">
                    <Camera className="w-3 h-3 text-[#C8783E]" /> Camera
                  </span>
                  <span className="text-[#ECE5DD] truncate block font-medium">
                    {photo.cameraInfo.camera}
                  </span>
                </div>

                <div className="bg-[#102231] p-2 rounded-xs border border-white/5">
                  <span className="text-[10px] text-[#8C969F] block flex items-center gap-1">
                    <Film className="w-3 h-3 text-[#C8783E]" /> Emulsion
                  </span>
                  <span className="text-[#ECE5DD] truncate block font-medium">
                    {photo.cameraInfo.filmStock}
                  </span>
                </div>

                <div className="bg-[#102231] p-2 rounded-xs border border-white/5">
                  <span className="text-[10px] text-[#8C969F] block">Optics</span>
                  <span className="text-[#ECE5DD] truncate block font-medium">
                    {photo.cameraInfo.lens}
                  </span>
                </div>

                <div className="bg-[#102231] p-2 rounded-xs border border-white/5">
                  <span className="text-[10px] text-[#8C969F] block">Exposure</span>
                  <span className="text-[#ECE5DD] truncate block font-medium">
                    {photo.cameraInfo.exposure}
                  </span>
                </div>
              </div>

              <div className="bg-[#102231] p-2 rounded-xs border border-white/5 text-xs font-mono-tag">
                <span className="text-[10px] text-[#8C969F] block flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C8783E]" /> Lighting & Atmosphere
                </span>
                <span className="text-[#ECE5DD] font-medium">
                  {photo.cameraInfo.timeOfDay}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tag text-[#8C969F]">
            <span>PRESS ESC TO CLOSE</span>
            <button
              onClick={onClose}
              className="text-[#C8783E] hover:underline"
            >
              Return to Journal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
