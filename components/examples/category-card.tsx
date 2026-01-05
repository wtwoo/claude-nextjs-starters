import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ExampleCategory } from '@/types'

/**
 * 예제 카테고리 카드 컴포넌트
 * 각 카테고리를 클릭 가능한 카드로 표시
 */
export function CategoryCard({ category }: { category: ExampleCategory }) {
  const Icon = category.icon

  return (
    <Link href={category.href} className="block group">
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader className="space-y-4">
          {/* 아이콘 */}
          <div className="p-3 bg-primary/10 rounded-lg w-fit">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          {/* 제목과 설명 */}
          <div className="space-y-2">
            <CardTitle className="group-hover:text-primary transition-colors">
              {category.title}
            </CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* 태그 */}
          <div className="flex flex-wrap gap-2">
            {category.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* 버튼 */}
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            예제 보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
