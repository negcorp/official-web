import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SajuPreviewTeaser from "@/components/SajuPreviewTeaser";
import Features from "@/components/Features";
import TechHighlights from "@/components/TechHighlights";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default async function HomePage({
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
      <main>
        <Hero dict={dict} />
        <SajuPreviewTeaser dict={dict} lang={lang} />
        <Features dict={dict} />
        <TechHighlights dict={dict} />
        <TechStack dict={dict} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
