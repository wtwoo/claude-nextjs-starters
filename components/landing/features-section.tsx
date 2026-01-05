import { Code2, Palette, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/layout/container'
import type { Feature } from '@/types'

/**
 * 기능 소개 섹션 컴포넌트
 * 3컬럼 그리드로 주요 기능 소개
 */
export function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: Zap,
      title: '빠른 개발',
      description: 'Next.js 15와 shadcn/ui로 즉시 프로젝트 시작'
    },
    {
      icon: Palette,
      title: '모던 디자인',
      description: 'Tailwind CSS v4와 다크모드 기본 지원'
    },
    {
      icon: Code2,
      title: '타입 안전',
      description: 'TypeScript strict 모드 + Zod 검증'
    }
  ]

  return (
    <section className="w-full py-20 sm:py-32 bg-muted/30">
      <Container>
        <div className="flex flex-col items-center text-center gap-12">
          {/* 섹션 제목 */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              강력한 기능들
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              검증된 라이브러리와 모범 사례로 만든 스타터킷
            </p>
          </div>

          {/* 기능 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="flex flex-col items-start gap-4 p-6 hover:shadow-lg transition-shadow">
                  {/* 아이콘 */}
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* 텍스트 */}
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
