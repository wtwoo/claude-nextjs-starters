# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

Next.js 16.1.1 모던 스타터킷. 타입 안전성, 다크모드, 반응형 디자인이 미리 구성된 프로덕션 레디 프로젝트입니다.

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
├── date-utils.ts            # 날짜 관련 유틸
└── constants.ts             # 상수 중앙 관리 (라우트, 네비게이션 등)

store/                        # Zustand 상태 관리
└── use-example-store.ts     # 예제 카운터 스토어

types/                        # 전역 타입 정의
├── index.ts                 # NavItem, SiteConfig, Feature 등

.claude/                      # Claude Code 설정
├── agents/                  # 커스텀 에이전트
├── commands/                # 커스텀 커맨드
├── hooks/                   # 자동화 훅 (SessionStart, PostToolUse, Stop)
├── settings.local.json      # Claude Code 로컬 설정
└── .env                     # Claude Code 환경변수 (Slack webhook 등)

apps/                         # 추가 앱 디렉토리
├── api/
│   └── .env.example         # API 환경변수 템플릿
└── web/
    └── .env.local           # Next.js 앱 환경변수
```

### 기술 스택

**핵심 프레임워크:**

- Next.js 16.1.1 (App Router, Server Components)
- React 19.2.3
- TypeScript 5 (strict 모드)

**스타일링:**

- Tailwind CSS 4
- shadcn/ui (Radix UI 기반)
- class-variance-authority (CVA) - 컴포넌트 변형 관리

**폼 및 검증:**

- React Hook Form 7.70.0 - 폼 상태 관리
- Zod 4.3.5 - 런타임 타입 검증

**상태 관리:**

- Zustand - 가볍고 유연한 상태 관리

**기타:**

- next-themes 0.4.6 - 다크모드/라이트모드 지원
- date-fns 4.1.0 - 날짜 포맷팅 (한국어 로케일 지원)
- lucide-react 0.562.0 - SVG 아이콘
- usehooks-ts 3.1.1 - 커스텀 React 훅
- tw-animate-css 1.4.0 - Tailwind CSS 애니메이션 유틸리티

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

**Tailwind CSS 4:** 별도의 `tailwind.config` 파일이 없습니다. 대신 `app/globals.css`에서 다음 방식으로 설정됩니다:

```css
@import "tailwindcss";

