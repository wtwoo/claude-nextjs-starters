import { Card, CardContent } from '@/components/ui/card'

/**
 * Flexbox 레이아웃 데모
 * 다양한 Flexbox 패턴 예제
 */
export function LayoutFlexDemo() {
  return (
    <div className="space-y-8">
      {/* Space Between */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">justify-between (양끝 정렬)</h3>
        <div className="flex justify-between gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex-1 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-semibold"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* Center */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">justify-center (중앙 정렬)</h3>
        <div className="flex justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-semibold"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* Column */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">flex-col (세로 정렬)</h3>
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-semibold"
            >
              Item {i}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Column */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">반응형 Flex (md에서 가로로 변경)</h3>
        <div className="flex flex-col md:flex-row gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold"
            >
              Item {i}
            </div>
          ))}
        </div>
      </div>

      {/* Wrap */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">flex-wrap (자동 줄바꿈)</h3>
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
            <div
              key={i}
              className="w-24 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm"
            >
              Item {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
