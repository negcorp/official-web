import { describe, expect, it, vi, afterEach } from "vitest";
import {
  fetchBirthplacePresets,
  SajuPreviewApiError,
  checkSajuPreviewAvailability,
  isSajuPreviewServiceUnavailableError,
  requestSajuPreview,
  type SajuPreviewRequest,
} from "@/lib/sajuPreviewApi";

const API_BASE = "https://api.nine20.net";

const requestPayload: SajuPreviewRequest = {
  birth_year: 1990,
  birth_month: 5,
  birth_day: 15,
  gender: "M",
  timezone: "Asia/Seoul",
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("checkSajuPreviewAvailability", () => {
  it("returns true when root health responds with ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
      })
    );

    const available = await checkSajuPreviewAvailability(API_BASE);
    expect(available).toBe(true);
  });

  it("returns false when root health responds with non-ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
      })
    );

    const available = await checkSajuPreviewAvailability(API_BASE);
    expect(available).toBe(false);
  });

  it("returns false on network errors", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("network down"))
    );

    const available = await checkSajuPreviewAvailability(API_BASE);
    expect(available).toBe(false);
  });
});

describe("requestSajuPreview", () => {
  it("returns parsed preview result on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          animal: "말",
          gender: "M",
          pillars: { year: null, month: null, day: null, hour: null },
        }),
      })
    );

    const result = await requestSajuPreview(API_BASE, requestPayload, "ko");
    expect(result.animal).toBe("말");
  });

  it("throws http error with status for failed response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
        json: async () => ({ detail: "service unavailable" }),
      })
    );

    await expect(
      requestSajuPreview(API_BASE, requestPayload, "ko")
    ).rejects.toMatchObject({
      status: 503,
      type: "http",
    });
  });
});

describe("fetchBirthplacePresets", () => {
  it("returns parsed presets response on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          locale: "en",
          supported_languages: ["en", "ko"],
          presets: [
            {
              key: "kr",
              country_code: "KR",
              country_name: "Korea",
              city_name: null,
              display_name: "Korea",
              preset_level: "country",
              timezone: "Asia/Seoul",
              latitude: 36.5,
              longitude: 127.9,
              supported_locales: ["ko", "en"],
              is_recommended: true,
            },
          ],
        }),
      })
    );

    const result = await fetchBirthplacePresets(API_BASE, "en");
    expect(result.presets[0]?.timezone).toBe("Asia/Seoul");
  });

  it("throws http error when presets endpoint fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
      })
    );

    await expect(fetchBirthplacePresets(API_BASE, "ko")).rejects.toMatchObject(
      {
        status: 503,
        type: "http",
      } as Partial<SajuPreviewApiError>
    );
  });
});

describe("isSajuPreviewServiceUnavailableError", () => {
  it("returns true for network errors", () => {
    const error = new SajuPreviewApiError("network", undefined, "network");
    expect(isSajuPreviewServiceUnavailableError(error)).toBe(true);
  });

  it("returns true for 429 and 5xx http errors", () => {
    expect(
      isSajuPreviewServiceUnavailableError(
        new SajuPreviewApiError("rate-limit", 429, "http")
      )
    ).toBe(true);
    expect(
      isSajuPreviewServiceUnavailableError(
        new SajuPreviewApiError("server", 500, "http")
      )
    ).toBe(true);
  });

  it("returns false for 4xx business errors", () => {
    expect(
      isSajuPreviewServiceUnavailableError(
        new SajuPreviewApiError("bad-request", 400, "http")
      )
    ).toBe(false);
  });
});
