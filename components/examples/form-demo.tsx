'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { type SubmitStatus } from '@/lib/constants'

/**
 * 폼 데모 컴포넌트
 * React Hook Form + Zod를 사용한 폼 검증 및 제출
 */
export function FormDemo() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('loading')
      setErrorMessage('')

      // 실제로는 API 호출을 여기서 수행
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('폼 데이터:', data)
      setSubmitStatus('success')
      reset()

      // 3초 후 상태 초기화
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error: unknown) {
      const message = error instanceof Error
        ? error.message
        : '알 수 없는 오류가 발생했습니다'

      setErrorMessage(message)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* 성공 메시지 */}
      {submitStatus === 'success' && (
        <Alert className="border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200">
          <AlertDescription>
            ✅ 폼이 성공적으로 제출되었습니다!
          </AlertDescription>
        </Alert>
      )}

      {/* 오류 메시지 */}
      {submitStatus === 'error' && (
        <Alert
          className="border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"
          role="alert"
        >
          <AlertDescription>
            ❌ {errorMessage || '오류가 발생했습니다. 다시 시도해주세요.'}
          </AlertDescription>
        </Alert>
      )}

      {/* 이름 필드 */}
      <div className="space-y-2">
        <Label htmlFor="name">이름 *</Label>
        <Input
          id="name"
          placeholder="홍길동"
          {...register('name')}
          className={errors.name ? 'border-red-500' : ''}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p
            id="name-error"
            className="text-sm text-red-500"
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      {/* 이메일 필드 */}
      <div className="space-y-2">
        <Label htmlFor="email">이메일 *</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@example.com"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-sm text-red-500"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* 메시지 필드 */}
      <div className="space-y-2">
        <Label htmlFor="message">메시지 *</Label>
        <Textarea
          id="message"
          placeholder="메시지를 입력해주세요..."
          rows={4}
          {...register('message')}
          className={errors.message ? 'border-red-500' : ''}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-sm text-red-500"
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {/* 구독 체크박스 */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="subscribe"
          {...register('subscribe')}
          disabled={isSubmitting}
        />
        <Label htmlFor="subscribe" className="font-normal cursor-pointer">
          뉴스레터 구독하기
        </Label>
      </div>

      {/* 제출 버튼 */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? '제출 중...' : '제출하기'}
      </Button>
    </form>
  )
}
