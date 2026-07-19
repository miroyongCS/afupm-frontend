"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Famílias felizes, mundo de paz",
    subtitle: "Construindo um futuro de amor, união e esperança.",
  },
  {
    title: "Uma nova visão para a humanidade",
    subtitle: "Conectando pessoas, famílias e comunidades.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="eyebrow">AFUPM</p>

          <h1>{slide.title}</h1>

          <p>{slide.subtitle}</p>

          <button className="primary-button">
            Conheça mais
          </button>
        </div>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}