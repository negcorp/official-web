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

## 2026-02-18
- Task: Expand blog discoverability and retire "Tech Blog" positioning
- Decision: Use "Saju Blog" naming across locales, add home/header/footer blog entry points, and strengthen blog page metadata for SEO
- Changed: `src/components/{Header,Footer,AppStoreHub,HomeBlogSection}.tsx`, `src/app/[lang]/{page.tsx,blog/page.tsx,blog/[slug]/page.tsx}`, `src/dictionaries/{ko,en,ja,zh-CN,zh-TW,es,fr}.json`, `src/lib/dictionaryKeys.test.ts`, `src/content/legal/saju920/privacy/fr.tsx`, static `docs/*`
- Verification: `npm test -- src/lib/dictionaryKeys.test.ts` passed, `npm run lint` passed (1 existing warning), `npm test` passed, `npm run build` passed
- Follow-up: Replace blog detail excerpt-only body with full multilingual long-form post content

## 2026-02-19
- Task: Fill missing on-page content for blog detail and terms
- Decision: Keep multilingual support and generate practical long-form body blocks in-app instead of excerpt-only rendering
- Changed: `src/content/blog/sajuSeries.ts`, `src/content/blog/sajuSeries.test.ts`, `src/app/[lang]/blog/[slug]/page.tsx`, `src/content/legal/saju920/terms.ts`, `src/app/[lang]/legal/saju/terms/page.tsx`, `src/dictionaries/{ko,en,ja,zh-CN,zh-TW,es,fr}.json`, static `docs/*`
- Verification: `npm test -- src/content/blog/sajuSeries.test.ts` passed, `npm run lint` passed (1 existing warning), `npm test` passed, `npm run build` passed
- Follow-up: Replace generated blog body paragraphs with finalized editorial copy per locale

## 2026-02-19
- Task: Add previous/next navigation to blog detail pages
- Decision: Compute adjacent posts by series order and render localized prev/next cards at article bottom
- Changed: `src/content/blog/sajuSeries.ts`, `src/content/blog/sajuSeries.test.ts`, `src/app/[lang]/blog/[slug]/page.tsx`, static `docs/*`
- Verification: `npm test -- src/content/blog/sajuSeries.test.ts` passed, `npm run lint` passed (1 existing warning), `npm run build` passed
- Follow-up: Consider adding keyboard shortcuts and top-level series index nav for long reading flows

## 2026-02-21
- Task: Switch free saju default API base to production endpoint
- Decision: Change default base URL to `https://api.nine20.net` while keeping `NEXT_PUBLIC_API_BASE_URL` override behavior
- Changed: `docs/plans/2026-02-21-free-saju-api-prod-default.md`, `src/lib/runtimeConfig.ts`, `src/lib/runtimeConfig.test.ts`, `README.md`, `CLAUDE.md`, `.cursorrules`, `MEMORY.md`
- Verification: `npm install` passed (required for local test runtime), `npm test` passed
- Follow-up: Set `NEXT_PUBLIC_API_BASE_URL` explicitly in deployment environments that still require non-production backend

## 2026-02-21
- Task: Regenerate docs static output after API default switch
- Decision: Rebuild `docs` via Next.js export so shipped static bundle uses `https://api.nine20.net`, and restore non-build docs (`CNAME`, `docs/blog/saju-study-10/*`, `docs/plans/*`) removed by export cleanup
- Changed: `docs/**`, `docs/CNAME`, `docs/blog/saju-study-10/*`, `docs/plans/2026-02-21-free-saju-api-prod-default.md`, `MEMORY.md`
- Verification: `npm run build` passed, `npm test` passed, `rg -n "dev-api\\.nine20\\.net" docs -S` returned no matches
- Follow-up: If deployment relies on `NEXT_PUBLIC_API_BASE_URL`, update that environment variable in hosting settings as well

## 2026-02-21
- Task: Ignore local npm cache directory in git
- Decision: Add `/.npm-cache/` to `.gitignore` to prevent local cache artifacts from appearing as untracked files
- Changed: `.gitignore`, `MEMORY.md`
- Verification: `git check-ignore -v .npm-cache/.keep` matched `.gitignore`, `npm test` passed
- Follow-up: None

## 2026-02-21
- Task: Switch saju preview availability check from OpenAPI to root health
- Decision: Replace `/openapi.json` path introspection with API root (`GET /`) health response check for preflight availability
- Changed: `docs/plans/2026-02-21-saju-preview-root-health-check.md`, `src/lib/sajuPreviewApi.ts`, `src/lib/sajuPreviewApi.test.ts`, `README.md`, `MEMORY.md`
- Verification: `npm test` passed
- Follow-up: Consider introducing explicit `/health` endpoint in backend for stronger readiness semantics

## 2026-02-21
- Task: Regenerate deployment docs output after root health-check change
- Decision: Rebuild static export in `docs` so deployment bundle reflects root-based availability check logic; restore non-build docs paths kept in repository (`docs/CNAME`, `docs/blog/saju-study-10/*`, `docs/plans/*`, `docs/skills/*`)
- Changed: `docs/**`, `MEMORY.md`
- Verification: `npm run build` passed, `npm test` passed, `rg -n "openapi\\.json" docs/_next/static/chunks -S` returned no matches
- Follow-up: Consider moving non-build documents outside `docs/` to avoid restore steps on each export
