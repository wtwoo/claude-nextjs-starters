import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { Separator } from '@/components/ui/separator'
import { ButtonDemo } from '@/components/examples/button-demo'
import { CardDemo } from '@/components/examples/card-demo'
import { BadgeDemo } from '@/components/examples/badge-demo'

/**
 * 컴포넌트 쇼케이스 페이지
 * shadcn/ui 컴포넌트들의 다양한 사용 예제
 */
export default function ComponentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <Container>
          {/* 페이지 제목 */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">컴포넌트 쇼케이스</h1>
            <p className="text-lg text-muted-foreground">
              shadcn/ui 기반 컴포넌트들의 다양한 스타일과 인터랙션 예제입니다
            </p>
          </div>

          {/* 예제들 */}
          <div className="space-y-12">
            {/* Button 데모 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Button</h2>
              <ButtonDemo />
            </section>

            <Separator />

            {/* Card 데모 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Card</h2>
              <CardDemo />
            </section>

            <Separator />

            {/* Badge 데모 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Badge</h2>
              <BadgeDemo />
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
