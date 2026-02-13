import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SajuPreviewClient from "@/components/saju/SajuPreviewClient";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export default async function SajuPreviewPage({
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
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-purple-light">
            {dict.sajuPreview.page.badge}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            {dict.sajuPreview.page.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-text-secondary sm:text-base">
            {dict.sajuPreview.page.description}
          </p>
        </div>
        <SajuPreviewClient dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
