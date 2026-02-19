import { describe, expect, it } from "vitest";
import {
  getSajuSeriesPostBySlug,
  getSajuSeriesPosts,
  getSajuSeriesPostDetailBySlug,
} from "@/content/blog/sajuSeries";

describe("saju series content", () => {
  it("returns 10 posts for each locale", () => {
    expect(getSajuSeriesPosts("ko")).toHaveLength(10);
    expect(getSajuSeriesPosts("en")).toHaveLength(10);
  });

  it("resolves localized title by slug", () => {
    const post = getSajuSeriesPostBySlug("ja", "saju-series-01-free-saju-start");
    expect(post?.title).toContain("無料");
  });

  it("returns null for unknown slug", () => {
    expect(getSajuSeriesPostBySlug("ko", "unknown")).toBeNull();
  });

  it("returns non-empty post body sections", () => {
    const post = getSajuSeriesPostDetailBySlug("en", "saju-series-01-free-saju-start");
    expect(post?.body.intro.length).toBeGreaterThan(20);
    expect(post?.body.sections).toHaveLength(3);
    expect(post?.body.sections[0].paragraphs.length).toBeGreaterThan(0);
  });
});
