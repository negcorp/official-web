"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import type { Dictionary } from "@/lib/getDictionary";
import { i18n, type Locale } from "@/lib/i18n";
import BrandLogo from "@/components/BrandLogo";

export default function Header({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const localeLabels: Record<Locale, string> = {
    ko: "한국어",
    en: "English",
    ja: "日本語",
    "zh-CN": "简体中文",
    "zh-TW": "繁體中文",
    es: "Español",
    fr: "Français",
  };

  const toLocalePath = (target: Locale) => {
    if (!pathname) {
      return `/${target}`;
    }
    return pathname.replace(`/${lang}`, `/${target}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-midnight/80 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <BrandLogo lang={lang} />

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <label className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:border-neon-purple/50 transition-all">
              <Globe className="h-3.5 w-3.5" />
              <select
                aria-label="Select language"
                value={lang}
                onChange={(event) => {
                  router.push(toLocalePath(event.target.value as Locale));
                }}
                className="bg-transparent outline-none"
              >
                {i18n.locales.map((locale) => (
                  <option key={locale} value={locale} className="text-black">
                    {localeLabels[locale]}
                  </option>
                ))}
              </select>
            </label>

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
