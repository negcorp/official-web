# Saju Preview Web Integration Design

Date: 2026-02-13
Project: `official-web`
Status: Approved

## Goal

Add a free saju preview experience to the web:

- Add a teaser CTA on the main page.
- Add a detailed preview page (`/[lang]/saju-preview`).
- If the backend is unavailable or returns server-side errors, hide form/results and show a short unavailable message instead.

## Scope

- Use OpenAPI endpoint (`/openapi.json`) to validate feature availability at runtime.
- Use `POST /api/v1/saju/preview` for no-login free preview.
- Support both Korean and English via dictionary keys.

Out of scope:

- Authenticated premium flow (`/api/v1/saju/premium`)
- Compatibility flow (`/api/v1/saju/compatibility`)
- Persisted history UI

## Approaches Considered

1. Client runtime OpenAPI check (recommended)
- Load page, fetch OpenAPI, verify `/api/v1/saju/preview` exists.
- Show form only when available.
- Best fit for current static-export site.

2. Next.js server proxy route
- Not suitable with `output: "export"` static deployment.

3. Build-time feature switch
- Cannot reflect runtime backend outages, so it does not satisfy requirements.

## Final Architecture

1. Main page CTA component links to `/{lang}/saju-preview`.
2. `/{lang}/saju-preview` renders a client component:
- `checking`: verifying backend support
- `available`: show form and result rendering
- `unavailable`: hide form/results and show unavailable guide
3. Runtime check:
- `GET {NEXT_PUBLIC_API_BASE_URL}/openapi.json`
- verify path `/api/v1/saju/preview`
4. Submission:
- `POST {NEXT_PUBLIC_API_BASE_URL}/api/v1/saju/preview`
- header: `Accept-Language`

## Error Handling Policy

Transition to `unavailable` and hide form/results when:

- OpenAPI request fails
- OpenAPI schema/path check fails
- Preview API request fails with network/server errors
- Rate limit/server error responses (e.g. 429/5xx)

Unavailable copy:

- KO: "현재 서버 상태로 무료 사주보기를 표시할 수 없습니다."
- EN: "Free Saju preview is temporarily unavailable due to server status."

## Data Model (Input)

Required:
- `birth_year`
- `birth_month`
- `birth_day`
- `gender` (`M`/`F`)
- `timezone`

Optional:
- `is_lunar`
- `is_leap_month`
- `birth_hour`
- `birth_minute`
- `latitude`
- `longitude`

## UX Notes

- Main page teaser is always visible and routes to details page.
- Details page gates interactive UI based on backend status.
- On availability loss after submit attempt, existing result is hidden and unavailable message is shown.

## Testing Plan

1. Backend healthy:
- teaser visible
- detail form visible
- submit returns and renders result
2. Backend down / invalid API base:
- detail page shows unavailable message
- no form/result shown
3. Backend returns 429/5xx on submit:
- form/result hidden and unavailable message shown
4. i18n:
- KO/EN copy rendered correctly
