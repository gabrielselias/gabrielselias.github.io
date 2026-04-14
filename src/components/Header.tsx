"use client";

import Link from "next/link";
import { useState } from "react";
import { type Locale, t, getAlternatePath } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  currentPath: string;
};

const navItems = {
  pt: [
    { href: "/", label: "nav.home" },
    { href: "/sobre", label: "nav.about" },
    { href: "/pesquisa", label: "nav.research" },
    { href: "/textos", label: "nav.writing" },
    { href: "/ensino", label: "nav.teaching" },
    { href: "/contato", label: "nav.contact" },
  ],
  en: [
    { href: "/en", label: "nav.home" },
    { href: "/en/about", label: "nav.about" },
    { href: "/en/research", label: "nav.research" },
    { href: "/en/writing", label: "nav.writing" },
    { href: "/en/teaching", label: "nav.teaching" },
    { href: "/en/contact", label: "nav.contact" },
  ],
};

export default function Header({ locale, currentPath }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = navItems[locale];
  const alternatePath = getAlternatePath(currentPath);

  return (
    <header className="border-b border-stone-200 dark:border-stone-800 bg-[var(--bg)]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href={locale === "en" ? "/en" : "/"}
          className="font-serif text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100 hover:text-[var(--accent)] transition-colors"
        >
          Gabriel S. Elias
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                currentPath === item.href
                  ? "text-[var(--accent)] font-medium"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              {t(item.label, locale)}
            </Link>
          ))}
          <Link
            href={alternatePath}
            className="text-xs font-medium px-2.5 py-1 rounded border border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            aria-label={`Switch to ${locale === "pt" ? "English" : "Português"}`}
          >
            {t("lang.toggle", locale)}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href={alternatePath}
            className="text-xs font-medium px-2 py-1 rounded border border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400"
          >
            {t("lang.toggle", locale)}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-stone-600 dark:text-stone-400 p-1"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-stone-200 dark:border-stone-800 px-6 py-4 space-y-3" aria-label="Mobile navigation">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm ${
                currentPath === item.href
                  ? "text-[var(--accent)] font-medium"
                  : "text-stone-600 dark:text-stone-400"
              }`}
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
