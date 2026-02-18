import { describe, expect, it } from "vitest";
import { getDictionary } from "./getDictionary";

describe("getDictionary", () => {
  it("loads japanese dictionary", async () => {
    const dict = await getDictionary("ja");
    expect(dict.nav.products).toBeTruthy();
  });

  it("loads zh-CN dictionary", async () => {
    const dict = await getDictionary("zh-CN");
    expect(dict.footer.privacy).toBeTruthy();
  });

  it("loads french dictionary", async () => {
    const dict = await getDictionary("fr");
    expect(dict.blog.title).toBeTruthy();
  });
});
