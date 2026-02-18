import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { getSajuSeriesPosts } from "@/content/blog/sajuSeries";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const posts = getSajuSeriesPosts(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full border border-neon-purple/30 bg-neon-purple/10 px-3 py-1 text-xs font-medium text-neon-purple-light">
              {dict.blog.badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
              {dict.blog.title}
            </h1>
            <p className="mt-3 text-text-secondary">{dict.blog.description}</p>
          </div>

          <div className="grid gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className="rounded-2xl border border-border bg-surface-light/30 p-5 transition-colors hover:border-neon-purple/50"
              >
                <h2 className="mt-1 text-xl font-semibold text-text-primary">{post.title}</h2>
                <p className="mt-2 text-sm text-text-secondary">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
