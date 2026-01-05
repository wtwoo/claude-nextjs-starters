import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { Separator } from '@/components/ui/separator'
import { LayoutGridDemo } from '@/components/examples/layout-grid-demo'
import { LayoutFlexDemo } from '@/components/examples/layout-flex-demo'

/**
 * 레이아웃 예제 페이지
 * Grid, Flexbox 등 다양한 레이아웃 패턴 예제
 */
export default function LayoutsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <Container>
          {/* 페이지 제목 */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">레이아웃 예제</h1>
            <p className="text-lg text-muted-foreground">
              Grid, Flexbox 등 Tailwind CSS를 활용한 다양한 레이아웃 패턴
            </p>
          </div>

          {/* 예제들 */}
          <div className="space-y-12">
            {/* Grid 레이아웃 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Grid 레이아웃</h2>
              <LayoutGridDemo />
            </section>

            <Separator />

            {/* Flexbox 레이아웃 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Flexbox 레이아웃</h2>
              <LayoutFlexDemo />
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