@theme {
  /* CSS 변수 정의 (oklch 색상 공간 사용) */
}
```

반응형 디자인을 위해 Tailwind의 반응형 프리픽스(`sm:`, `md:`, `lg:` 등)와 유틸리티를 사용합니다. `components.json`에서 `new-york` 스타일, `neutral` 기본색, RSC 활성화로 설정됩니다.

**shadcn/ui 설정:**

- Style: `new-york` (모던 디자인 스타일)
- Base Color: `neutral` (회색 기반 테마)
- CSS Variables: 활성화 (라이트/다크 모드 CSS 변수 사용)
- Icon Library: `lucide`
- Components 14개 설치됨: button, input, form, select, dialog, checkbox, 등

## Claude Code 특화 기능

### .claude/ 디렉토리

프로젝트 루트의 `.claude/` 디렉토리에는 Claude Code 특화 설정이 포함됩니다.

#### 커스텀 에이전트

- **code-reviewer**: `/agent code-reviewer` 명령으로 전문 코드 리뷰 수행
  - 8가지 검토 항목: 타입 안전성, 아키텍처, 스타일링, 폼/검증, 상태관리, 코딩규칙, 성능, 접근성
  - 출력: ✅ 잘한 점, ⚠️ 개선 필요, 🔧 제안 코드, 📋 종합 평가

#### 커스텀 커맨드

- **/commit**: 컨벤셔널 커밋 형식으로 한글 커밋 메시지 자동 생성
  - 형식: `{타입}({영역}): {제목}`
  - 본문: 하이픈(`-`) 리스트 형식의 변경사항
  - 예: `feat(form): 사용자 등록 폼 추가\n\n- React Hook Form + Zod 검증 구현\n- 접근성 속성 추가`

#### 자동화 훅

- **SessionStart**: `.claude/.env` 파일의 환경변수 자동 로드 (Slack webhook 등)
- **PostToolUse (Edit|Write)**: 파일 저장 시 Prettier + ESLint 자동 실행
  - 지원 확장자: `.ts`, `.tsx`, `.js`, `.jsx`, `.json`, `.md`, `.mdx`
- **PermissionRequest**: 권한 요청 시 Slack 알림 (선택사항)
- **Stop**: 작업 완료 시 Slack 알림 (선택사항)

### MCP 서버

프로젝트에서 다음 MCP 서버를 활용할 수 있습니다:

- **playwright**: 브라우저 자동화 및 E2E 테스트 스크립트 작성
- **context7**: 최신 라이브러리 문서 및 코드 예제 검색 (React, Next.js, TypeScript 등)
- **sequential-thinking**: 복잡한 문제를 단계별로 사고하여 문제 해결

### 환경 변수 관리

- `.claude/.env`: Claude Code 전용 환경변수 (SLACK_WEBHOOK_URL, SLACK_CHANNEL 등)
- `apps/web/.env.local`: Next.js 앱 환경변수 (DB 연결 등)
- `apps/api/.env.example`: API 환경변수 템플릿

SessionStart 훅이 자동으로 `.claude/.env` 파일을 로드합니다.

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

### CVA 변형 컴포넌트 패턴

재사용 가능한 컴포넌트의 변형(variant)을 타입 안전하게 관리합니다. 실제 사용 예는 `components/ui/button.tsx` 참조:

```typescript
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  // 기본 클래스
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border bg-background hover:bg-accent"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, size })} {...props} />
}
```

**핵심 포인트:**

- CVA로 클래스 조합 관리 (유지보수성 높음)
- `VariantProps`로 타입 안전성 확보
- `defaultVariants`로 기본값 정의

### 폼 구현 패턴

React Hook Form + Zod를 사용합니다. 실제 예제는 `components/examples/form-demo.tsx` 참조:

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

export function MyForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' }
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // API 호출 또는 처리
      console.log(data)
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : '알 수 없는 오류'
      console.error(message)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input
        id="email"
        {...form.register('email')}
        aria-invalid={!!form.formState.errors.email}
        aria-describedby={form.formState.errors.email ? 'email-error' : undefined}
        disabled={form.formState.isSubmitting}
      />
      {form.formState.errors.email && (
        <p id="email-error" className="text-sm text-red-500" role="alert">
          {form.formState.errors.email.message}
        </p>
      )}
    </form>
  )
}
```

**필수 접근성 규칙:**

- 입력 필드: `aria-invalid={!!errors.field}` (에러 상태 표시)
- 에러 메시지: `aria-describedby` (필드와 연결)
- 에러 메시지: `role="alert"` (화면 리더 즉시 알림)
- 폼 제출 중: `disabled={isSubmitting}` (중복 제출 방지)

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

### 에러 처리 패턴

타입 안전한 에러 처리를 위해 `unknown` 타입 사용 후 타입 가드:

```typescript
try {
  // 비동기 작업 또는 throw가 가능한 코드
  await apiCall();
} catch (error: unknown) {
  // 타입 좁혀서 Error 타입인지 확인
  const message =
    error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다";

  console.error(message);
  setErrorMessage(message);
}
```

**규칙:**

- `error: any` 사용 금지 (타입 안전성 위반)
- `error: Error` 단일 타입 사용 금지 (throw할 수 있는 모든 값을 처리할 수 없음)
- 항상 `error: unknown`으로 받고 타입 가드 사용

### 상수 관리 패턴

타입 안전한 상수 정의를 위해 `as const` 활용합니다. `lib/constants.ts` 참조:

