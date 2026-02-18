import Link from "next/link";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

type HomeBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
};

export default function HomeBlogSection({
  dict,
  lang,
  posts,
}: {
  dict: Dictionary;
  lang: Locale;
  posts: HomeBlogPost[];
}) {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              {dict.blog.badge}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
              {dict.blog.title}
            </h2>
            <p className="mt-2 text-sm text-text-secondary">{dict.blog.description}</p>
          </div>
          <Link
            href={`/${lang}/blog`}
            className="text-sm font-semibold text-neon-purple-light hover:text-text-primary"
          >
            {dict.appHub.blogCta}
          </Link>
        </div>

        <div className="grid gap-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/blog/${post.slug}`}
              className="rounded-2xl border border-border bg-surface-light/30 p-5 transition-colors hover:border-neon-purple/50"
            >
              <h3 className="text-lg font-semibold text-text-primary">{post.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
