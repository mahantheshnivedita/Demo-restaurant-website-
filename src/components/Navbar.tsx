import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_CONFIG, getGeneralWhatsAppUrl } from '../data/restaurantConfig';

interface NavbarProps {
  onOpenReservationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Signature Dishes', href: '#signatures' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveClick = () => {
    setIsMobileMenuOpen(false);
    if (onOpenReservationModal) {
      onOpenReservationModal();
    } else {
      const el = document.getElementById('reservations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0e12]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-xl shadow-black/40 py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adheres to Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element Brand wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-full border border-[#d4af37]/70 flex items-center justify-center text-[#d4af37] bg-[#d4af37]/10 group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold text-xs tracking-wider">RP</span>
            </div>
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-[0.2em] text-[#f7f4ea] group-hover:text-[#d4af37] transition-colors uppercase">
              {RESTAURANT_CONFIG.brand.name}
            </span>
          </a>

          {/* Zone 2: 5–6 clean, single-line text links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium tracking-wide uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#c7c5bd] hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#c7c5bd] hover:text-[#25D366] transition-colors border border-white/10 hover:border-[#25D366]/40 rounded-sm whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            
            <button
              onClick={handleReserveClick}
              className="px-4 py-2 text-xs font-semibold tracking-wider text-[#0c0d10] bg-[#d4af37] hover:bg-[#e8cb69] transition-all rounded-sm uppercase whitespace-nowrap shrink-0 shadow-md shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 active:scale-95"
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#f7f4ea] hover:text-[#d4af37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0e12]/98 border-b border-[#d4af37]/25 px-5 py-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#d8d6cd] hover:text-[#d4af37] text-sm tracking-wider uppercase py-1.5 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={handleReserveClick}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider text-[#0c0d10] bg-[#d4af37] hover:bg-[#e8cb69] rounded-sm uppercase shadow-lg shadow-[#d4af37]/20 transition-all"
            >
              Reserve a Table
            </button>
            
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium text-[#f7f4ea] bg-[#1d222b] hover:bg-[#25D366]/20 border border-white/10 rounded-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${RESTAURANT_CONFIG.contact.whatsappNumber}`}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium text-[#f7f4ea] bg-[#1d222b] hover:bg-white/10 border border-white/10 rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
