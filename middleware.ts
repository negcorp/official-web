import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { i18n, type Locale } from "@/lib/i18n";

function getLocale(request: NextRequest): Locale {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const languages = new Negotiator({ headers }).languages();
  const locales: string[] = [...i18n.locales];

  const matched = languages.find((lang) =>
    locales.some(
      (locale) => locale === lang || lang.startsWith(locale + "-")
    )
  );

  if (matched) {
    const found = locales.find(
      (locale) => locale === matched || matched.startsWith(locale + "-")
    );
    if (found) return found as Locale;
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\.).*)"],
};
