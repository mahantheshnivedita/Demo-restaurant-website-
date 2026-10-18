import React, { useMemo } from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation, Sparkles } from 'lucide-react';
import { RESTAURANT_CONFIG, getGeneralWhatsAppUrl } from '../data/restaurantConfig';

export const LocationHours: React.FC = () => {
  const { contact, schedule } = RESTAURANT_CONFIG;

  // Real-time calculation of Open / Closed status
  const currentStatus = useMemo(() => {
    const now = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = dayNames[now.getDay()];
    const todaySchedule = schedule.weeklyHours.find((h) => h.day === currentDayName);

    if (!todaySchedule || todaySchedule.status === 'Closed' || !todaySchedule.openTime || !todaySchedule.closeTime) {
      return { isOpen: false, text: `Closed today (${currentDayName}) · Reopens Tuesday 12:00 PM` };
    }

    const [openH, openM] = todaySchedule.openTime.split(':').map(Number);
    const [closeH, closeM] = todaySchedule.closeTime.split(':').map(Number);

    const openDate = new Date();
    openDate.setHours(openH, openM, 0, 0);

    const closeDate = new Date();
    closeDate.setHours(closeH, closeM, 0, 0);

    const isOpen = now >= openDate && now <= closeDate;
    if (isOpen) {
      return { isOpen: true, text: `Open Now · Closes at ${todaySchedule.status.split('–')[1]?.trim() || '11:30 PM'}` };
    } else if (now < openDate) {
      return { isOpen: false, text: `Closed now · Opens at ${todaySchedule.status.split('–')[0]?.trim()} today` };
    } else {
      return { isOpen: false, text: `Closed for today · Reopens tomorrow at 12:00 PM` };
    }
  }, [schedule]);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0c0d10] text-[#f7f5ee] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Find & Contact Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fdfcf7] tracking-tight mb-4">
            Location & Dining Hours
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mb-4" />
          <p className="text-[#c8c5ba] text-sm sm:text-base font-light">
            Conveniently located in the heart of the city&apos;s luxury cultural corridor, with valet parking available for all dining patrons.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact & Hours, Right Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards & Hours (6 cols) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Live Operational Status Strip */}
            <div className="p-4 bg-[#14161f] border border-white/10 rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${currentStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                <div>
                  <span className="text-xs font-semibold text-[#fdfcf7] block">
                    {currentStatus.isOpen ? 'Currently Welcoming Guests' : 'Kitchen Currently Resting'}
                  </span>
                  <span className="text-[11px] text-[#a19d91]">
                    {currentStatus.text}
                  </span>
                </div>
              </div>

              <span className="text-[10px] uppercase font-semibold text-[#d4af37] tracking-wider px-2 py-0.5 bg-[#d4af37]/10 rounded-xs">
                Live Status
              </span>
            </div>

            {/* Address & Direct Inquiries */}
            <div className="p-6 bg-[#14161f] border border-white/5 rounded-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h3 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">Address</h3>
                  <p className="text-sm text-[#dedacf] leading-relaxed">
                    {contact.address.line1}, {contact.address.line2}<br />
                    {contact.address.city}, {contact.address.state} {contact.address.postalCode}<br />
                    <span className="text-xs text-[#9d9a8e] italic">({contact.address.landmark})</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#9d9a8e] block">Concierge Desk</span>
                    <a
                      href={`tel:${contact.whatsappNumber}`}
                      className="text-xs sm:text-sm font-medium text-[#fdfcf7] hover:text-[#d4af37] transition-colors tabular-nums"
                    >
                      {contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#9d9a8e] block">Direct WhatsApp</span>
                    <a
                      href={getGeneralWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-[#25D366] hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Hours Table */}
            <div className="p-6 bg-[#14161f] border border-white/5 rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <h3 className="text-xs uppercase tracking-wider text-[#fdfcf7] font-semibold">
                  Weekly Dining Timings
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                {schedule.weeklyHours.map((wh) => (
                  <div
                    key={wh.day}
                    className="flex items-center justify-between py-1 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-[#c5c2b7] font-medium">{wh.day}</span>
                    <span
                      className={`tabular-nums ${
                        wh.status === 'Closed' ? 'text-amber-400/80 font-medium' : 'text-[#fdfcf7]'
                      }`}
                    >
                      {wh.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Directions (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Map Container */}
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-sm overflow-hidden border border-[#d4af37]/30 shadow-2xl bg-[#14161f]">
              <iframe
                title="Restaurant Location Map"
                src={contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Overlay Card */}
              <div className="absolute top-4 left-4 p-3 bg-[#0d0e12]/90 backdrop-blur-md rounded-xs border border-white/15 max-w-xs pointer-events-none">
                <p className="font-serif font-bold text-xs text-[#d4af37] uppercase tracking-wider">
                  The Royal Plate
                </p>
                <p className="text-[11px] text-[#c7c4ba] line-clamp-2">
                  Heritage Crest Pavilion, Lavelle Road
                </p>
              </div>
            </div>

            {/* Directions & Valet Actions */}
            <div className="p-4 bg-[#14161f] border border-white/5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#b8b5aa]">
                <span className="font-semibold text-[#fdfcf7] block">Complimentary Valet Available</span>
                <span>Entrance via Heritage Crest south gate driveway.</span>
              </div>

              <a
                href={contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#d4af37] hover:bg-[#e8cb69] text-[#0c0d10] font-semibold text-xs uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
