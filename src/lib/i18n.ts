export type Locale = "pt" | "en";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "pt";
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === "en") {
    const routeMap: Record<string, string> = {
      "/": "/en",
      "/sobre": "/en/about",
      "/pesquisa": "/en/research",
      "/textos": "/en/writing",
      "/ensino": "/en/teaching",
      "/contato": "/en/contact",
    };
    return routeMap[path] || `/en${path}`;
  }
  const routeMap: Record<string, string> = {
    "/en": "/",
    "/en/about": "/sobre",
    "/en/research": "/pesquisa",
    "/en/writing": "/textos",
    "/en/teaching": "/ensino",
    "/en/contact": "/contato",
  };
  return routeMap[path] || path.replace(/^\/en/, "");
}

export function getAlternatePath(currentPath: string): string {
  const locale = getLocaleFromPath(currentPath);
  const targetLocale = locale === "pt" ? "en" : "pt";
  return getLocalizedPath(currentPath, targetLocale);
}

import pt from "@/locales/pt.json";
import en from "@/locales/en.json";

const translations: Record<Locale, Record<string, string>> = { pt, en };

export function t(key: string, locale: Locale): string {
  return translations[locale]?.[key] || key;
}