```typescript
// 라우트 상수
export const ROUTES = {
  HOME: "/",
  EXAMPLES: "/examples",
  FORMS: "/forms",
  ABOUT: "/about",
} as const;

// 네비게이션 상수 (readonly 배열 + as const)
export const NAV_ITEMS: readonly NavItem[] = [
  { href: ROUTES.HOME, label: "홈" },
  { href: ROUTES.EXAMPLES, label: "예제" },
  { href: ROUTES.FORMS, label: "폼" },
] as const;

// 타입 정의
export type Route = (typeof ROUTES)[keyof typeof ROUTES];
export type SubmitStatus = "idle" | "loading" | "success" | "error";
```

**장점:**

- `as const`로 불변성 보장
- 타입 추론으로 자동완성 지원
- 문자열 오타 방지
- 중앙 집중식 관리로 유지보수성 향상

### 전역 상태 관리

Zustand 스토어를 작성하고 필요한 컴포넌트에서 훅으로 사용합니다:

```typescript
// store/my-store.ts
import { create } from "zustand";

export const useMyStore = create<MyState>((set) => ({
  // 상태 및 액션 정의
}));

// 컴포넌트에서
const state = useMyStore();
```

## 코딩 규칙

- **들여쓰기:** 2칸 (자동 포맷팅: Prettier)
- **컴포넌트 이름:** PascalCase (`UserProfile`, `FormInput`)
- **변수/함수 이름:** camelCase (`userName`, `getUserData`)
- **상수 이름:** UPPER_SNAKE_CASE 또는 camelCase with `as const`

  ```typescript
  export const API_BASE_URL = "https://api.example.com"; // 또는
  export const apiConfig = { baseUrl: "..." } as const;
  ```

- **any 타입 금지:** 모든 타입을 명시적으로 지정

  ```typescript
  // ❌ 잘못됨
  function process(data: any) {}

  // ✅ 올바름
  function process(data: unknown) {}
  interface User {
    name: string;
  }
  function process(data: User) {}
  ```

- **에러 처리:** `unknown` 타입 사용 + 타입 가드 필수

  ```typescript
  try {
    // ...
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "오류";
  }
  ```

- **CVA 패턴:** 컴포넌트 변형에 `class-variance-authority` 사용
- **접근성:** ARIA 속성 필수 (`aria-invalid`, `aria-describedby`, `role="alert"` 등)
- **Server Component 우선:** 필요한 경우만 `'use client'` 지시어 사용
- **주석/문서:** 한국어로 작성

## 반응형 디자인

Tailwind의 반응형 프리픽스를 활용합니다:

```typescript
className = "w-full md:w-1/2 lg:w-1/3";
```

`globals.css`에 기본 스타일이 정의되어 있습니다.

## 주요 코드 참조

실제 프로젝트 코드를 참고하여 패턴을 학습합니다.

### UI 컴포넌트 & 스타일링

- **`components/ui/button.tsx`** - CVA 변형 패턴, TypeScript 제네릭
- **`components/layout/header.tsx`** - 반응형 네비게이션, 접근성 속성
- **`components/landing/hero-section.tsx`** - Tailwind CSS 4 반응형 레이아웃
- **`app/globals.css`** - Tailwind CSS 4 설정 (@import, @theme)

### 폼 & 검증

- **`components/examples/form-demo.tsx`** - React Hook Form + Zod + 접근성 완전한 예제
- **`lib/validations.ts`** - Zod 검증 스키마 (한글 에러 메시지)

### 유틸리티 & 상수

- **`lib/constants.ts`** - 상수 중앙 관리 (`as const` 패턴)
- **`lib/utils.ts`** - `cn()` 클래스명 병합 함수
- **`lib/date-utils.ts`** - date-fns + 한국어 로케일

### 상태 관리

- **`store/use-example-store.ts`** - Zustand 표준 패턴 (타입 안전성)

### 예제 페이지

- **`app/examples/components/page.tsx`** - UI 컴포넌트 쇼케이스
- **`app/examples/forms/page.tsx`** - 폼 구현 전체 패턴
- **`app/examples/hooks/page.tsx`** - 커스텀 훅 예제 (useDebounce, useLocalStorage 등)

### 타입 정의

- **`types/index.ts`** - `NavItem`, `SiteConfig`, `Feature` 등 전역 타입
