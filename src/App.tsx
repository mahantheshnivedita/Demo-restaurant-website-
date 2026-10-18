import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedDishes } from './components/FeaturedDishes';
import { FoodMenu } from './components/FoodMenu';
import { ReservationSection } from './components/ReservationSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#f7f5ee] font-sans selection:bg-[#d4af37]/30 selection:text-[#f7e6a7]">
      {/* Top Fixed Navigation Bar */}
      <Navbar onOpenReservationModal={() => scrollToSection('reservations')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Full-Width Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onReserveTable={() => scrollToSection('reservations')}
        />

        {/* 2. About the Restaurant */}
        <AboutSection />

        {/* 3. Chef's Signature Dishes */}
        <FeaturedDishes onViewFullMenu={() => scrollToSection('menu')} />

        {/* 4. Complete Interactive Food Menu */}
        <FoodMenu />

        {/* 5. Table Reservation */}
        <ReservationSection />

        {/* 6. Image Gallery */}
        <GallerySection />

        {/* 7. Customer Reviews & Accolades */}
        <ReviewsSection />

        {/* 8. Location & Opening Hours */}
        <LocationHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
