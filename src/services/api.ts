export interface IShow {
  id: number
  name: string
  genres: string[]
  premiered: string | null
  rating: { average: number | null }
  image: { medium: string } | null
}

const BASE_API_URL = 'https://api.tvmaze.com'

export const fetchShows = async (): Promise<IShow[]> => {
  try {
    const response = await fetch(`${BASE_API_URL}/shows`)

    if (!response.ok) {
      throw new Error('Failed to fetch shows')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching shows:', error)
    return []
  }
}

export const getGenres = (shows: IShow[]): string[] => {
  const allGenres = shows.flatMap((show) => show.genres)
  return Array.from(new Set(allGenres)).sort()
}
