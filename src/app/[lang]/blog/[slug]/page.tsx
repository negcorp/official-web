import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { getSajuSeriesPostBySlug, getSajuSeriesPosts } from "@/content/blog/sajuSeries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const post = getSajuSeriesPostBySlug(lang, slug);
  if (!post) {
    return {};
  }

  const title = `${post.title} | NINE20`;
  const description = post.excerpt;
  const url = `https://nine20.net/${lang}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "NINE20",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const post = getSajuSeriesPostBySlug(lang, slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    inLanguage: lang,
    mainEntityOfPage: `https://nine20.net/${lang}/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "NINE20",
      url: "https://nine20.net",
    },
  };

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="pt-24 pb-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          />
          <h1 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">{post.excerpt}</p>
        </article>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}

export async function generateStaticParams() {
  return ["ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr"].flatMap((lang) =>
    getSajuSeriesPosts(lang as Locale).map((post) => ({ lang, slug: post.slug }))
  );
}
