import Header from "./Header";
import Footer from "./Footer";
import { type Locale } from "@/lib/i18n";

type PageWrapperProps = {
  locale: Locale;
  currentPath: string;
  children: React.ReactNode;
};

export default function PageWrapper({ locale, currentPath, children }: PageWrapperProps) {
  return (
    <>
      <Header locale={locale} currentPath={currentPath} />
      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16 animate-fade-in">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
