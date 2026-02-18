import { describe, expect, it } from "vitest";
import { getDictionary } from "@/lib/getDictionary";
import { i18n } from "@/lib/i18n";

describe("dictionary required keys", () => {
  it("has blog CTA for app hub in every locale", async () => {
    for (const locale of i18n.locales) {
      const dict = await getDictionary(locale);
      expect(dict.appHub.blogCta).toBeTruthy();
    }
  });
});
