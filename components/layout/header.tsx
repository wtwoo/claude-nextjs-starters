'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from './container'
import { ThemeToggle } from './theme-toggle'

/**
 * 헤더 네비게이션 컴포넌트
 * 로고, 네비게이션 메뉴, 테마 토글, 모바일 메뉴 포함
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: '홈' },
    { href: '/examples', label: '예제' },
    { href: '/forms', label: '폼' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">🚀 Next Starter</span>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 오른쪽: 테마 토글 + 모바일 메뉴 버튼 */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* 모바일 메뉴 버튼 */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 토글"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* 모바일 네비게이션 메뉴 */}
        {isMenuOpen && (
          <div className="border-t md:hidden">
            <div className="space-y-2 px-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium transition-colors hover:bg-muted rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
