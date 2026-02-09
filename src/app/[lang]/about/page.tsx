import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rocket, Eye } from "lucide-react";

export default async function AboutPage({
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
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple-light">
              {dict.about.badge}
            </span>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {dict.about.title}
            </h1>
            <p className="mx-auto mt-6 text-lg text-neon-purple-light font-medium">
              {dict.about.mission}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary leading-relaxed">
              {dict.about.description}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 space-y-6">
            <div className="rounded-2xl border border-neon-purple/20 bg-surface-light/30 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-purple/10">
                  <Rocket className="h-5 w-5 text-neon-purple-light" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-text-primary">
                    {dict.about.firstProduct}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {dict.about.firstProductDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neon-blue/20 bg-surface-light/30 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-blue/10">
                  <Eye className="h-5 w-5 text-neon-blue-light" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-text-primary">
                    {dict.about.vision}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {dict.about.visionDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
