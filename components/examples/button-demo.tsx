import { Button } from '@/components/ui/button'

/**
 * Button 컴포넌트 데모
 * 다양한 variants와 sizes를 보여줍니다
 */
export function ButtonDemo() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Sizes</h3>
        <div className="flex flex-wrap gap-2 items-center">
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">States</h3>
        <div className="flex flex-wrap gap-2">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline">Outlined</Button>
        </div>
      </div>
    </div>
  )
}
