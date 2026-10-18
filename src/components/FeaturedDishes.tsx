import React from 'react';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { RESTAURANT_CONFIG, getWhatsAppOrderUrl, MenuItem } from '../data/restaurantConfig';
import { SafeImage } from './SafeImage';

interface FeaturedDishesProps {
  onViewFullMenu: () => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ onViewFullMenu }) => {
  // Select top 3-4 signature dishes
  const signatureDishes = RESTAURANT_CONFIG.menuItems
    .filter((item) => item.isSignature)
    .slice(0, 4);

  return (
    <section id="signatures" className="py-20 sm:py-28 bg-[#0d0e12] text-[#f7f5ee] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Imperial Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fdfcf7] tracking-tight">
              Chef&apos;s Signature Masterpieces
            </h2>
            <div className="w-16 h-[2px] bg-[#d4af37] mt-4" />
          </div>

          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-[#f5df93] transition-colors group cursor-pointer self-start md:self-auto"
          >
            <span>Explore All Menu Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {signatureDishes.map((dish: MenuItem) => (
            <div
              key={dish.id}
              className="bg-[#14161e] border border-white/5 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#d4af37]/40 hover:shadow-2xl hover:shadow-[#d4af37]/5 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1d26]">
                <SafeImage
                  src={dish.image}
                  alt={dish.name}
                  fallbackTitle={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161e] via-transparent to-transparent opacity-80" />
                
                {/* Indian FSSAI Standard Veg / Non-Veg Indicator */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md p-1.5 rounded-xs border border-white/10 flex items-center gap-1.5">
                  <div
                    className={`w-3.5 h-3.5 border ${
                      dish.isVegetarian ? 'border-emerald-500' : 'border-red-500'
                    } flex items-center justify-center p-[2px]`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        dish.isVegetarian ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-[#f7f5ee] pr-1">
                    {dish.isVegetarian ? 'Veg' : 'Non-Veg'}
                  </span>
                </div>

                {/* Chef Tag if exists */}
                {dish.tags?.[0] && (
                  <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold text-[#0c0d10] bg-[#d4af37] px-2 py-0.5 rounded-xs">
                    {dish.tags[0]}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fdfcf7] group-hover:text-[#d4af37] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#b8b5ab] font-light line-clamp-3 mb-4 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#9c998f] uppercase tracking-wider font-medium">Price</span>
                    <span className="font-serif text-xl font-bold text-[#d4af37] tabular-nums">
                      ₹{dish.price}
                    </span>
                  </div>

                  {/* Order on WhatsApp Button */}
                  <a
                    href={getWhatsAppOrderUrl(dish.name, dish.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-[#0c0d10] border border-[#25D366]/40 hover:border-[#25D366] rounded-xs text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                    title={`Order ${dish.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
