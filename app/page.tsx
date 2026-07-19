'use client';

import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/homepage/Hero';
import QuoteSection from '@/components/homepage/QuoteSection';
import NewsSection from '@/components/homepage/NewsSection';
import EventsSection from '@/components/homepage/EventsSection';
import FeaturedSection from '@/components/homepage/FeaturedSection';

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Hero />
        <QuoteSection />
        <FeaturedSection />
        <NewsSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  );
}
