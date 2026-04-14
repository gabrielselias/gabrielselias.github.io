import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import WritingEntry from "@/components/WritingEntry";
import {
  recentOpeds,
  earlierOpeds,
  nexoArticles,
  forthcoming,
  pressCitations,
  interviews,
} from "@/data/writing";
import { personal } from "@/data/personal";
import { t } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  const locale = "en";

  return (
    <PageWrapper locale={locale} currentPath="/en/writing">
      <div className="space-y-12">
        <SectionHeading as="h1">Writing</SectionHeading>

        <section>
          <SectionHeading as="h2">{t("section.recentOpeds", locale)}</SectionHeading>
          {recentOpeds.map((p) => (
            <WritingEntry key={p.id} piece={p} locale={locale} />
          ))}
        </section>

        <section>
          <SectionHeading as="h3">{t("section.veroNoticias", locale)}</SectionHeading>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Articles on Federal District politics and 2026 elections.{" "}
            <a
              href="https://veronoticias.com/author/gabriel-elias/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              See all articles &rarr;
            </a>
          </p>
        </section>

        <section>
          <SectionHeading as="h2">{t("section.earlierOpeds", locale)}</SectionHeading>
          {earlierOpeds.map((p) => (
            <WritingEntry key={p.id} piece={p} locale={locale} />
          ))}
        </section>

        <section>
          <SectionHeading as="h2">{t("section.nexoArticles", locale)}</SectionHeading>
          {nexoArticles.map((p) => (
            <WritingEntry key={p.id} piece={p} locale={locale} />
          ))}
        </section>

        {forthcoming.length > 0 && (
          <section>
            <SectionHeading as="h2">{t("section.forthcoming", locale)}</SectionHeading>
            {forthcoming.map((p) => (
              <WritingEntry key={p.id} piece={p} locale={locale} />
            ))}
          </section>
        )}

        <section>
          <SectionHeading as="h2">{t("section.pressCitations", locale)}</SectionHeading>
          {pressCitations.map((p) => (
            <WritingEntry key={p.id} piece={p} locale={locale} />
          ))}
        </section>

        <section>
          <SectionHeading as="h2">{t("section.interviews", locale)}</SectionHeading>
          {interviews.map((p) => (
            <WritingEntry key={p.id} piece={p} locale={locale} />
          ))}
        </section>

        <section>
          <SectionHeading as="h2">{t("section.authorPages", locale)}</SectionHeading>
          <div className="flex flex-wrap gap-4 text-sm">
            {personal.authorPages.map((page) => (
              <a
                key={page.name}
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                {page.name} &rarr;
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
