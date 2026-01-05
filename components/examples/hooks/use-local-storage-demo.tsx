'use client'

import { useLocalStorage } from 'usehooks-ts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * useLocalStorage 훅 데모
 * 로컬 스토리지를 활용한 상태 관리 예제
 */
export function UseLocalStorageDemo() {
  const [count, setCount] = useLocalStorage('demo-count', 0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => Math.max(0, prev - 1))
  const reset = () => setCount(0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>useLocalStorage</CardTitle>
        <CardDescription>
          로컬 스토리지를 활용한 상태 관리
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 카운트 표시 */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">현재 카운트</p>
          <p className="text-4xl font-bold text-primary">{count}</p>
        </div>

        {/* 버튼들 */}
        <div className="flex gap-2">
          <Button onClick={decrement} variant="outline" className="flex-1">
            -
          </Button>
          <Button onClick={increment} className="flex-1">
            +
          </Button>
          <Button onClick={reset} variant="secondary" className="flex-1">
            리셋
          </Button>
        </div>

        {/* 설명 */}
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p className="text-sm font-semibold">💾 자동 저장</p>
          <p className="text-sm text-muted-foreground">
            값을 변경하면 자동으로 localStorage에 저장됩니다. 페이지를 새로고침해도 값이 유지됩니다.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
