import React, { useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { RESTAURANT_CONFIG, GalleryItem } from '../data/restaurantConfig';
import { SafeImage } from './SafeImage';

export const GallerySection: React.FC = () => {
  const { gallery } = RESTAURANT_CONFIG;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Ambience', 'Signature Dishes', 'Culinary Art', 'Private Dining'];

  const filteredGallery = selectedCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    const idx = filteredGallery.findIndex((item) => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0d0e12] text-[#f7f5ee] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Splendour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fdfcf7] tracking-tight mb-4">
            The Royal Gallery
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mb-4" />
          <p className="text-[#c8c5ba] text-sm sm:text-base font-light">
            A glimpse into our opulent dining spaces, artisanal culinary craft, and vibrant gastronomic presentation.
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0c0d10] font-semibold shadow-lg shadow-[#d4af37]/20'
                    : 'bg-[#151821] text-[#b5b1a5] hover:text-white hover:bg-[#1e2230] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item: GalleryItem) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-[#181a24] border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                fallbackTitle={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                  {item.category}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#fdfcf7] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#c9c6bb] line-clamp-2 font-light">
                  {item.description}
                </p>
                
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#d4af37] font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand view</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 p-2 text-[#d4af37] hover:text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full max-h-[70vh] rounded-sm overflow-hidden border border-[#d4af37]/40 shadow-2xl flex items-center justify-center bg-black">
              <SafeImage
                src={filteredGallery[lightboxIndex].image}
                alt={filteredGallery[lightboxIndex].title}
                fallbackTitle={filteredGallery[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Caption & Navigation Controls */}
            <div className="w-full mt-4 flex items-center justify-between text-left px-2">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                  {filteredGallery[lightboxIndex].category} · {lightboxIndex + 1} of {filteredGallery.length}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#fdfcf7]">
                  {filteredGallery[lightboxIndex].title}
                </h3>
                <p className="text-xs text-[#bebbae] mt-1 max-w-xl font-light">
                  {filteredGallery[lightboxIndex].description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevImage}
                  className="p-2.5 rounded-sm bg-white/10 hover:bg-[#d4af37] hover:text-[#0c0d10] text-[#f7f5ee] transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2.5 rounded-sm bg-white/10 hover:bg-[#d4af37] hover:text-[#0c0d10] text-[#f7f5ee] transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
