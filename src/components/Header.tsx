"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import type { Dictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export default function Header({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const switchLang = lang === "ko" ? "en" : "ko";
  const switchPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  const navItems = [
    { label: dict.nav.products, href: `/${lang}#features` },
    { label: dict.nav.about, href: `/${lang}/about` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-midnight/80 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue">
              <span className="text-sm font-bold text-white">N</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-text-primary">
              NINE<span className="gradient-text">20</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Link
              href={switchPath}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:border-neon-purple/50 transition-all"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "ko" ? "EN" : "KR"}
            </Link>

            {/* CTA */}
            <Link
              href={`/${lang}#hero`}
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-neon-purple to-neon-blue px-4 py-1.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              {dict.nav.getStarted}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-midnight/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-light transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={`/${lang}#hero`}
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center rounded-full bg-gradient-to-r from-neon-purple to-neon-blue px-4 py-2.5 text-sm font-medium text-white"
              >
                {dict.nav.getStarted}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
