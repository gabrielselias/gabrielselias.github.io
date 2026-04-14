import { type Locale } from "@/lib/i18n";
import { type WritingPiece } from "@/data/writing";

type WritingEntryProps = {
  piece: WritingPiece;
  locale: Locale;
};

export default function WritingEntry({ piece, locale }: WritingEntryProps) {
  const title = piece.title[locale];

  return (
    <article className="py-3 border-b border-stone-100 dark:border-stone-800 last:border-0">
      <h3 className="text-base font-medium text-stone-900 dark:text-stone-100 leading-snug">
        {piece.url ? (
          <a
            href={piece.url}
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
      <div className="flex flex-wrap items-center gap-x-2 text-sm text-stone-500 dark:text-stone-400 mt-0.5">
        <span className="italic">{piece.outlet}</span>
        {piece.date && (
          <>
            <span className="text-stone-300 dark:text-stone-600">&middot;</span>
            <span>{piece.date}</span>
          </>
        )}
        {piece.coauthor && (
          <>
            <span className="text-stone-300 dark:text-stone-600">&middot;</span>
            <span className="text-xs">c/ {piece.coauthor}</span>
          </>
        )}
      </div>
      {piece.note && (
        <p className="mt-1 text-xs text-stone-400 dark:text-stone-500 italic">
          {piece.note[locale]}
        </p>
      )}
    </article>
  );
}
