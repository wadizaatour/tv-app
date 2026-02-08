export interface IShow {
  id: number
  name: string
  language: string
  genres: string[]
  status: string
  premiered: string | null
  ended?: string | null
  runtime?: number | null
  averageRuntime?: number | null
  rating?: {
    average: number | null
  }
  image?: {
    medium?: string
    original?: string
  }
  summary?: string
  officialSite?: string | null
  network?: {
    id: number
    name: string
    country?: {
      name: string
      code: string
      timezone: string
    }
  }
  externals?: {
    tvrage?: number
    thetvdb?: number
    imdb?: string
  }
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
