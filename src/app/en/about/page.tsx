import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { personal } from "@/data/personal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageWrapper locale="en" currentPath="/en/about">
      <div className="space-y-12">
        <div>
          <SectionHeading as="h1">About</SectionHeading>
          <p className="text-stone-500 dark:text-stone-400">{personal.tagline.en}</p>
        </div>

        <section className="space-y-4">
          <SectionHeading as="h2">Academic Trajectory</SectionHeading>
          <div className="space-y-6">
            {personal.education.map((edu) => (
              <div key={edu.year} className="space-y-1">
                <h3 className="text-base font-medium text-stone-900 dark:text-stone-100">
                  {edu.degree.en}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {edu.institution}, {edu.year}
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-400 italic">
                  &ldquo;{edu.thesis.en}&rdquo;
                </p>
                <p className="text-xs text-stone-400 dark:text-stone-500">
                  Advisor: {edu.advisor}
                  {edu.fellowship && <> · {edu.fellowship} fellowship</>}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionHeading as="h2">Research Interests</SectionHeading>
          <ul className="space-y-1.5">
            {personal.researchInterests.en.map((interest) => (
              <li key={interest} className="text-sm sm:text-base text-stone-600 dark:text-stone-400 flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1.5 text-xs">&#9670;</span>
                {interest}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <SectionHeading as="h2">Institutional Affiliations</SectionHeading>
          <ul className="space-y-2">
            {personal.affiliations.en.map((aff) => (
              <li key={aff} className="text-sm sm:text-base text-stone-600 dark:text-stone-400">{aff}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <SectionHeading as="h2">Professional Experience</SectionHeading>
          <ul className="space-y-2">
            {personal.professionalExperience.en.map((exp) => (
              <li key={exp} className="text-sm sm:text-base text-stone-600 dark:text-stone-400">{exp}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <SectionHeading as="h2">Academic &amp; Professional Profiles</SectionHeading>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={personal.links.lattes} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Lattes</a>
            <a href={personal.links.googleScholar} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Google Scholar</a>
            {/* TODO: Replace ORCID placeholder */}
            <a href={personal.links.orcid} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">ORCID</a>
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">LinkedIn</a>
          </div>
        </section>

        <section className="space-y-2">
          <SectionHeading as="h2">Contact</SectionHeading>
          {/* TODO: Replace with actual email */}
          <p className="text-sm text-stone-600 dark:text-stone-400">
            <a href={`mailto:${personal.email}`} className="text-[var(--accent)] hover:underline">{personal.email}</a>
          </p>
          <p className="text-sm text-stone-500 dark:text-stone-500">{personal.location}</p>
        </section>
      </div>
    </PageWrapper>
  );
}
