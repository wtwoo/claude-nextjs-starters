'use client'

import { useState, useEffect, useCallback } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * useDebounce 훅 데모
 * 디바운싱을 활용한 검색 입력 예제
 */
export function UseDebounceDemo() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [isMounted, setIsMounted] = useState(false)

  // 초기 마운트 설정
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 디바운스 효과 구현
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const sampleResults = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Zod', 'shadcn/ui']
  const filteredResults = sampleResults.filter((item) =>
    item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>useDebounce</CardTitle>
        <CardDescription>
          디바운싱을 활용한 검색 입력 예제
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 검색 입력 */}
        <div className="space-y-2">
          <label className="text-sm font-medium">검색</label>
          <Input
            placeholder="React, TypeScript 등을 검색해보세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 상태 표시 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">입력값 (즉시)</p>
            <Badge variant="outline" className="w-full justify-center">{searchTerm || '입력 중...'}</Badge>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">디바운스 값 (500ms)</p>
            <Badge variant="secondary" className="w-full justify-center">
              {debouncedSearchTerm || '대기 중...'}
            </Badge>
          </div>
        </div>

        {/* 검색 결과 */}
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm font-semibold">검색 결과 ({filteredResults.length})</p>
          </div>
          <div className="space-y-2">
            {filteredResults.length > 0 ? (
              filteredResults.map((result) => (
                <div
                  key={result}
                  className="p-2 bg-muted rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <p className="text-sm">{result}</p>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">
                "{debouncedSearchTerm}"에 해당하는 결과가 없습니다
              </div>
            )}
          </div>
        </div>

        {/* 설명 */}
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p className="text-sm font-semibold">⏱️ 디바운싱</p>
          <p className="text-sm text-muted-foreground">
            입력값이 변경된 후 500ms 동안 입력이 없을 때만 검색이 실행됩니다. 불필요한 API 호출을 줄일 수 있습니다.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
