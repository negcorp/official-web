import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import {
  getSajuSeriesAdjacentPosts,
  getSajuSeriesPostBySlug,
  getSajuSeriesPosts,
  getSajuSeriesPostDetailBySlug,
} from "@/content/blog/sajuSeries";

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
  const post = getSajuSeriesPostDetailBySlug(lang, slug);
  const adjacent = getSajuSeriesAdjacentPosts(lang, slug);

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

  const navLabel = {
    ko: { prev: "이전 글", next: "다음 글" },
    en: { prev: "Previous", next: "Next" },
    ja: { prev: "前の記事", next: "次の記事" },
    "zh-CN": { prev: "上一篇", next: "下一篇" },
    "zh-TW": { prev: "上一篇", next: "下一篇" },
    es: { prev: "Anterior", next: "Siguiente" },
    fr: { prev: "Précédent", next: "Suivant" },
  }[lang];

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

          <p className="mt-8 text-base leading-relaxed text-text-secondary">{post.body.intro}</p>

          <div className="mt-8 space-y-8">
            {post.body.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-text-primary">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-10 rounded-xl border border-border bg-surface-light/30 p-4 text-sm leading-relaxed text-text-secondary">
            {post.body.outro}
          </p>

          {(adjacent?.prev || adjacent?.next) && (
            <nav className="mt-10 grid gap-3 sm:grid-cols-2">
              {adjacent.prev ? (
                <Link
                  href={`/${lang}/blog/${adjacent.prev.slug}`}
                  className="rounded-xl border border-border bg-surface-light/20 p-4 transition-colors hover:border-neon-purple/50"
                >
                  <p className="text-xs font-medium text-text-muted">{navLabel.prev}</p>
                  <p className="mt-2 text-sm font-semibold text-text-primary">
                    {adjacent.prev.no}. {adjacent.prev.title}
                  </p>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}

              {adjacent.next ? (
                <Link
                  href={`/${lang}/blog/${adjacent.next.slug}`}
                  className="rounded-xl border border-border bg-surface-light/20 p-4 text-left transition-colors hover:border-neon-purple/50 sm:text-right"
                >
                  <p className="text-xs font-medium text-text-muted">{navLabel.next}</p>
                  <p className="mt-2 text-sm font-semibold text-text-primary">
                    {adjacent.next.no}. {adjacent.next.title}
                  </p>
                </Link>
              ) : null}
            </nav>
          )}
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
