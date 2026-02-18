export const i18n = {
  defaultLocale: "ko",
  locales: ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

const localeAliasMap: Record<string, Locale> = {
  zh: "zh-CN",
  "zh-cn": "zh-CN",
  "zh-tw": "zh-TW",
};

export function isSupportedLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}

export function normalizeLocale(locale: string): Locale | null {
  if (isSupportedLocale(locale)) {
    return locale;
  }

  const normalized = localeAliasMap[locale.toLowerCase()];
  return normalized ?? null;
}
