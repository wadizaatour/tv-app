// src/composables/useShows.ts
import { ref, onMounted } from 'vue'
import { fetchShows, type IShow } from '@/services/api'

export function useShows() {
  const shows = ref<IShow[]>([])

  onMounted(async () => {
    shows.value = await fetchShows()
  })

  return { shows }
}
