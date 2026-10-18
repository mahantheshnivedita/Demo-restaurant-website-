import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { RESTAURANT_CONFIG, getGeneralWhatsAppUrl } from '../data/restaurantConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const { brand } = RESTAURANT_CONFIG;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Friendly Quick Prompt Bubble */}
      {isOpenTooltip && (
        <div className="mb-3 p-4 bg-[#12141c] text-[#f7f5ee] border border-[#25D366]/40 rounded-sm shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200 relative">
          <button
            onClick={() => setIsOpenTooltip(false)}
            className="absolute top-2 right-2 text-[#9a978d] hover:text-white"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-semibold text-[#fdfcf7] uppercase tracking-wider">
              {brand.shortName} Concierge
            </span>
          </div>
          <p className="text-xs text-[#c9c6bb] font-light leading-relaxed mb-3">
            Namaste! Craving royal delicacies or need an instant table reservation? Connect with our manager on WhatsApp.
          </p>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-[#0c0d10] font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpenTooltip(true)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-108 active:scale-95"
          aria-label="Chat with restaurant on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 text-white fill-white" />
        </a>

        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none -z-10" />

        {/* Hover Label for Desktop */}
        <span className="hidden md:group-hover:inline-block absolute right-16 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#0d0e12] border border-[#25D366]/40 text-[#25D366] text-xs font-medium rounded-xs whitespace-nowrap shadow-lg">
          Chat & Order on WhatsApp
        </span>
      </div>
    </div>
  );
};
