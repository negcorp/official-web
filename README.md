# NINE20 Official Website

NINE20(나인이공) 공식 웹사이트. AI 기반 사주/운세 플랫폼 **NINE20 Saju**의 랜딩 페이지로, 한국어와 영어를 지원합니다.

## Tech Stack

| 영역 | 기술 |
|------|------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| i18n | Dictionary 패턴 (ko/en) |
| Runtime | Node.js 24+, React 19 |

## Getting Started

### 요구 사항

- Node.js 24 이상
- npm 11 이상

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

개발 서버 실행 후 `http://localhost:3000` 접속 시 기본 로케일(`/ko`)로 이동합니다.

### API 설정

무료 사주보기는 런타임에 백엔드를 직접 호출합니다.

```bash
# optional (default: https://api.nine20.net)
NEXT_PUBLIC_API_BASE_URL=https://api.nine20.net

# optional store URLs
NEXT_PUBLIC_APPSTORE_URL=https://apps.apple.com
NEXT_PUBLIC_PLAYSTORE_URL=https://play.google.com/store/apps
```

### 로고 반영

회사 로고가 준비되면 아래 파일만 교체하면 헤더/푸터/메인 허브에 자동 반영됩니다.

- `public/brand/logo-mark.svg`

## Project Structure

```
official-web/
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
│
└── src/
    ├── lib/
    │   ├── i18n.ts                # 로케일 설정 (ko, en)
    │   └── getDictionary.ts       # 사전 로더 유틸리티
    │
    ├── dictionaries/
    │   ├── ko.json                # 한국어 번역 파일
    │   └── en.json                # 영어 번역 파일
    │
    ├── components/
    │   ├── Header.tsx             # 네비게이션 + Language Switcher
    │   ├── Hero.tsx               # 히어로 섹션 (메인 카피 + CTA)
    │   ├── Features.tsx           # AI 도사 4종 소개 카드
    │   ├── TechHighlights.tsx     # 핵심 기술력 소개
    │   ├── TechStack.tsx          # 기술 스택 그리드
    │   └── Footer.tsx             # 푸터 (링크 + 저작권)
    │
    └── app/
        ├── globals.css            # Tailwind v4 테마 (컬러, 유틸리티)
        ├── layout.tsx             # 루트 레이아웃 (패스스루)
        ├── page.tsx               # / → /ko 리다이렉트
        │
        └── [lang]/
            ├── layout.tsx         # 언어별 레이아웃 (메타데이터, 폰트)
            ├── page.tsx           # 메인 랜딩 페이지
            ├── saju-preview/page.tsx
            ├── about/page.tsx
            ├── blog/page.tsx
            └── legal/saju/
                ├── privacy/page.tsx
                └── terms/page.tsx
```

## i18n (국제화) 운영 가이드

### 작동 방식

1. 사용자가 `/`에 접속하면 `app/page.tsx`가 기본 로케일(`ko`)로 리다이렉트
2. `app/[lang]/layout.tsx`에서 URL의 `lang` 파라미터를 읽어 사전 로드
3. 모든 컴포넌트는 `dict` prop을 통해 번역된 텍스트를 렌더링

### 번역 텍스트 수정

`src/dictionaries/ko.json` 또는 `en.json`의 값을 수정하면 됩니다.

```json
{
  "hero": {
    "title": "변경하고 싶은 텍스트"
  }
}
```

### 새 언어 추가 방법

1. `src/lib/i18n.ts`의 `locales` 배열에 새 로케일 코드 추가:
   ```ts
   export const i18n = {
     defaultLocale: "ko",
     locales: ["ko", "en", "ja"],  // 일본어 추가
   } as const;
   ```

2. `src/dictionaries/ja.json` 파일 생성 (ko.json을 복사 후 번역)

3. `src/lib/getDictionary.ts`에 로더 등록:
   ```ts
   const dictionaries = {
     ko: () => import("@/dictionaries/ko.json").then((m) => m.default),
     en: () => import("@/dictionaries/en.json").then((m) => m.default),
     ja: () => import("@/dictionaries/ja.json").then((m) => m.default),
   };
   ```

별도 빌드 설정 없이 위 3단계만 거치면 자동으로 `/ja` 경로가 활성화됩니다.

## 디자인 테마

### 컬러 시스템

Tailwind v4의 `@theme inline` 블록으로 `src/app/globals.css`에서 관리합니다.

| 토큰 | 값 | 용도 |
|------|----|------|
| `midnight` | `#0f172a` | 배경 기본색 |
| `neon-purple` | `#a855f7` | 프라이머리 포인트 |
| `neon-blue` | `#6366f1` | 세컨더리 포인트 |
| `neon-cyan` | `#06b6d4` | 액센트 |
| `text-primary` | `#f8fafc` | 본문 텍스트 |
| `text-secondary` | `#94a3b8` | 보조 텍스트 |
| `text-muted` | `#64748b` | 비활성 텍스트 |

사용 예: `className="bg-midnight text-neon-purple border-border"`

### 폰트

- **Inter** (영문): Google Fonts CDN
- **Pretendard** (한글): jsDelivr CDN

`app/[lang]/layout.tsx`의 `<head>`에서 로드됩니다.

### 글로벌 CSS 유틸리티

| 클래스 | 설명 |
|--------|------|
| `.gradient-text` | Purple → Blue → Cyan 그라데이션 텍스트 |
| `.glow-purple` | 보라색 박스 그림자 |
| `.glow-border` | 보라색 테두리 발광 |
| `.bg-grid` | 그리드 배경 패턴 |

## 컴포넌트 가이드

### 새 섹션 추가

1. `src/components/NewSection.tsx` 생성
2. 필요한 텍스트를 `ko.json`, `en.json`에 추가
3. `app/[lang]/page.tsx`에서 import & 배치:
   ```tsx
   import NewSection from "@/components/NewSection";

   // return 내부에 추가
   <NewSection dict={dict} />
   ```

### 컴포넌트 공통 규칙

- 모든 텍스트는 `dict` prop에서 가져옴 (하드코딩 금지)
- 클라이언트 인터랙션이 필요한 컴포넌트는 `"use client"` 지시어 사용
- Framer Motion 변수의 `ease` 값에는 `as const` 필수

## 새 페이지 추가

예시: `/ko/about` 페이지

1. `src/app/[lang]/about/page.tsx` 생성:
   ```tsx
   import { getDictionary } from "@/lib/getDictionary";
   import type { Locale } from "@/lib/i18n";

   export default async function AboutPage({
     params,
   }: {
     params: Promise<{ lang: string }>;
   }) {
     const { lang: rawLang } = await params;
     const lang = rawLang as Locale;
     const dict = await getDictionary(lang);

     return <div>{/* 페이지 내용 */}</div>;
   }
   ```

2. 사전 파일에 해당 페이지의 텍스트 키 추가

## 배포

### Vercel (권장)

```bash
# Vercel CLI로 배포
npx vercel
```

또는 GitHub 레포지토리 연결 후 Vercel 대시보드에서 자동 배포 설정.

### Docker

```dockerfile
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

> Docker 배포 시 `next.config.ts`에 `output: "standalone"` 추가 필요.

## License

All rights reserved. NINE20.
