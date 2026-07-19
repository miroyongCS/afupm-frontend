'use client';

import { newsData } from '@/data/mock-news';

export default function NewsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Últimas Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <article key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gray-300">
                {/* Placeholder para imagem */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{news.date}</p>
                <p className="text-gray-700 mb-4">{news.excerpt}</p>
                <a href="#" className="text-primary font-bold hover:underline">
                  Leia Mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
