"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import {
  getAppStoreUrl,
  getPlayStoreUrl,
  getPreferredStoreByUserAgent,
} from "@/lib/runtimeConfig";
import { trackEvent } from "@/lib/analytics";

export default function AppStoreHub({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [preferredStore] = useState<
    "appstore" | "playstore"
  >(() =>
    typeof window === "undefined"
      ? "appstore"
      : getPreferredStoreByUserAgent(navigator.userAgent)
  );

  const appStoreUrl = getAppStoreUrl();
  const playStoreUrl = getPlayStoreUrl();

  return (
    <section className="pt-28 pb-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/20 bg-black p-8 sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-white">
            <Image
              src="/brand/logo-mark.svg"
              alt="NINE20 logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
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
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("store_click", { platform: "appstore", lang })
              }
              className={`inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                preferredStore === "appstore"
                  ? "border-white/30 bg-white text-black hover:bg-white/90"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {dict.appHub.appStoreCta}
            </Link>
            <Link
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("store_click", { platform: "playstore", lang })
              }
              className={`inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                preferredStore === "playstore"
                  ? "border-white/30 bg-white text-black hover:bg-white/90"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {dict.appHub.playStoreCta}
            </Link>
          </div>

          <p className="mt-3 text-center text-xs text-white/50">
            {dict.appHub.storeNotice}
          </p>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`/${lang}/saju-preview`}
                onClick={() => trackEvent("free_saju_click", { lang })}
                className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black"
              >
                {dict.appHub.freeSajuCta}
              </Link>
              <Link
                href={`/${lang}/blog`}
                className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 hover:border-white hover:text-white"
              >
                {dict.appHub.blogCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
