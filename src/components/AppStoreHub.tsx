import Link from "next/link";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export default function AppStoreHub({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <section className="pt-28 pb-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/20 bg-black p-8 sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-white text-3xl font-bold text-black">
            N
          </div>
          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {dict.appHub.badge}
          </p>
          <h1 className="mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {dict.appHub.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 sm:text-base">
            {dict.appHub.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href={dict.appHub.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              {dict.appHub.appStoreCta}
            </Link>
            <Link
              href={dict.appHub.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {dict.appHub.playStoreCta}
            </Link>
          </div>

          <p className="mt-3 text-center text-xs text-white/50">
            {dict.appHub.storeNotice}
          </p>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <Link
              href={`/${lang}/saju-preview`}
              className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black"
            >
              {dict.appHub.freeSajuCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
