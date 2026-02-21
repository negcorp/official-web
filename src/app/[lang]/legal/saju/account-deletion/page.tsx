import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalDocument from "@/components/legal/LegalDocument";
import { getSajuAccountDeletionContent } from "@/content/legal/saju920/accountDeletion";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export default async function Saju920AccountDeletionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const legalDict = dict.legal.saju920AccountDeletion;
  const content = getSajuAccountDeletionContent(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <LegalDocument
          badge={legalDict.badge}
          title={legalDict.title}
          lastUpdatedLabel={legalDict.lastUpdatedLabel}
          lastUpdatedDate={legalDict.lastUpdated}
          effectiveDateLabel={legalDict.effectiveDateLabel}
          effectiveDate={content.effectiveDate}
        >
          <p>{legalDict.description}</p>
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </LegalDocument>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
