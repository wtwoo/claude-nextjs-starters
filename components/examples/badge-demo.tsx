import { Badge } from '@/components/ui/badge'

/**
 * Badge 컴포넌트 데모
 * 다양한 variants를 보여줍니다
 */
export function BadgeDemo() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>

      {/* 사용 예시: 상태 표시 */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">상태 표시</h3>
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-green-500 hover:bg-green-600">활성</Badge>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">대기중</Badge>
          <Badge variant="destructive">비활성</Badge>
        </div>
      </div>

      {/* 사용 예시: 카테고리 */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">카테고리</h3>
        <div className="flex flex-wrap gap-3">
          <Badge>TypeScript</Badge>
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>shadcn/ui</Badge>
        </div>
      </div>

      {/* 사용 예시: 카운트/수량 */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">카운트</h3>
        <div className="flex flex-wrap gap-3">
          <Badge>8개 설치됨</Badge>
          <Badge variant="secondary">15개 대기</Badge>
          <Badge variant="outline">0개 실패</Badge>
        </div>
      </div>
    </div>
  )
}
