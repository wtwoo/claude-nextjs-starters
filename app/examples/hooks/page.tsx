import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { Separator } from '@/components/ui/separator'
import { UseLocalStorageDemo } from '@/components/examples/hooks/use-local-storage-demo'
import { UseMediaQueryDemo } from '@/components/examples/hooks/use-media-query-demo'
import { UseDebounceDemo } from '@/components/examples/hooks/use-debounce-demo'

/**
 * usehooks-ts 예제 페이지
 * 실용적인 커스텀 훅 사용 예제
 */
export default function HooksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <Container>
          {/* 페이지 제목 */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">usehooks-ts</h1>
            <p className="text-lg text-muted-foreground">
              실용적인 React 커스텀 훅들을 활용한 예제 모음
            </p>
          </div>

          {/* 예제들 */}
          <div className="space-y-12">
            {/* useLocalStorage 데모 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">useLocalStorage</h2>
              <UseLocalStorageDemo />
            </section>

            <Separator />

            {/* useMediaQuery 데모 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">useMediaQuery</h2>
              <UseMediaQueryDemo />
            </section>

            <Separator />

            {/* useDebounce 데모 */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">useDebounce</h2>
              <UseDebounceDemo />
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
