import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { courses } from "@/data/teaching";
import { t } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ensino" };

export default function EnsinoPage() {
  const locale = "pt";
  const current = courses.filter((c) => c.current);
  const past = courses.filter((c) => !c.current);

  return (
    <PageWrapper locale={locale} currentPath="/ensino">
      <div className="space-y-12">
        <SectionHeading as="h1">Ensino</SectionHeading>

        {current.length > 0 && (
          <section>
            <SectionHeading as="h2">{t("section.currentCourses", locale)}</SectionHeading>
            <div className="space-y-8">
              {current.map((course) => (
                <article key={course.id} className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100">
                    {course.title.pt}
                  </h3>
                  <div className="text-sm text-stone-500 dark:text-stone-400">
                    <p className="font-medium">{course.institution}</p>
                    <p className="italic">{course.program.pt}</p>
                    {course.format && (
                      <p className="mt-1 text-xs uppercase tracking-wide text-stone-400 dark:text-stone-500">
                        {course.format.pt}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {course.description.pt}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <SectionHeading as="h2">{t("section.pastCourses", locale)}</SectionHeading>
            <div className="space-y-8">
              {past.map((course) => (
                <article key={course.id} className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100">
                    {course.title.pt}
                  </h3>
                  <div className="text-sm text-stone-500 dark:text-stone-400">
                    <p className="font-medium">{course.institution}</p>
                    <p className="italic">{course.program.pt}</p>
                    {course.period && (
                      <p className="text-xs text-stone-400 dark:text-stone-500">
                        {course.period}{course.hours && <> · {course.hours}</>}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {course.description.pt}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageWrapper>
  );
}
