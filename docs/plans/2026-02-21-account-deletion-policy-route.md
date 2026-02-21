# 2026-02-21 Account Deletion Policy Route

## Scope
- 사주 서비스 계정 삭제 정책 페이지를 다국어(`ko`, `en`, `ja`, `zh-CN`, `zh-TW`, `es`, `fr`)로 추가한다.
- 앱에서 사용할 수 있도록 `/legal/saju/account-deletion` 경로를 기본 로케일 페이지로 리다이렉트한다.
- `zh` 별칭 경로도 `zh-CN` 경로로 리다이렉트한다.

## Impacted Files
- `src/app/[lang]/legal/saju/account-deletion/page.tsx`
- `src/app/legal/saju/account-deletion/page.tsx`
- `src/app/zh/legal/saju/account-deletion/page.tsx`
- `src/content/legal/saju920/accountDeletion.ts`
- `src/dictionaries/{ko,en,ja,zh-CN,zh-TW,es,fr}.json`
- `src/lib/legalRoutes.ts`
- `src/lib/legalRoutes.test.ts`
- `README.md`
- `CLAUDE.md`
- `.cursorrules`
- `MEMORY.md`

## Verification
- `npm test`
- `npm run build`
