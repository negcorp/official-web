import type { Locale } from "@/lib/i18n";

export type LegalDocumentSlug = "privacy" | "terms";

export function getLegalPath(lang: Locale, document: LegalDocumentSlug): string {
  return `/${lang}/legal/saju/${document}`;
}
