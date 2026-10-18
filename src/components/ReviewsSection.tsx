import React from 'react';
import { Sparkles, Star, Quote, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_CONFIG, ReviewItem } from '../data/restaurantConfig';

export const ReviewsSection: React.FC = () => {
  const { reviews } = RESTAURANT_CONFIG;

  return (
    <section className="py-20 sm:py-28 bg-[#101217] text-[#f7f5ee] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Patron Accolades</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fdfcf7] tracking-tight mb-4">
            Words from Our Guests
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mb-4" />
          <p className="text-[#c8c5ba] text-sm sm:text-base font-light">
            Memorable evenings shared over imperial flavours and timeless dining hospitality.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev: ReviewItem) => (
            <div
              key={rev.id}
              className="bg-[#151821] border border-white/5 rounded-sm p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#d4af37]/40 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#d4af37]/20 absolute top-6 right-6 group-hover:text-[#d4af37]/40 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Review Body */}
                <p className="text-sm text-[#d4d1c5] font-light leading-relaxed mb-6 italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Occasion */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 flex items-center justify-center font-serif font-bold text-xs text-[#d4af37]">
                  {rev.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#fdfcf7]">{rev.name}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#a09c90]">
                    <span>{rev.occasion}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-0.5 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Dine-In</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demonstration Disclaimer for Potential Clients */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8c897f] max-w-lg mx-auto font-light">
            * Demonstration reviews shown for presentation. In production, these integrate directly with Google Reviews, TripAdvisor, or client feedback.
          </p>
        </div>

      </div>
    </section>
  );
};
