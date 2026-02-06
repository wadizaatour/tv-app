export interface IShow {
  id: number
  name: string
  genres: string[]
  rating: { average: number | null }
  image: { medium: string; original: string } | null
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
