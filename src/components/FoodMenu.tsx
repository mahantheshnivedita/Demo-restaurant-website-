import React, { useState, useMemo } from 'react';
import { Sparkles, MessageSquare, Search, Filter } from 'lucide-react';
import { RESTAURANT_CONFIG, getWhatsAppOrderUrl, MenuItem } from '../data/restaurantConfig';
import { SafeImage } from './SafeImage';

export const FoodMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { menuCategories, menuItems } = RESTAURANT_CONFIG;

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      // Dietary match
      let matchesDiet = true;
      if (dietaryFilter === 'veg') matchesDiet = item.isVegetarian === true;
      if (dietaryFilter === 'non-veg') matchesDiet = item.isVegetarian === false;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery, menuItems]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#101217] text-[#f7f5ee] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Epicurean Selection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fdfcf7] tracking-tight mb-4">
            Our Handcrafted Menu
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mb-4" />
          <p className="text-[#c8c5ba] text-sm sm:text-base font-light">
            Each recipe is prepared fresh to order, honouring age-old culinary secrets and slow-cooking principles.
          </p>
        </div>

        {/* Filter Controls: Segmented Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0c0d10] font-semibold shadow-lg shadow-[#d4af37]/20 scale-105'
                    : 'bg-[#181b24] text-[#c7c4b8] hover:text-[#fdfcf7] hover:bg-[#202430] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 bg-[#151821] border border-white/5 rounded-sm mb-10 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8e8b81] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Biryani, Paneer)..."
              className="w-full bg-[#0d0e12] border border-white/10 rounded-xs pl-9 pr-3 py-1.5 text-xs text-[#fdfcf7] placeholder-[#7d7a71] focus:outline-none focus:border-[#d4af37]/70"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8e8b81] hover:text-white"
              >
                ×
              </button>
            )}
          </div>

          {/* Dietary Toggle */}
          <div className="flex items-center gap-1.5 self-end sm:self-auto text-xs">
            <Filter className="w-3.5 h-3.5 text-[#d4af37] mr-1 hidden sm:inline" />
            <span className="text-[#a09d92] mr-1">Diet:</span>
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-white/15 text-white font-medium'
                  : 'text-[#a09d92] hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-700/60 font-medium'
                  : 'text-[#a09d92] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                dietaryFilter === 'non-veg'
                  ? 'bg-red-950/60 text-red-300 border border-red-700/60 font-medium'
                  : 'text-[#a09d92] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Non-Veg Only</span>
            </button>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#14161e] rounded-sm border border-white/5 max-w-md mx-auto">
            <p className="font-serif text-lg text-[#dedacf] mb-2">No matching delicacies found</p>
            <p className="text-xs text-[#9b988f] mb-4">Try adjusting your search or category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs uppercase tracking-wider bg-[#d4af37] text-[#0c0d10] font-semibold rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="bg-[#14161e] border border-white/5 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#d4af37]/35 transition-all duration-300"
              >
                {/* Image & Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1d26]">
                  <SafeImage
                    src={dish.image}
                    alt={dish.name}
                    fallbackTitle={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161e] via-transparent to-transparent opacity-80" />
                  
                  {/* Indian FSSAI Veg / Non-Veg Indicator */}
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

                  {/* Signature Tag */}
                  {dish.isSignature && (
                    <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold text-[#0c0d10] bg-[#d4af37] px-2 py-0.5 rounded-xs shadow-md">
                      Signature
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg font-bold text-[#fdfcf7] group-hover:text-[#d4af37] transition-colors leading-snug">
                        {dish.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#b0ada3] font-light leading-relaxed line-clamp-2 mb-3">
                      {dish.description}
                    </p>

                    {dish.tags && dish.tags.length > 0 && (
                      <div className="flex items-center gap-2 text-[11px] text-[#918e84] mb-3">
                        <span>{dish.tags.join(' · ')}</span>
                      </div>
                    )}
                  </div>

                  {/* Price & WhatsApp CTA */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8e8b80] block font-medium">Price</span>
                      <span className="font-serif text-lg font-bold text-[#d4af37] tabular-nums">
                        ₹{dish.price}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppOrderUrl(dish.name, dish.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-[#0c0d10] border border-[#25D366]/40 hover:border-[#25D366] rounded-xs text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                      title={`Order ${dish.name} on WhatsApp`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Client Demo Note */}
        <div className="mt-12 text-center text-xs text-[#8a877c] font-light border-t border-white/5 pt-6">
          <span>* Menu items, seasonal pricing, and dishes are fully customizable in </span>
          <code className="text-[#d4af37] font-mono">src/data/restaurantConfig.ts</code>.
        </div>

      </div>
    </section>
  );
};
