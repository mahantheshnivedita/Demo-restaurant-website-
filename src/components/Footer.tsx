import React from 'react';
import { ArrowUp, Instagram, Facebook, Globe, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG, getGeneralWhatsAppUrl } from '../data/restaurantConfig';

export const Footer: React.FC = () => {
  const { brand, contact, schedule } = RESTAURANT_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090c] text-[#f7f5ee] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] bg-[#d4af37]/10">
                <span className="font-serif font-bold text-xs">RP</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-[0.2em] text-[#fdfcf7] uppercase">
                {brand.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#b5b1a5] font-light leading-relaxed max-w-sm">
              An homage to the majestic banquets of imperial Indian dynasties. Bringing centuries-old royal culinary heritage to modern fine dining connoisseurs.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={contact.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-[#0c0d10] text-[#c7c4b8] flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contact.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-[#0c0d10] text-[#c7c4b8] flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={contact.socialLinks.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-[#0c0d10] text-[#c7c4b8] flex items-center justify-center transition-colors border border-white/10"
                aria-label="TripAdvisor"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] hover:text-[#0c0d10] text-[#25D366] flex items-center justify-center transition-colors border border-[#25D366]/40"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#b5b1a5]">
              <li><a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-[#d4af37] transition-colors">Our Menu</a></li>
              <li><a href="#signatures" className="hover:text-[#d4af37] transition-colors">Signature Dishes</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Image Gallery</a></li>
              <li><a href="#reservations" className="hover:text-[#d4af37] transition-colors">Reservations</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact & Hours</a></li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
              Concierge & Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b5b1a5]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{contact.address.line1}, {contact.address.line2}, {contact.address.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href={`tel:${contact.whatsappNumber}`} className="hover:text-white tabular-nums">
                  {contact.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">
                  WhatsApp Direct Inquiry
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Dining Service Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
              Dining Service
            </h4>
            <div className="text-xs text-[#b5b1a5] space-y-2 leading-relaxed">
              <div>
                <span className="text-white block font-medium">Lunch Service</span>
                <span>{schedule.lunchHours}</span>
              </div>
              <div>
                <span className="text-white block font-medium">Dinner Service</span>
                <span>{schedule.dinnerHours}</span>
              </div>
              <div className="pt-1 text-[11px] text-[#908c81]">
                <span>{schedule.daysOpen}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c887d]">
          <div className="text-center sm:text-left space-y-1">
            <p>© {currentYear} {brand.name}. All rights reserved.</p>
            <p className="text-[11px] text-[#78756c]">
              Demonstration portfolio project for prospective restaurant hospitality clients.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white/5 hover:bg-[#d4af37] hover:text-[#0c0d10] text-[#c7c4b8] transition-colors border border-white/5 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
