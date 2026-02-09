import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PenLine } from "lucide-react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="pt-24 pb-16 min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-sm text-neon-cyan">
            {dict.blog.badge}
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.blog.title}
          </h1>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface-light/30">
              <PenLine className="h-8 w-8 text-text-muted" />
            </div>
            <h2 className="text-xl font-semibold text-text-secondary">
              {dict.blog.comingSoon}
            </h2>
            <p className="max-w-md text-sm text-text-muted leading-relaxed">
              {dict.blog.comingSoonDescription}
            </p>
          </div>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
