import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { getSajuSeriesPostBySlug, getSajuSeriesPosts } from "@/content/blog/sajuSeries";

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

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="pt-24 pb-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
