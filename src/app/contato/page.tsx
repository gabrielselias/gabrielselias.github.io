import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { personal } from "@/data/personal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contato" };

export default function ContatoPage() {
  return (
    <PageWrapper locale="pt" currentPath="/contato">
      <div className="space-y-12">
        <SectionHeading as="h1">Contato</SectionHeading>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-medium uppercase tracking-wide text-stone-400 dark:text-stone-500">
              E-mail
            </h2>
            {/* TODO: Replace with actual email */}
            <a
              href={`mailto:${personal.email}`}
              className="text-lg text-[var(--accent)] hover:underline underline-offset-4"
            >
              {personal.email}
            </a>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium uppercase tracking-wide text-stone-400 dark:text-stone-500">
              Localização
            </h2>
            <p className="text-stone-600 dark:text-stone-400">{personal.location}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-medium uppercase tracking-wide text-stone-400 dark:text-stone-500">
              Perfis
            </h2>
            <div className="flex flex-col gap-2">
              <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-600 dark:text-stone-400 hover:text-[var(--accent)] transition-colors">
                LinkedIn &rarr;
              </a>
              <a href={personal.links.lattes} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-600 dark:text-stone-400 hover:text-[var(--accent)] transition-colors">
                Lattes &rarr;
              </a>
              <a href={personal.links.googleScholar} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-600 dark:text-stone-400 hover:text-[var(--accent)] transition-colors">
                Google Scholar &rarr;
              </a>
              {/* TODO: Replace ORCID placeholder */}
              <a href={personal.links.orcid} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-600 dark:text-stone-400 hover:text-[var(--accent)] transition-colors">
                ORCID &rarr;
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[var(--accent)] text-white rounded hover:opacity-90 transition-opacity"
            >
              Enviar mensagem
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
