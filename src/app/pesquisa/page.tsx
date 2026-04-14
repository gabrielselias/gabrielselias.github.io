import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import PublicationCard from "@/components/PublicationCard";
import { publications, researchGroups } from "@/data/publications";
import { t } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pesquisa" };

export default function PesquisaPage() {
  const locale = "pt";
  const thesis = publications.filter((p) => p.type === "thesis");
  const dissertation = publications.filter((p) => p.type === "dissertation");
  const articles = publications.filter((p) => p.type === "article");
  const chapters = publications.filter((p) => p.type === "chapter");
  const conferencePapers = publications.filter((p) => p.type === "conference-paper");
  const technicalReports = publications.filter((p) => p.type === "technical-report");
  const tccSupervision = publications.filter((p) => p.type === "tcc-supervision");
  const presentations = publications.filter((p) => p.type === "presentation");

  const sections: { key: string; pubs: typeof publications }[] = [
    { key: "section.thesis", pubs: thesis },
    { key: "section.dissertation", pubs: dissertation },
    { key: "section.articles", pubs: articles },
    { key: "section.chapters", pubs: chapters },
    { key: "section.conferencePapers", pubs: conferencePapers },
    { key: "section.technicalReports", pubs: technicalReports },
    { key: "section.tccSupervision", pubs: tccSupervision },
    { key: "section.presentations", pubs: presentations },
  ];

  return (
    <PageWrapper locale={locale} currentPath="/pesquisa">
      <div className="space-y-12">
        <SectionHeading as="h1">Pesquisa</SectionHeading>

        {sections.map(
          ({ key, pubs }) =>
            pubs.length > 0 && (
              <section key={key}>
                <SectionHeading as="h2">{t(key, locale)}</SectionHeading>
                {pubs.map((pub) => (
                  <PublicationCard
                    key={pub.id}
                    title={pub.title.pt}
                    year={pub.year}
                    venue={pub.venue?.pt}
                    abstract={pub.abstract?.pt}
                    url={pub.url}
                    locale={locale}
                    citations={pub.citations}
                  />
                ))}
              </section>
            )
        )}

        <section>
          <SectionHeading as="h2">{t("section.researchGroups", locale)}</SectionHeading>
          <div className="space-y-4">
            {researchGroups.map((group) => (
              <div key={group.name} className="py-3 border-b border-stone-100 dark:border-stone-800 last:border-0">
                <h3 className="text-base font-medium text-stone-900 dark:text-stone-100">
                  {group.name}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 italic">
                  {group.fullName.pt}
                </p>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  {group.description.pt}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading as="h2">{t("section.workingPapers", locale)}</SectionHeading>
          <p className="text-sm text-stone-400 dark:text-stone-500 italic">
            Em breve.
          </p>
          {/* TODO: Add working papers here */}
        </section>
      </div>
    </PageWrapper>
  );
}
