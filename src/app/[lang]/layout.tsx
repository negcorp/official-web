import type { Metadata } from "next";
import { i18n, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import "../globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const canonicalUrl = `https://nine20.net/${locale}`;
  const ogLocaleByLang: Record<Locale, string> = {
    ko: "ko_KR",
    en: "en_US",
    ja: "ja_JP",
    "zh-CN": "zh_CN",
    "zh-TW": "zh_TW",
    es: "es_ES",
    fr: "fr_FR",
  };
  const alternateLanguages = Object.fromEntries(
    i18n.locales.map((item) => [item, `https://nine20.net/${item}`])
  );

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    metadataBase: new URL("https://nine20.net"),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: canonicalUrl,
      siteName: "NINE20",
      type: "website",
      locale: ogLocaleByLang[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;

  return (
    <html lang={lang} className="dark">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-midnight text-text-primary">
        {children}
      </body>
    </html>
  );
}
