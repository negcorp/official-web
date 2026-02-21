# 2026-02-21 Free Saju API Production Default

## Scope
- 무료 사주보기 기본 API 베이스 URL을 개발 서버(`dev-api`)에서 운영 서버(`api`)로 전환한다.
- `NEXT_PUBLIC_API_BASE_URL` 환경변수 오버라이드 동작은 유지한다.
- 정적 산출물(`docs`)도 최신 설정으로 재생성해 반영한다.

## Impacted Files
- `src/lib/runtimeConfig.ts`
- `src/lib/runtimeConfig.test.ts`
- `README.md`
- `CLAUDE.md`
- `.cursorrules`
- `docs/**` (Next.js static export output)
- `MEMORY.md`

## Verification
- `npm test`
- `npm run build`
