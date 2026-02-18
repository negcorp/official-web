import { describe, expect, it } from "vitest";
import { getLegalPath } from "./legalRoutes";

describe("getLegalPath", () => {
  it("builds saju privacy path", () => {
    expect(getLegalPath("ko", "privacy")).toBe("/ko/legal/saju/privacy");
  });

  it("builds saju terms path", () => {
    expect(getLegalPath("en", "terms")).toBe("/en/legal/saju/terms");
  });
});
