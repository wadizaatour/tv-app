// src/composables/useRecommendations.ts
import { computed } from 'vue'
import type { IShow } from '@/services/api'

export function useRecommendations(shows: () => IShow[]) {
  const bestRated = computed(() =>
    [...shows()]
      .filter((s) => s.rating?.average !== null)
      .sort((a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0)),
  )

  return { bestRated }
}
