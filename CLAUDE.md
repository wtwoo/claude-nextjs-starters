# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

Next.js 15 모던 스타터킷. 타입 안전성, 다크모드, 반응형 디자인이 미리 구성된 프로덕션 레디 프로젝트입니다.

## 빌드, 개발, 테스트 명령어

### 개발 서버
```bash
npm run dev
```
http://localhost:3000에서 실행됩니다. 파일 변경 시 자동 리로드 가능합니다.

### 프로덕션 빌드
```bash
npm run build
```
`.next` 디렉토리에 최적화된 빌드가 생성됩니다.

### 프로덕션 서버 실행
```bash
npm run start
```
빌드된 프로덕션 앱을 실행합니다.

### Lint
```bash
npm run lint
```
ESLint를 실행하여 코드 스타일을 검사합니다.

## 핵심 아키텍처

### 프로젝트 구조
```
app/                          # Next.js App Router (SSR/SSG)
├── page.tsx                  # 랜딩 페이지
├── layout.tsx                # 루트 레이아웃 (ThemeProvider 포함)
├── examples/                 # 예제 페이지들
│   ├── components/          # UI 컴포넌트 예제
│   ├── forms/               # 폼 예제
│   ├── hooks/               # 훅 예제
│   └── layouts/             # 레이아웃 예제
├── forms/                    # 폼 페이지
└── globals.css              # 글로벌 스타일

components/                   # 재사용 가능한 컴포넌트
├── ui/                      # shadcn/ui 컴포넌트
├── layout/                  # Header, Footer 등 레이아웃 컴포넌트
├── landing/                 # 랜딩 페이지 컴포넌트 (Hero, Features, CTA)
└── examples/                # 예제 페이지 컴포넌트

lib/                          # 유틸리티 함수
├── utils.ts                 # cn() - 클래스명 병합 (clsx + tailwind-merge)
├── validations.ts           # Zod 검증 스키마
└── date-utils.ts            # 날짜 관련 유틸

store/                        # Zustand 상태 관리
└── use-example-store.ts     # 예제 카운터 스토어

types/                        # 전역 타입 정의
```

### 기술 스택

**핵심 프레임워크:**
- Next.js 15 (App Router, Server Components)
- React 19
- TypeScript (strict 모드)

**스타일링:**
- Tailwind CSS 4
- shadcn/ui (Radix UI 기반)
- class-variance-authority (CVA) - 컴포넌트 변형 관리

**폼 및 검증:**
- React Hook Form - 폼 상태 관리
- Zod - 런타임 타입 검증

**상태 관리:**
- Zustand - 가볍고 유연한 상태 관리

**기타:**
- next-themes - 다크모드/라이트모드 지원
- date-fns - 날짜 포맷팅
- lucide-react - SVG 아이콘
- usehooks-ts - 커스텀 React 훅

### 핵심 설정

**Path Alias:** `@/*`는 프로젝트 루트를 가리킵니다.
```typescript
// tsconfig.json의 paths 설정
"@/*": ["./*"]

// 사용 예
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/header'
```

**ThemeProvider:** root layout.tsx에 next-themes의 ThemeProvider가 설정되어 있습니다. 클라이언트 컴포넌트에서 `useTheme()` 훅으로 다크모드 토글을 구현할 수 있습니다.

**Tailwind CSS:** 반응형 디자인을 위해 Tailwind의 반응형 프리픽스(`sm:`, `md:`, `lg:` 등)와 유틸리티를 사용합니다.

## 개발 가이드

### 새 페이지 추가
App Router에서 새 라우트를 추가하려면 `app/` 아래에 디렉토리를 생성하고 `page.tsx`를 작성합니다.
```typescript
// app/new-route/page.tsx
export default function NewPage() {
  return <div>새로운 페이지</div>
}
```

### 새 컴포넌트 생성
재사용 가능한 컴포넌트는 `components/` 아래에 작성합니다. 섹션별로 폴더를 구분합니다.
```typescript
// components/my-section/my-component.tsx
export function MyComponent() {
  return <div>My Component</div>
}
```

### 폼 구현 패턴
React Hook Form + Zod를 사용합니다:
```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/lib/validations'

export function MyForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { /* ... */ }
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* 폼 필드 */}
    </form>
  )
}
```

### 클래스명 병합
Tailwind 클래스를 동적으로 병합할 때 `cn()` 유틸을 사용합니다:
```typescript
import { cn } from '@/lib/utils'

className={cn(
  'p-4 rounded',
  isActive && 'bg-blue-500',
  size === 'lg' && 'p-8'
)}
```

### 전역 상태 관리
Zustand 스토어를 작성하고 필요한 컴포넌트에서 훅으로 사용합니다:
```typescript
// store/my-store.ts
import { create } from 'zustand'

export const useMyStore = create<MyState>((set) => ({
  // 상태 및 액션 정의
}))

// 컴포넌트에서
const state = useMyStore()
```

## 코딩 규칙

- **들여쓰기:** 2칸
- **컴포넌트 이름:** PascalCase
- **변수/함수 이름:** camelCase
- **any 타입 금지:** 모든 타입을 명시적으로 지정
- **Server Component 우선:** 필요한 경우만 `'use client'` 지시어 사용
- **주석/문서:** 한국어로 작성

## 반응형 디자인

Tailwind의 반응형 프리픽스를 활용합니다:
```typescript
className="w-full md:w-1/2 lg:w-1/3"
```

`globals.css`에 기본 스타일이 정의되어 있습니다.

## 유용한 패턴

### shadcn/ui 컴포넌트 사용
이미 설치된 shadcn/ui 컴포넌트(`components/ui/`)들을 조합하여 UI를 구성합니다.

### 예제 페이지 참고
`app/examples/` 아래의 예제 페이지들이 각 기능(컴포넌트, 폼, 훅, 레이아웃)의 사용 패턴을 보여줍니다.
