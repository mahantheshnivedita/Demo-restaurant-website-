import React from 'react';
import { ArrowDown, MessageSquare, Calendar, Award, Sparkles, Utensils } from 'lucide-react';
import { RESTAURANT_CONFIG, getGeneralWhatsAppUrl } from '../data/restaurantConfig';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden">
      {/* Background Photography with measured dark scrim for optical contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_fine_dining_1792315764263.jpg"
          alt="Gourmet royal Indian dining spread at The Royal Plate"
          className="w-full h-full object-cover object-center scale-105 animate-[kenburns_24s_ease-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/75 to-[#0c0d10]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0d10]/40 to-[#0c0d10]/90" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center my-auto py-12">
        
        {/* Brand Crest & Subtitle */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-[#d4af37]/35 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#f5df93]">
            {RESTAURANT_CONFIG.brand.name} · FINE DINING & HERITAGE CUISINE
          </span>
        </div>

        {/* Headline with text-balance to avoid single trailing words */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fdfcf7] mb-6 max-w-4xl leading-[1.1] [text-wrap:balance]">
          An Unforgettable <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f7e6a7] to-[#d4af37]">
            Dining Experience
          </span>
        </h1>

        {/* Supporting description */}
        <p className="text-base sm:text-lg md:text-xl text-[#dedacf] max-w-2xl font-light leading-relaxed mb-10 [text-wrap:balance]">
          Where centuries-old imperial royal recipes unite with contemporary gastronomy. 
          Indulge in freshly prepared artisanal dishes, authentic charcoal-roasted flavours, 
          and heartfelt royal hospitality.
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#d4af37] hover:bg-[#e8cb69] text-[#0c0d10] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-all shadow-xl shadow-[#d4af37]/20 hover:shadow-[#d4af37]/35 active:scale-98 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#0c0d10] group-hover:rotate-12 transition-transform" />
            <span>Explore Our Menu</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onReserveTable}
            className="w-full sm:w-auto px-7 py-3.5 bg-black/40 hover:bg-black/60 text-[#f7f4ea] hover:text-[#d4af37] font-semibold text-xs sm:text-sm tracking-wider uppercase border border-[#d4af37]/50 hover:border-[#d4af37] rounded-sm transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>Reserve a Table</span>
          </button>

          {/* WhatsApp Direct Action */}
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-medium text-xs sm:text-sm tracking-wide rounded-sm border border-[#25D366]/40 hover:border-[#25D366] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            title="Connect directly on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Hospitality Highlights */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-3xl text-left">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">Michelin Guide</p>
              <p className="text-xs text-[#b8b5ab]">Recommended Selection 2025</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Utensils className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">Slow Charcoal Dum</p>
              <p className="text-xs text-[#b8b5ab]">Clay tandoors & copper deghs</p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">Imperial Hospitality</p>
              <p className="text-xs text-[#b8b5ab]">Bespoke dining pavilions</p>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="relative z-10 flex justify-center pb-2">
        <button
          onClick={onExploreMenu}
          className="flex flex-col items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#a8a59b] hover:text-[#d4af37] transition-colors focus:outline-none cursor-pointer"
          aria-label="Scroll down to menu"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-4 h-4 text-[#d4af37] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
