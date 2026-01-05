import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

/**
 * 히어로 섹션 컴포넌트
 * 랜딩 페이지 상단의 주요 메시지 및 CTA
 */
export function HeroSection({ title, subtitle, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section className="relative w-full py-20 sm:py-32 lg:py-40">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#ff80b5] to-[#7c3aed] opacity-20 sm:w-[72.1875rem]" />
        </div>
      </div>

      <Container>
        <div className="flex flex-col items-center text-center gap-8">
          {/* 제목 */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* 부제목 */}
          <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-8">
            {subtitle}
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={primaryCta.href}>
              <Button size="lg" className="w-full sm:w-auto">
                {primaryCta.text}
              </Button>
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
