import { describe, it, expect } from 'vitest'
import { useGenres } from '@/composables/useGenres'
import { ref } from 'vue'

describe('useGenres composable', () => {
  it('should return an empty object when there are no shows', () => {
    const shows = ref([] as any)
    const { genres, showsByGenre } = useGenres(() => shows.value)

    expect(genres.value).toEqual([])
    expect(showsByGenre.value).toEqual({})
  })

  it('should group shows under their genres', () => {
    const shows = ref([
      { id: 1, name: 'Show A', genres: ['Drama'], rating: { average: 8 } },
      { id: 2, name: 'Show B', genres: ['Drama', 'Comedy'], rating: { average: 9 } },
      { id: 3, name: 'Show C', genres: ['Comedy'], rating: { average: 7 } },
    ] as any)

    const { genres, showsByGenre } = useGenres(() => shows.value)

    expect(genres.value).toContain('Drama')
    expect(genres.value).toContain('Comedy')

    expect(showsByGenre.value['Drama']).toBeDefined()
    expect(showsByGenre.value['Comedy']).toBeDefined()

    expect(showsByGenre.value['Drama']?.length).toBe(2)
    expect(showsByGenre.value['Comedy']?.length).toBe(2)
  })

  it('should sort shows within each genre by rating (highest first)', () => {
    const shows = ref([
      { id: 1, name: 'Show A', genres: ['Drama'], rating: { average: 8 } },
      { id: 2, name: 'Show B', genres: ['Drama'], rating: { average: 9 } },
    ] as any)

    const { showsByGenre } = useGenres(() => shows.value)

    expect(showsByGenre.value['Drama']).toBeDefined()
    const dramaShows = showsByGenre.value['Drama'] ?? []

    expect(dramaShows[0]?.id).toBe(2)
    expect(dramaShows[1]?.id).toBe(1)
  })

  it('should include a show in multiple genres if applicable', () => {
    const shows = ref([
      { id: 1, name: 'Show A', genres: ['Drama', 'Comedy'], rating: { average: 8 } },
    ] as any)

    const { showsByGenre } = useGenres(() => shows.value)

    expect(showsByGenre.value['Drama']).toBeDefined()
    expect(showsByGenre.value['Comedy']).toBeDefined()

    expect(showsByGenre.value['Drama']?.[0]?.id).toBe(1)
    expect(showsByGenre.value['Comedy']?.[0]?.id).toBe(1)
  })
})
