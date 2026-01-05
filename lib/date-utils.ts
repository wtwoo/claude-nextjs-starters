import { format, formatDistance, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

/**
 * 날짜를 한국어 형식으로 포맷
 * @example formatDate('2024-01-01') => '2024년 1월 1일'
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? parseISO(date) : date
  return format(d, 'PPP', { locale: ko })
}

/**
 * 상대 시간 표시
 * @example formatRelative('2024-01-01') => '3일 전'
 */
export function formatRelative(date: string | Date): string {
  const d = typeof date === 'string' ? parseISO(date) : date
  return formatDistance(d, new Date(), { locale: ko, addSuffix: true })
}
