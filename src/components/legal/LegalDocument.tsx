import type { ReactNode } from "react";

export default function LegalDocument({
  badge,
  title,
  lastUpdatedLabel,
  lastUpdatedDate,
  effectiveDateLabel,
  effectiveDate,
  children,
}: {
  badge: string;
  title: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  effectiveDateLabel: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple-light">
          {badge}
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm text-text-muted">
          <span>
            {lastUpdatedLabel}: {lastUpdatedDate}
          </span>
          <span>
            {effectiveDateLabel}: {effectiveDate}
          </span>
        </div>
      </div>
      <div className="legal-prose mt-12">{children}</div>
    </div>
  );
}
