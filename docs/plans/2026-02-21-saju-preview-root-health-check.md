# 2026-02-21 Saju Preview Root Health Check

## Scope
- 무료 사주보기 사전 가용성 체크를 `openapi.json` 검사에서 API 루트(`GET /`) 상태 체크로 변경한다.
- 실패/성공 판정 기준을 단순화하고 테스트를 갱신한다.

## Impacted Files
- `src/lib/sajuPreviewApi.ts`
- `src/lib/sajuPreviewApi.test.ts`
- `README.md`
- `MEMORY.md`

## Verification
- `npm test`
