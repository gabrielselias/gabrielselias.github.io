import { type Locale, t } from "@/lib/i18n";
import { personal } from "@/data/personal";

export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500 dark:text-stone-500">
        <p>
          &copy; {year} {personal.name}. {t("footer.rights", locale)}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.links.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
            aria-label="Google Scholar"
          >
            Scholar
          </a>
          <a
            href={personal.links.lattes}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
            aria-label="Lattes"
          >
            Lattes
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
