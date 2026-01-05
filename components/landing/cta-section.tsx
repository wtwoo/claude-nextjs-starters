import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

interface CtaSectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

/**
 * CTA (Call To Action) 섹션 컴포넌트
 * 최종 액션 유도 섹션
 */
export function CtaSection({ title, description, buttonText, buttonHref }: CtaSectionProps) {
  return (
    <section className="w-full py-20 sm:py-32">
      <Container>
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-16 sm:px-12 sm:py-20 overflow-hidden">
          {/* 배경 패턴 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          </div>

          {/* 콘텐츠 */}
          <div className="relative flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h2>
            <p className="text-lg text-white/90 max-w-xl">
              {description}
            </p>
            <Link href={buttonHref}>
              <Button size="lg" variant="secondary" className="mt-4">
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
