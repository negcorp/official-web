# 2026-02-21 Default Locale to English

## Scope
- 기본 로케일을 `ko`에서 `en`으로 변경한다.
- 루트(`/`) 접근 시 기본 리다이렉트 대상이 `/en`이 되도록 보장한다.
- 로케일 없는 법적 고지 링크(`/legal/saju/account-deletion`)를 `/en/legal/saju/account-deletion`으로 리다이렉트한다.

## Impacted Files
- `src/lib/i18n.ts`
- `src/app/legal/saju/account-deletion/page.tsx`
- `src/lib/i18n.test.ts`
- `README.md`
- `CLAUDE.md`
- `.cursorrules`
- `MEMORY.md`

## Verification
- `npm test`
- `npm run build`
