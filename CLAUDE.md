# NINE20 Official Website

## Project Context

NINE20 is a solo AI startup that makes AI (Claude, GPT, Gemini) context accessible to non-technical users. The fortune-telling service is just the first launched product — the goal is to launch a new AI service every month. Do NOT make the site too fortune-telling focused.

- First product: **사주920** (KR) / **KRFortuneTeller920** (EN)
- Site tone: AI accessibility startup

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5 (strict)
- **Styling**: Tailwind CSS v4 (`@theme inline` in globals.css, no tailwind.config.ts)
- **Animation**: Framer Motion 12+
- **Icons**: Lucide React
- **i18n**: Dictionary pattern (ko/en) + Middleware (negotiator)
- **Runtime**: Node.js 24+, React 19

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint
```

## Architecture

### i18n
- `app/[lang]/` dynamic route + `middleware.ts` (negotiator-based locale detection)
- Dictionaries: `src/dictionaries/{ko,en}.json`
- Loader: `src/lib/getDictionary.ts` (dynamic import)
- Type: `Locale = "ko" | "en"` in `src/lib/i18n.ts`

### Route Params (Next.js 16)
Params are `Promise<{ lang: string }>`. Must await then cast:
```ts
const { lang: rawLang } = await params;
const lang = rawLang as Locale;
```

### Component Rules
- All user-facing text from `dict` prop — no hardcoding.
- `"use client"` only when client interactivity is needed (useState, motion, etc.).
- `Header`/`Footer` require both `dict` and `lang` props. Other sections take `dict` only.

### Layout Structure
- `app/layout.tsx`: Pass-through (returns children only)
- `app/page.tsx`: Redirects `/` → `/${defaultLocale}`
- `app/[lang]/layout.tsx`: HTML shell, font CDNs, metadata

### Tailwind v4 Colors
Defined as CSS custom properties in `globals.css` `@theme inline`:
- `midnight` (#0f172a) — background
- `neon-purple` (#a855f7) — primary accent
- `neon-blue` (#6366f1) — secondary accent
- `neon-cyan` (#06b6d4) — tertiary accent
- Usage: `bg-midnight`, `text-neon-purple`, `border-border`

### CSS Utilities
`.gradient-text`, `.glow-purple`, `.glow-border`, `.bg-grid`

## Gotchas

1. **Framer Motion ease types**: Use `ease: "easeOut" as const` to satisfy strict types.
2. **Tailwind v4**: No config file. Colors in `globals.css` `@theme inline` block.
3. **Node v24 issues**: Fix with `rm -rf node_modules package-lock.json && npm install`.
4. **New pages**: Create under `app/[lang]/`, handle async params, add text keys to both dictionaries.

## New Page Template

```tsx
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function NewPage({
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
      <main className="pt-24 pb-16">{/* content */}</main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
```

## Adding a New Language

1. Add locale code to `locales` array in `src/lib/i18n.ts`
2. Create `src/dictionaries/{locale}.json`
3. Register loader in `src/lib/getDictionary.ts`
