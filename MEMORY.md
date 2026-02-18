# MEMORY.md

This file stores durable task memory for AI collaboration.
Append one entry per completed task. Do not rewrite past entries unless correcting facts.

## Entry Template

```md
## YYYY-MM-DD
- Task: <short title>
- Decision: <key decision or constraint>
- Changed: <file1>, <file2>, ...
- Verification: <commands and result>
- Follow-up: <optional next action>
```

## 2026-02-18
- Task: Legal URL path rename (`saju920` -> `saju`)
- Decision: Keep only new path; old path should return 404 (no redirect)
- Changed: `src/app/[lang]/legal/saju/*`, `src/components/Footer.tsx`, `src/lib/legalRoutes.ts`, `src/lib/legalRoutes.test.ts`, `README.md`
- Verification: `npm test` passed
- Follow-up: Ensure deployment links use `/legal/saju/*`

## 2026-02-18
- Task: Multi-locale expansion and zh default handling
- Decision: Support `ja`, `zh-CN`, `zh-TW`, `es`, `fr`; map `zh` path to `zh-CN`
- Changed: `src/lib/i18n.ts`, `src/lib/getDictionary.ts`, `src/components/Header.tsx`, `src/app/[lang]/layout.tsx`, `src/dictionaries/*.json`, `src/app/zh/**`, static docs output
- Verification: `npm test` passed, `npm run build` passed
- Follow-up: Monitor translation quality by locale in production

## 2026-02-18
- Task: AI collaboration governance update
- Decision: Use `AGENTS.md` as authoritative process and require per-task `MEMORY.md` updates
- Changed: `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `README.md`, `docs/skills/ai-ops-playbook/SKILL.md`, `MEMORY.md`
- Verification: Doc-only change; no runtime behavior change
- Follow-up: Keep these files synced when workflow changes

## 2026-02-18
- Task: Change free saju API default to dev environment
- Decision: Set default base URL to `https://dev-api.nine20.net` while preserving `NEXT_PUBLIC_API_BASE_URL` override
- Changed: `src/lib/runtimeConfig.ts`, `src/lib/runtimeConfig.test.ts`, `src/components/saju/SajuPreviewClient.tsx`, `README.md`
- Verification: `npm test -- src/lib/runtimeConfig.test.ts` passed, `npm test` passed
- Follow-up: Switch default to production API when rollout is complete

## 2026-02-18
- Task: Build multilingual 10-part saju blog draft pack
- Decision: Deliver practical publish-ready drafts in 7 languages under docs, plus i18n JSON structure and CMS template
- Changed: `docs/blog/saju-study-10/*`, `docs/blog/saju-study-10/templates/*`, `MEMORY.md`
- Verification: Content/docs task; no runtime code impact. Existing tests remained passing from prior run (`npm test`).
- Follow-up: Split language packs into per-post files when publishing in CMS

## 2026-02-18
- Task: Expose blog routes and remove legal privacy EN fallback
- Decision: Replace blog redirect with localized list/detail pages and provide dedicated privacy policy content for ja/zh-CN/zh-TW/es/fr
- Changed: `src/app/[lang]/blog/page.tsx`, `src/app/[lang]/blog/[slug]/page.tsx`, `src/content/blog/sajuSeries.ts`, `src/content/blog/sajuSeries.test.ts`, `src/content/legal/saju920/privacy/index.ts`, `src/content/legal/saju920/privacy/{ja,zhCn,zhTw,es,fr}.tsx`, `MEMORY.md`
- Verification: `npm test -- src/content/blog/sajuSeries.test.ts` passed, `npm test` passed, `npm run build` passed
- Follow-up: Replace short-form blog detail copy with full multilingual long-form content per episode
