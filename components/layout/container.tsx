import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * 콘텐츠 컨테이너 래퍼 컴포넌트
 * 최대 너비 제한과 반응형 패딩 적용
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
