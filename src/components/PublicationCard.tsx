"use client";

import { useState } from "react";
import { type Locale, t } from "@/lib/i18n";

type PublicationCardProps = {
  title: string;
  year: number;
  venue?: string;
  abstract?: string;
  url?: string;
  locale: Locale;
  note?: string;
  citations?: number;
};

export default function PublicationCard({
  title,
  year,
  venue,
  abstract,
  url,
  locale,
  note,
  citations,
}: PublicationCardProps) {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <article className="py-4 border-b border-stone-100 dark:border-stone-800 last:border-0">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium text-stone-900 dark:text-stone-100 leading-snug">
          {url && url !== "#" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <div className="flex flex-wrap items-center gap-x-2 text-sm text-stone-500 dark:text-stone-400">
          <span>{year}</span>
          {venue && (
            <>
              <span className="text-stone-300 dark:text-stone-600">&middot;</span>
              <span className="italic">{venue}</span>
            </>
          )}
          {citations && (
            <>
              <span className="text-stone-300 dark:text-stone-600">&middot;</span>
              <span className="text-xs text-stone-400 dark:text-stone-500">
                {citations} {t("label.citations", locale)}
              </span>
            </>
          )}
          {note && (
            <>
              <span className="text-stone-300 dark:text-stone-600">&middot;</span>
              <span className="text-xs uppercase tracking-wide text-stone-400 dark:text-stone-500">
                {note}
              </span>
            </>
          )}
        </div>
        <div className="flex gap-3 mt-1.5">
          {abstract && (
            <button
              onClick={() => setShowAbstract(!showAbstract)}
              className="text-xs text-[var(--accent)] hover:underline"
            >
              {showAbstract ? t("label.hideAbstract", locale) : t("label.abstract", locale)}
            </button>
          )}
          {url && url !== "#" && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--accent)] hover:underline"
            >
              {t("label.fullText", locale)} &rarr;
            </a>
          )}
        </div>
      </div>
      {showAbstract && abstract && (
        <div className="mt-3 pl-0 text-sm text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-line">
          {abstract}
        </div>
      )}
    </article>
  );
}
