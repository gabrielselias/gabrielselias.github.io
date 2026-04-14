type SectionHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({ children, as: Tag = "h2" }: SectionHeadingProps) {
  const styles = {
    h1: "font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100",
    h2: "font-serif text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mb-6",
    h3: "font-serif text-xl font-semibold tracking-tight text-stone-800 dark:text-stone-200 mb-4",
  };

  return <Tag className={styles[Tag]}>{children}</Tag>;
}
