# 2026-02-21 Saju Preview Root Health Check

## Scope
- 무료 사주보기 사전 가용성 체크를 `openapi.json` 검사에서 API 루트(`GET /`) 상태 체크로 변경한다.
- 실패/성공 판정 기준을 단순화하고 테스트를 갱신한다.
- 타임존 입력을 서버 출생지 프리셋(`GET /api/v1/saju/birthplace-presets`) 기반 선택으로 전환한다.
- 프리셋의 `timezone`, `latitude`, `longitude`를 사주 preview 요청에 반영한다.

## Impacted Files
- `src/lib/sajuPreviewApi.ts`
- `src/lib/sajuPreviewApi.test.ts`
- `src/components/saju/SajuPreviewClient.tsx`
- `README.md`
- `CLAUDE.md`
- `.cursorrules`
- `MEMORY.md`

## Verification
- `npm test`
- `npm run build`
