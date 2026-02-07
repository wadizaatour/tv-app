// src/composables/useGenres.ts
import { computed } from 'vue'
import { getGenres, type IShow } from '@/services/api'

export function useGenres(shows: () => IShow[]) {
  const genres = computed(() => getGenres(shows()))

  const showsByGenre = computed(() => {
    const grouped: Record<string, IShow[]> = {}
    shows().forEach((show) => {
      show.genres.forEach((genre) => {
        if (!grouped[genre]) grouped[genre] = []
        grouped[genre].push(show)
      })
    })
    Object.keys(grouped).forEach((genre) => {
      grouped[genre]?.sort((a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0))
    })
    return grouped
  })

  return { genres, showsByGenre }
}
