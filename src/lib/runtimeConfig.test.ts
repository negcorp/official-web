import { describe, expect, it } from "vitest";
import {
  getPreferredStoreByUserAgent,
  getSajuApiBaseUrl,
} from "@/lib/runtimeConfig";

describe("getPreferredStoreByUserAgent", () => {
  it("returns playstore for android agents", () => {
    const preferred = getPreferredStoreByUserAgent(
      "Mozilla/5.0 (Linux; Android 14)"
    );
    expect(preferred).toBe("playstore");
  });

  it("returns appstore for ios agents", () => {
    const preferred = getPreferredStoreByUserAgent(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
    );
    expect(preferred).toBe("appstore");
  });

  it("defaults to appstore for unknown agents", () => {
    const preferred = getPreferredStoreByUserAgent("Mozilla/5.0");
    expect(preferred).toBe("appstore");
  });
});

describe("getSajuApiBaseUrl", () => {
  it("uses dev api base by default", () => {
    expect(getSajuApiBaseUrl()).toBe("https://dev-api.nine20.net");
  });
});
