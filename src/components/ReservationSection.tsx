import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, Sparkles, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { RESTAURANT_CONFIG, getWhatsAppReservationUrl } from '../data/restaurantConfig';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2 Guests',
    seating: 'Main Royal Dining Hall',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Time slots for lunch and dinner
  const timeSlots = [
    '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const guestOptions = [
    '1 Guest',
    '2 Guests (Intimate)',
    '3 Guests',
    '4 Guests (Family)',
    '5 Guests',
    '6 Guests (Party)',
    '7–10 Guests (Royal Banquet)',
    '10+ Guests (Private Pavilion)',
  ];

  const seatingOptions = [
    'Main Royal Dining Hall',
    'Terrace Garden Pavilion',
    'Royal Heritage Alcove',
    'Executive Chef Table (Subject to Availability)',
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Phone number should be at least 10 digits';
    }
    if (!formData.date) newErrors.date = 'Please select a dining date';
    if (!formData.time) newErrors.time = 'Please select a preferred time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '19:30',
      guests: '2 Guests',
      seating: 'Main Royal Dining Hall',
      specialRequests: '',
    });
    setErrors({});
  };

  // Get tomorrow's date for minimum input date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section id="reservations" className="py-20 sm:py-28 bg-[#0c0d10] text-[#f7f5ee] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fdfcf7] tracking-tight mb-4">
            Book Your Imperial Table
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mb-4" />
          <p className="text-[#c8c5ba] text-sm sm:text-base font-light">
            We hold tables for 15 minutes beyond reserved time. For parties larger than 10 or private dining inquiries, instant WhatsApp booking is recommended.
          </p>
        </div>

        {/* Reservation Card */}
        <div className="bg-[#12141c] border border-[#d4af37]/30 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />

          {submittedData ? (
            /* Submission Confirmation state with transparent demo explanation & WhatsApp direct confirmation */
            <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdfcf7]">
                  Reservation Request Prepared
                </h3>
                <p className="text-sm text-[#c7c4b9] max-w-lg mx-auto font-light">
                  Thank you, <strong className="text-white">{submittedData.name}</strong>. Your requested booking details for{' '}
                  <span className="text-[#d4af37] font-medium">{submittedData.guests}</span> on{' '}
                  <span className="text-[#d4af37] font-medium">{submittedData.date}</span> at{' '}
                  <span className="text-[#d4af37] font-medium">{submittedData.time}</span> are ready.
                </p>
              </div>

              {/* Demo Notice Banner (Honest compliance) */}
              <div className="p-4 bg-[#1b1f2b] border border-amber-500/30 rounded-sm text-left max-w-xl mx-auto flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs text-[#dedacf] space-y-1">
                  <p className="font-semibold text-[#f5df93]">Demonstration Notice:</p>
                  <p>
                    Because this client demonstration runs client-side without a connected database, your request is not stored in a server. To officially confirm this booking right now with our concierge, tap below to send these exact details to our restaurant WhatsApp:
                  </p>
                </div>
              </div>

              {/* WhatsApp Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={getWhatsAppReservationUrl(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#0c0d10] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp to Confirm</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 text-[#d8d5ca] text-xs uppercase tracking-wider font-medium rounded-xs border border-white/10 transition-colors"
                >
                  Make Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Guest Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-[#c7c4b8] font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Singhania"
                    className={`w-full bg-[#0a0b0e] border ${
                      errors.name ? 'border-red-500' : 'border-white/15 focus:border-[#d4af37]'
                    } rounded-xs px-3.5 py-2.5 text-sm text-[#fdfcf7] placeholder-[#6b6962] focus:outline-none transition-colors`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-0.5">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider text-[#c7c4b8] font-medium flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className={`w-full bg-[#0a0b0e] border ${
                      errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#d4af37]'
                    } rounded-xs px-3.5 py-2.5 text-sm text-[#fdfcf7] placeholder-[#6b6962] focus:outline-none transition-colors`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-0.5">{errors.phone}</p>}
                </div>

                {/* Dining Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-xs uppercase tracking-wider text-[#c7c4b8] font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Reservation Date *</span>
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={minDate}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-[#0a0b0e] border ${
                      errors.date ? 'border-red-500' : 'border-white/15 focus:border-[#d4af37]'
                    } rounded-xs px-3.5 py-2.5 text-sm text-[#fdfcf7] focus:outline-none transition-colors [color-scheme:dark]`}
                  />
                  {errors.date && <p className="text-[11px] text-red-400 mt-0.5">{errors.date}</p>}
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label htmlFor="time" className="text-xs uppercase tracking-wider text-[#c7c4b8] font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Dining Time *</span>
                  </label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#0a0b0e] border border-white/15 focus:border-[#d4af37] rounded-xs px-3.5 py-2.5 text-sm text-[#fdfcf7] focus:outline-none transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot} {parseInt(slot.split(':')[0]) < 16 ? 'PM (Lunch)' : 'PM (Dinner)'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest Count */}
                <div className="space-y-1.5">
                  <label htmlFor="guests" className="text-xs uppercase tracking-wider text-[#c7c4b8] font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#0a0b0e] border border-white/15 focus:border-[#d4af37] rounded-xs px-3.5 py-2.5 text-sm text-[#fdfcf7] focus:outline-none transition-colors"
                  >
                    {guestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Seating Preference */}
                <div className="space-y-1.5">
                  <label htmlFor="seating" className="text-xs uppercase tracking-wider text-[#c7c4b8] font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Seating Preference</span>
                  </label>
                  <select
                    id="seating"
                    value={formData.seating}
                    onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    className="w-full bg-[#0a0b0e] border border-white/15 focus:border-[#d4af37] rounded-xs px-3.5 py-2.5 text-sm text-[#fdfcf7] focus:outline-none transition-colors"
                  >
                    {seatingOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label htmlFor="requests" className="text-xs uppercase tracking-wider text-[#c7c4b8] font-medium">
                  Special Requests / Dietary Allergies / Celebration Notes (Optional)
                </label>
                <textarea
                  id="requests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Celebrating 10th anniversary; non-spicy preparation for elderly guest; candle decor preferred..."
                  className="w-full bg-[#0a0b0e] border border-white/15 focus:border-[#d4af37] rounded-xs px-3.5 py-2.5 text-sm text-[#fdfcf7] placeholder-[#6b6962] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Notice */}
              <p className="text-[11px] text-[#8c897f]">
                * By submitting, you agree to our guest etiquette policy. Table is held for 15 minutes past reservation time.
              </p>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#d4af37] hover:bg-[#e8cb69] text-[#0c0d10] font-semibold text-xs uppercase tracking-wider rounded-xs transition-all shadow-xl shadow-[#d4af37]/20 hover:shadow-[#d4af37]/35 cursor-pointer"
                >
                  Reserve Table Now
                </button>

                <a
                  href={getWhatsAppReservationUrl({
                    name: formData.name || 'Valued Guest',
                    phone: formData.phone || 'Phone pending',
                    date: formData.date || 'Today',
                    time: formData.time,
                    guests: formData.guests,
                    seating: formData.seating,
                    specialRequests: formData.specialRequests,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-medium text-xs uppercase tracking-wider rounded-xs border border-[#25D366]/40 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Booking</span>
                </a>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
