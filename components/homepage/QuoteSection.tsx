'use client';

import { quotes } from '@/data/quotes';
import { useState, useEffect } from 'react';

export default function QuoteSection() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <blockquote className="text-3xl font-light italic text-gray-800 mb-4">
          "{quote.text}"
        </blockquote>
        <p className="text-lg text-gray-600">— {quote.author}</p>
      </div>
    </section>
  );
}
