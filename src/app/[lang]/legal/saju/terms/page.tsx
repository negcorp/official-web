import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { getSajuTermsContent } from "@/content/legal/saju920/terms";

export default async function Saju920TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const termsDict = dict.legal.saju920Terms;
  const termsContent = getSajuTermsContent(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-surface-light/30 p-8">
            <span className="inline-flex items-center rounded-full border border-neon-purple/30 bg-neon-purple/10 px-3 py-1 text-xs font-medium text-neon-purple-light">
              {termsDict.badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
              {termsDict.title}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {termsDict.description}
            </p>
            <p className="mt-6 text-xs text-text-muted">
              {termsDict.lastUpdatedLabel}: {termsDict.lastUpdated}
            </p>

            <div className="mt-8 space-y-8 border-t border-border/70 pt-6">
              {termsContent.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-lg font-semibold text-text-primary">{section.title}</h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed text-text-secondary">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-8 text-xs text-text-muted">
              Effective Date: {termsContent.effectiveDate}
            </p>
          </div>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
