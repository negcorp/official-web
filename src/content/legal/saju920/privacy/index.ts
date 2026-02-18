import type { Locale } from "@/lib/i18n";
import type { ComponentType } from "react";

const content: Record<Locale, () => Promise<{ default: ComponentType }>> = {
  ko: () => import("./ko"),
  en: () => import("./en"),
  ja: () => import("./ja"),
  "zh-CN": () => import("./zhCn"),
  "zh-TW": () => import("./zhTw"),
  es: () => import("./es"),
  fr: () => import("./fr"),
};

export const getSaju920PrivacyContent = async (locale: Locale) => {
  const mod = await content[locale]();
  return mod.default;
};
