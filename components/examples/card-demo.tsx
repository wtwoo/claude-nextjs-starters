import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

/**
 * Card 컴포넌트 데모
 * 다양한 카드 레이아웃을 보여줍니다
 */
export function CardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 기본 카드 */}
      <Card>
        <CardHeader>
          <CardTitle>기본 카드</CardTitle>
          <CardDescription>shadcn/ui Card 컴포넌트</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            기본적인 카드 컴포넌트로, Header, Title, Description, Content를 포함합니다.
          </p>
        </CardContent>
      </Card>

      {/* CTA 포함 카드 */}
      <Card>
        <CardHeader>
          <CardTitle>액션 카드</CardTitle>
          <CardDescription>버튼 포함</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            카드 내에 버튼을 포함하여 사용자 액션을 유도할 수 있습니다.
          </p>
          <div className="flex gap-2">
            <Button size="sm">액션</Button>
            <Button size="sm" variant="outline">
              취소
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 다중 섹션 카드 */}
      <Card>
        <CardHeader>
          <CardTitle>정보 카드</CardTitle>
          <CardDescription>여러 정보를 표시</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">라이브러리</p>
              <p className="font-semibold">Next.js 15</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">프레임워크</p>
              <p className="font-semibold">React 19</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 이미지 포함 카드 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>기능 카드</CardTitle>
          <CardDescription>아이콘이나 배경 포함</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg" />
          <p className="text-sm text-muted-foreground">
            시각적 요소를 추가하여 더 매력적인 카드 구성이 가능합니다.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
