'use client'

import { useMediaQuery } from 'usehooks-ts'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * useMediaQuery 훅 데모
 * 반응형 미디어 쿼리를 활용한 예제
 */
export function UseMediaQueryDemo() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1025px)')

  const currentBreakpoint = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'

  return (
    <Card>
      <CardHeader>
        <CardTitle>useMediaQuery</CardTitle>
        <CardDescription>
          반응형 미디어 쿼리를 활용한 예제
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 현재 브레이크포인트 */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">현재 화면 크기</p>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold">{currentBreakpoint}</p>
            <Badge variant="outline">{isMobile ? 'sm' : isTablet ? 'md~lg' : 'xl+'}</Badge>
          </div>
        </div>

        {/* 각 브레이크포인트 상태 */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-muted rounded-lg text-center">
            <p className="text-xs text-muted-foreground mb-1">Mobile</p>
            <Badge variant={isMobile ? 'default' : 'secondary'} className="w-full justify-center">
              {isMobile ? '✓' : '-'}
            </Badge>
          </div>
          <div className="p-3 bg-muted rounded-lg text-center">
            <p className="text-xs text-muted-foreground mb-1">Tablet</p>
            <Badge variant={isTablet ? 'default' : 'secondary'} className="w-full justify-center">
              {isTablet ? '✓' : '-'}
            </Badge>
          </div>
          <div className="p-3 bg-muted rounded-lg text-center">
            <p className="text-xs text-muted-foreground mb-1">Desktop</p>
            <Badge variant={isDesktop ? 'default' : 'secondary'} className="w-full justify-center">
              {isDesktop ? '✓' : '-'}
            </Badge>
          </div>
        </div>

        {/* 설명 */}
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p className="text-sm font-semibold">📱 반응형 디자인</p>
          <p className="text-sm text-muted-foreground">
            화면 크기를 변경하면 실시간으로 현재 브레이크포인트가 업데이트됩니다.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
