/**
 * 애플리케이션 전역 상수
 */

/**
 * 라우트 경로 상수
 */
export const ROUTES = {
  HOME: '/',
  EXAMPLES: '/examples',
  FORMS: '/forms'
} as const

/**
 * 네비게이션 아이템 타입
 */
export type NavItem = {
  href: string
  label: string
}

/**
 * 네비게이션 아이템 목록
 */
export const NAV_ITEMS: readonly NavItem[] = [
  { href: ROUTES.HOME, label: '홈' },
  { href: ROUTES.EXAMPLES, label: '예제' },
  { href: ROUTES.FORMS, label: '폼' }
] as const

/**
 * 폼 제출 상태 타입
 */
export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'
