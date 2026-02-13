import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export default function SajuPreviewTeaser({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <section className="relative border-y border-border/60 bg-black/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neon-purple/25 bg-midnight/60 p-8 shadow-lg shadow-neon-purple/10 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-purple-light">
            {dict.sajuPreview.teaser.badge}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl">
            {dict.sajuPreview.teaser.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-text-secondary sm:text-base">
            {dict.sajuPreview.teaser.description}
          </p>

          <Link
            href={`/${lang}/saju-preview`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            {dict.sajuPreview.teaser.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
