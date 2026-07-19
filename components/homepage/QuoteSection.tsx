"use client";

import { useState } from "react";
import type { Quote } from "@/data/quotes";

type Props = {
  quotes: Quote[];
};

export default function QuoteSection({ quotes }: Props) {
  const [current, setCurrent] = useState(0);

  const quote = quotes[current];

  function nextQuote() {
    setCurrent((value) => (value + 1) % quotes.length);
  }

  function previousQuote() {
    setCurrent((value) => (value - 1 + quotes.length) % quotes.length);
  }

  return (
    <section className="quote-section">
      <div className="quote-container">
        <span className="quote-mark">“</span>

        <blockquote>{quote.text}</blockquote>

        <div className="quote-meta">
          <span>Palavra dos Verdadeiros Pais</span>
          <span>Semana {quote.weekNumber}</span>
        </div>

        <div className="quote-controls">
          <button onClick={previousQuote}>←</button>

          <span>
            {current + 1} / {quotes.length}
          </span>

          <button onClick={nextQuote}>→</button>
        </div>
      </div>
    </section>
  );
}