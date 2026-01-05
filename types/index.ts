import { LucideIcon } from 'lucide-react'

/**
 * 네비게이션 아이템 타입
 */
export interface NavItem {
  title: string
  href: string
  description?: string
  icon?: LucideIcon
  external?: boolean
}

/**
 * 사이트 설정 타입
 */
export interface SiteConfig {
  name: string
  description: string
  url: string
  links: {
    github?: string
    twitter?: string
  }
}

/**
 * 피처 타입 (랜딩 페이지용)
 */
export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

/**
 * 예제 카테고리 타입
 */
export interface ExampleCategory {
  title: string
  description: string
  icon: LucideIcon
  href: string
  tags: string[]
}
