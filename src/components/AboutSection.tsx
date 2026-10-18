import React, { useState } from 'react';
import { Sparkles, ChefHat, Flame, Clock, HeartHandshake, X } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantConfig';
import { SafeImage } from './SafeImage';

export const AboutSection: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const { story } = RESTAURANT_CONFIG;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#101217] text-[#f7f5ee] relative overflow-hidden border-t border-b border-white/5">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Subtitle & Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Culinary Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fdfcf7] tracking-tight mb-4">
            {story.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mb-6" />
          <p className="text-[#c8c5ba] text-base sm:text-lg font-light leading-relaxed">
            {story.lead}
          </p>
        </div>

        {/* 2-Column Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase: Left 6 columns */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
              <SafeImage
                src="/src/assets/images/restaurant_ambience_1792315767432.jpg"
                alt="Ambience and chandelier dining at The Royal Plate"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                fallbackTitle="The Royal Dining Room"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Bottom Quote Card inside image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-black/70 backdrop-blur-md border border-white/10">
                <p className="font-serif italic text-sm text-[#fdfcf7]">
                  &ldquo;Cooking for royalty is not merely an art; it is a sacred discipline of patience, reverence for spices, and unconditional hospitality.&rdquo;
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs text-[#d4af37]">
                  <span>Chef Samarjeet Rathore</span>
                  <span>Executive Culinary Director</span>
                </div>
              </div>
            </div>

            {/* Micro Pillars Strip */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-[#151821] border border-white/5 rounded-sm text-center">
                <Flame className="w-5 h-5 text-[#d4af37] mx-auto mb-1.5" />
                <p className="text-xs font-semibold text-[#f7f5ee]">Wood Embers</p>
                <p className="text-[11px] text-[#9b988e]">Clay Pot Dum</p>
              </div>
              <div className="p-3 bg-[#151821] border border-white/5 rounded-sm text-center">
                <ChefHat className="w-5 h-5 text-[#d4af37] mx-auto mb-1.5" />
                <p className="text-xs font-semibold text-[#f7f5ee]">Royal Lineage</p>
                <p className="text-[11px] text-[#9b988e]">Generational Craft</p>
              </div>
              <div className="p-3 bg-[#151821] border border-white/5 rounded-sm text-center">
                <HeartHandshake className="w-5 h-5 text-[#d4af37] mx-auto mb-1.5" />
                <p className="text-xs font-semibold text-[#f7f5ee]">Atithi Devo</p>
                <p className="text-[11px] text-[#9b988e]">Gracious Care</p>
              </div>
            </div>
          </div>

          {/* Text & Craftsmanship: Right 6 columns */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#151821] p-6 sm:p-8 rounded-sm border border-white/5 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="font-serif text-2xl font-bold text-[#f7f5ee] mb-4">
                Preserving Heritage, Perfecting Taste
              </h3>
              
              <div className="space-y-4 text-[#c7c4b8] text-sm sm:text-base leading-relaxed font-light">
                {story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Stats Strip with Tabular Numerals */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10">
                {story.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold font-serif text-[#d4af37] tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#a09d93] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4">
                <button
                  onClick={() => setIsStoryModalOpen(true)}
                  className="px-6 py-3 bg-[#d4af37]/15 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#0c0d10] border border-[#d4af37]/60 hover:border-[#d4af37] text-xs uppercase font-semibold tracking-wider rounded-sm transition-all duration-300 cursor-pointer"
                >
                  Discover Our Story
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Story Deep-Dive Modal */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#12141a] border border-[#d4af37]/40 rounded-sm max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#a8a59a] hover:text-[#f7f5ee] transition-colors"
              aria-label="Close Story Details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
              The Chronicle of The Royal Plate
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdfcf7] mb-4">
              From Royal Kitchens to Your Table
            </h3>
            
            <div className="w-12 h-[2px] bg-[#d4af37] mb-6" />

            <div className="space-y-4 text-sm text-[#d4d1c5] font-light leading-relaxed">
              <p>
                In the courtly palaces of Northern and Central India, food was never simply sustenance—it was a royal spectacle of refined diplomacy, poetic indulgence, and alchemical spice precision. Royal chefs, known as <em>Bawarchis</em> and <em>Khansamas</em>, guarded secret spice blends (<em>potlis</em>) passed down through generations.
              </p>
              <p>
                At The Royal Plate, we revived these forgotten culinary archives. Our biryanis are prepared strictly in handcrafted heavy brass cauldrons sealed with whole wheat dough (<em>dum pukht</em>) to lock in every aromatic vapor of saffron, whole cardamom, and mace.
              </p>
              <p>
                Our charcoal tandoor is fired daily with seasoned tamarind and babool wood to impart a tender, delicate smokiness impossible to replicate with modern gas grills.
              </p>
              <p className="border-l-2 border-[#d4af37] pl-4 italic text-[#e8cb69]">
                &ldquo;Every plate that leaves our kitchen represents our solemn pledge to honour tradition, cherish each ingredient, and celebrate you as our esteemed royal guest.&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="px-5 py-2.5 bg-[#d4af37] text-[#0c0d10] font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#e8cb69] transition-colors cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
