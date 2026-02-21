# NINE20 Official Website - Claude Guide

## Priority
Follow `AGENTS.md` first. This file is a concise implementation companion.

## Project Context
NINE20 is an AI accessibility startup. The fortune service is the first product, not the only product narrative.
- Free saju preview defaults to `https://api.nine20.net` unless `NEXT_PUBLIC_API_BASE_URL` is set.
- Saju preview timezone/birthplace selector should use server presets from `/api/v1/saju/birthplace-presets`.

## Stack
- Next.js 16 (App Router, Turbopack)
- TypeScript 5 (strict)
- Tailwind CSS v4 (`@theme inline`)
- React 19, Framer Motion, Lucide
- Vitest for tests

## i18n Rules
- Supported locales: `ko`, `en`, `ja`, `zh-CN`, `zh-TW`, `es`, `fr`
- `zh` paths should resolve to `zh-CN`
- All user-facing text must come from dictionaries
- Update `src/lib/i18n.ts` and `src/lib/getDictionary.ts` together when touching locales

## Next.js Route Params
For `[lang]` routes:
```ts
const { lang: rawLang } = await params;
const lang = rawLang as Locale;
```

## UI Conventions
- `Header` and `Footer` receive both `dict` and `lang`
- Use `"use client"` only for real client-side behavior
- Keep Tailwind token usage aligned with `src/app/globals.css`

## Required Verification Before Completion
- `npm test`
- `npm run build` for routing/layout/i18n changes

## Required Documentation Updates Per Task
At minimum, update:
- `MEMORY.md` (append task log)
- `README.md` when behavior/setup changed

See `AGENTS.md` for full lifecycle and DoD.
