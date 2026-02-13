"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import BrandLogo from "@/components/BrandLogo";

export default function Header({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const pathname = usePathname();

  const switchLang = lang === "ko" ? "en" : "ko";
  const switchPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-midnight/80 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <BrandLogo lang={lang} />

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Link
              href={switchPath}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:border-neon-purple/50 transition-all"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "ko" ? "EN" : "KR"}
            </Link>

            {/* CTA */}
            <Link
              href={`/${lang}/saju-preview`}
              className="inline-flex items-center rounded-full border border-white/80 px-4 py-1.5 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors"
            >
              {dict.sajuPreview.teaser.cta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
