import Link from "next/link";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export default function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <footer className="border-t border-border/50 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-lg font-bold text-text-primary">
                NINE<span className="gradient-text">20</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-xs">
              {dict.footer.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary">
              {dict.footer.product}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={`/${lang}/saju-preview`}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {dict.footer.sajuApp}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary">
              {dict.footer.company}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {dict.footer.aboutUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary">
              {dict.footer.legal}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={`/${lang}/legal/saju920/privacy`}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/legal/saju920/terms`}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <p className="text-center text-sm text-text-muted">
            {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
