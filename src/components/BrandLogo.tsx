import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export default function BrandLogo({
  lang,
  compact = false,
}: {
  lang: Locale;
  compact?: boolean;
}) {
  return (
    <Link href={`/${lang}`} className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white">
        <Image
          src="/brand/logo-mark.svg"
          alt="NINE20 logo"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      </span>
      {!compact ? (
        <span className="text-lg font-bold tracking-tight text-text-primary">
          NINE20
        </span>
      ) : null}
    </Link>
  );
}
