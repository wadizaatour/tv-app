import { describe, it, expect } from 'vitest'
import { useGenres } from '@/composables/useGenres'
import { ref } from 'vue'
import type { IShow } from '@/services/api'

interface TestShow {
  id: number
  name: string
  genres: string[]
  rating: { average: number | null }
}

describe('useGenres composable to get shows by genre and sort by rating', () => {
  const createShow = (
    id: number,
    name: string,
    genres: string[],
    rating: number | null,
  ): TestShow => ({
    id,
    name,
    genres,
    rating: { average: rating },
  })

  it('should groups shows by genre', () => {
    const shows = ref<TestShow[]>([
      createShow(1, 'Drama Show', ['Drama'], 8),
      createShow(2, 'Comedy Drama', ['Comedy', 'Drama'], 9),
    ])

    const { genres, showsByGenre } = useGenres(() => shows.value as IShow[])

    expect(genres.value).toEqual(['Comedy', 'Drama'])
    expect(showsByGenre.value.Drama).toHaveLength(2)
    expect(showsByGenre.value.Comedy).toHaveLength(1)
  })

  it('should sorts by rating', () => {
    const shows = ref<TestShow[]>([
      createShow(1, 'Low Rated', ['Drama'], 6),
      createShow(2, 'High Rated', ['Drama'], 9),
    ])

    const { showsByGenre } = useGenres(() => shows.value as IShow[])

    const dramaShows = showsByGenre.value.Drama ?? []

    expect(dramaShows[0]?.id).toBe(2)
    expect(dramaShows[1]?.id).toBe(1)
  })
})
