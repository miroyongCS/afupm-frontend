"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          AFUPM
        </Link>

        <nav className="desktop-nav">
          <Link href="/sobre">Sobre</Link>
          <Link href="/anuncios">Central de Anúncios</Link>
          <Link href="/bencao">Bênção</Link>
          <Link href="/midia">Mídia</Link>
        </nav>

        <div className="header-actions">
          <Link href="/login" className="login-button">
            Login
          </Link>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          <Link href="/sobre">Sobre</Link>
          <Link href="/anuncios">Central de Anúncios</Link>
          <Link href="/bencao">Bênção</Link>
          <Link href="/midia">Mídia</Link>
        </nav>
      )}
    </header>
  );
}