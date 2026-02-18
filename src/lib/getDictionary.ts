import type { Locale } from "./i18n";

const dictionaries = {
  ko: () => import("@/dictionaries/ko.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  ja: () => import("@/dictionaries/ja.json").then((m) => m.default),
  "zh-CN": () => import("@/dictionaries/zh-CN.json").then((m) => m.default),
  "zh-TW": () => import("@/dictionaries/zh-TW.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
