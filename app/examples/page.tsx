import { Palette, FileCheck2, Layout, Webhook } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { CategoryCard } from '@/components/examples/category-card'
import type { ExampleCategory } from '@/types'

/**
 * 예제 모음 페이지
 * 다양한 카테고리의 예제 인덱스
 */
export default function ExamplesPage() {
  const categories: ExampleCategory[] = [
    {
      title: '컴포넌트 쇼케이스',
      description: 'shadcn/ui 기반 컴포넌트들의 다양한 스타일과 사용 예제를 확인하세요',
      icon: Palette,
      href: '/examples/components',
      tags: ['UI/UX', '인터랙션', '스타일링']
    },
    {
      title: '폼 예제',
      description: 'React Hook Form과 Zod를 활용한 폼 검증 및 상태 관리 예제',
      icon: FileCheck2,
      href: '/examples/forms',
      tags: ['검증', '상태관리', 'Zod']
    },
    {
      title: '레이아웃 예제',
      description: '반응형 그리드, Flexbox 등 다양한 레이아웃 패턴 예제',
      icon: Layout,
      href: '/examples/layouts',
      tags: ['반응형', '레이아웃', 'Grid']
    },
    {
      title: 'usehooks-ts',
      description: '실용적인 React 커스텀 훅들을 활용한 예제 모음',
      icon: Webhook,
      href: '/examples/hooks',
      tags: ['훅', '유틸리티', 'React']
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <Container>
          {/* 페이지 제목 */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">예제 모음</h1>
            <p className="text-lg text-muted-foreground">
              다양한 예제를 통해 프로젝트 구조와 패턴을 학습하세요
            </p>
          </div>

          {/* 카테고리 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.href} category={category} />
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
