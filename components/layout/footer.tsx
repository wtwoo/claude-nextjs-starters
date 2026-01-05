import Link from 'next/link'
import { Github } from 'lucide-react'
import { Container } from './container'

/**
 * 푸터 컴포넌트
 * 저작권 정보와 소셜 링크 포함
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          {/* 저작권 정보 */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Next.js 15 스타터킷</h3>
            <p className="text-sm text-muted-foreground">
              검증된 라이브러리로 빠르게 개발을 시작하세요
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* 소셜 링크 */}
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t mt-8 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            Built with Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
          </p>
        </div>
      </Container>
    </footer>
  )
}
