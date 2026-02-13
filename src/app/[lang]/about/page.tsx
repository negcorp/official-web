import type { Locale } from "@/lib/i18n";
import { redirect } from "next/navigation";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  redirect(`/${lang}`);
}
