import { computed } from 'vue'
import { getGenres, type IShow } from '@/services/api'

export function useGenres(shows: () => IShow[]) {
  const genres = computed(() => getGenres(shows()))

  const showsByGenre = computed(() => {
    const grouped: Record<string, IShow[]> = {}

    // Flatten genres into tv show once
    const tvShow: { genre: string; show: IShow }[] = []
    shows().forEach((show) => {
      show.genres.forEach((genre) => {
        tvShow.push({ genre, show })
      })
    })

    // Single loop to group
    tvShow.forEach(({ genre, show }) => {
      if (!grouped[genre]) {
        grouped[genre] = []
      }
      grouped[genre].push(show)
    })

    // Sort each group by rating descending
    for (const genre in grouped) {
      grouped[genre]?.sort((a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0))
    }

    return grouped
  })

  return { genres, showsByGenre }
}
