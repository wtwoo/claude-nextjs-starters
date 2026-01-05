'use client'

import { useTheme } from 'next-themes'
import { useIsClient } from 'usehooks-ts'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * 다크모드 토글 버튼 컴포넌트
 * next-themes와 usehooks-ts를 사용하여 SSR 안전하게 구현
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isClient = useIsClient()

  // SSR 중에는 렌더링하지 않음 (하이드레이션 오류 방지)
  if (!isClient) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="테마 토글"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
