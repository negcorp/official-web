import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import AppStoreHub from "@/components/AppStoreHub";
import SajuPreviewTeaser from "@/components/SajuPreviewTeaser";
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
        <AppStoreHub dict={dict} lang={lang} />
        <SajuPreviewTeaser dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
