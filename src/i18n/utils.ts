import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizePath(path: string, lang: Lang): string {
  // Strip leading/trailing slashes for normalization
  const clean = path.replace(/^\/+|\/+$/g, "");
  if (lang === defaultLang) return clean ? `/${clean}` : "/";
  return clean ? `/${lang}/${clean}` : `/${lang}/`;
}

export function getAltLangPath(currentPath: string, currentLang: Lang): string {
  // Remove current language prefix if present
  let stripped = currentPath;
  if (currentLang !== defaultLang) {
    stripped = stripped.replace(new RegExp(`^/${currentLang}`), "") || "/";
  }
  // Toggle to the other language
  const altLang: Lang = currentLang === "el" ? "en" : "el";
  return localizePath(stripped, altLang);
}
