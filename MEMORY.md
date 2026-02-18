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
