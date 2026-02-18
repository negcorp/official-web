import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import AppStoreHub from "@/components/AppStoreHub";
import Footer from "@/components/Footer";
import HomeBlogSection from "@/components/HomeBlogSection";
import { getSajuSeriesPosts } from "@/content/blog/sajuSeries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const posts = getSajuSeriesPosts(lang).slice(0, 3);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <AppStoreHub dict={dict} lang={lang} />
        <HomeBlogSection dict={dict} lang={lang} posts={posts} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
