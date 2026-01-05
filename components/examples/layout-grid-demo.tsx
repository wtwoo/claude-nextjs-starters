import { Card, CardContent } from '@/components/ui/card'

/**
 * 그리드 레이아웃 데모
 * 반응형 그리드 레이아웃 (1→2→3열) 예제
 */
export function LayoutGridDemo() {
  const items = Array.from({ length: 6 }, (_, i) => i + 1)

  return (
    <div className="space-y-6">
      {/* 설명 */}
      <div>
        <h3 className="font-semibold mb-2">반응형 그리드 (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)</h3>
        <p className="text-sm text-muted-foreground">
          화면 크기에 따라 1열 → 2열 → 3열로 변환됩니다
        </p>
      </div>

      {/* 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card key={item} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                Item {item}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
