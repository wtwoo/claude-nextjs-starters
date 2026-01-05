'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { FormDemo } from '@/components/examples/form-demo'

/**
 * 폼 예제 페이지
 * React Hook Form + Zod 통합 예제
 */
export default function FormsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <Container>
          {/* 페이지 제목 */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">폼 예제</h1>
            <p className="text-lg text-muted-foreground">
              React Hook Form + Zod를 사용한 검증 및 제출 처리 예제
            </p>
          </div>

          {/* 폼 데모 */}
          <div className="max-w-md">
            <FormDemo />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
