// src/composables/useGenres.ts
import { computed } from 'vue'
import { getGenres, type IShow } from '@/services/api'

export function useGenres(shows: () => IShow[]) {
  const genres = computed(() => getGenres(shows()))

  const showsByGenre = computed(() => {
    const grouped: Record<string, IShow[]> = {}

    // Flatten genres into pairs once
    const pairs: { genre: string; show: IShow }[] = []
    shows().forEach((show) => {
      show.genres.forEach((genre) => {
        pairs.push({ genre, show })
      })
    })

    // Single loop to group
    pairs.forEach(({ genre, show }) => {
      if (!grouped[genre]) {
        grouped[genre] = []
      }
      grouped[genre].push(show)
    })

    // Sort each group
    for (const genre in grouped) {
      grouped[genre]?.sort((a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0))
    }

    return grouped
  })

  return { genres, showsByGenre }
}
