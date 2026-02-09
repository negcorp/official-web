import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { getSaju920PrivacyContent } from "@/content/legal/saju920/privacy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalDocument from "@/components/legal/LegalDocument";

export default async function Saju920PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const Content = await getSaju920PrivacyContent(lang);

  const legalDict = dict.legal.saju920Privacy;

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <LegalDocument
          badge={legalDict.badge}
          title={legalDict.title}
          lastUpdatedLabel={legalDict.lastUpdated}
          lastUpdatedDate="2025-02-10"
          effectiveDateLabel={legalDict.effectiveDate}
          effectiveDate="2025-02-10"
        >
          <Content />
        </LegalDocument>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
