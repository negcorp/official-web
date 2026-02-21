import { describe, expect, it } from "vitest";
import { i18n, isSupportedLocale, normalizeLocale } from "./i18n";

describe("i18n locale support", () => {
  it("uses english as default locale", () => {
    expect(i18n.defaultLocale).toBe("en");
  });

  it("includes expanded locale list", () => {
    expect(i18n.locales).toEqual([
      "ko",
      "en",
      "ja",
      "zh-CN",
      "zh-TW",
      "es",
      "fr",
    ]);
  });

  it("normalizes zh alias to zh-CN", () => {
    expect(normalizeLocale("zh")).toBe("zh-CN");
    expect(normalizeLocale("zh-cn")).toBe("zh-CN");
    expect(normalizeLocale("zh-tw")).toBe("zh-TW");
  });

  it("detects supported locales", () => {
    expect(isSupportedLocale("ja")).toBe(true);
    expect(isSupportedLocale("zh-CN")).toBe(true);
    expect(isSupportedLocale("de")).toBe(false);
  });
});
