import { create } from 'zustand'

interface ExampleStore {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

/**
 * 예제 카운터 스토어
 * 전역 상태 관리 패턴 데모용
 */
export const useExampleStore = create<ExampleStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}))
