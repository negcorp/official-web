import type { Locale } from "@/lib/i18n";
import type { ComponentType } from "react";

const content: Record<Locale, () => Promise<{ default: ComponentType }>> = {
  ko: () => import("./ko"),
  en: () => import("./en"),
  ja: () => import("./en"),
  "zh-CN": () => import("./en"),
  "zh-TW": () => import("./en"),
  es: () => import("./en"),
  fr: () => import("./en"),
};

export const getSaju920PrivacyContent = async (locale: Locale) => {
  const mod = await content[locale]();
  return mod.default;
};
