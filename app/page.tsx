import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/landing/hero-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { CtaSection } from '@/components/landing/cta-section'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <HeroSection
          title="Next.js 15 모던 스타터킷"
          subtitle="검증된 라이브러리와 컴포넌트로 빠르게 웹 개발을 시작하세요. 다크모드, 반응형, 타입 안전성까지 모두 준비됨."
          primaryCta={{ text: '예제 보기', href: '/examples' }}
          secondaryCta={{ text: 'GitHub', href: 'https://github.com' }}
        />

        {/* 기능 소개 섹션 */}
        <FeaturesSection />

        {/* CTA 섹션 */}
        <CtaSection
          title="지금 바로 시작해보세요"
          description="프로덕션 레디 스타터킷으로 개발 시간을 단축하고, 검증된 기술 스택으로 안정적인 프로젝트를 구축하세요."
          buttonText="예제 탐색"
          buttonHref="/examples"
        />
      </main>

      <Footer />
    </div>
  )
}
