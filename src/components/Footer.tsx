import Link from "next/link";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import BrandLogo from "@/components/BrandLogo";

export default function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <footer className="border-t border-border/50 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <BrandLogo lang={lang} compact />
          <div className="flex items-center gap-5 text-sm text-text-muted">
            <Link
              href={`/${lang}/saju-preview`}
              className="hover:text-text-primary transition-colors"
            >
              {dict.sajuPreview.teaser.title}
            </Link>
            <Link
              href={`/${lang}/legal/saju920/privacy`}
              className="hover:text-text-primary transition-colors"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={`/${lang}/legal/saju920/terms`}
              className="hover:text-text-primary transition-colors"
            >
              {dict.footer.terms}
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-border/50 pt-6">
          <p className="text-center text-sm text-text-muted">
            {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
