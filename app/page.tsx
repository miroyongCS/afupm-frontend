import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/homepage/Hero";
import QuoteSection from "@/components/homepage/QuoteSection";
import NewsSection from "@/components/homepage/NewsSection";
import NoticeBoard from "@/components/homepage/NoticeBoard";
import FeaturedSection from "@/components/homepage/FeaturedSection";

import { quotes } from "@/data/quotes";
import { news } from "@/data/mock-news";
import { reports } from "@/data/mock-reports";
import { events } from "@/data/mock-events";
import { featuredContent } from "@/data/mock-featured";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <QuoteSection quotes={quotes} />

        <NewsSection
          title="NOTÍCIAS NACIONAIS"
          items={news}
        />

        <NewsSection
          title="INFORMES HYOJEONG"
          items={reports}
        />

        <NoticeBoard events={events} />

        <FeaturedSection items={featuredContent} />
      </main>

      <Footer />
    </>
  );
}