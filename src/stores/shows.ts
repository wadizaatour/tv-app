import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchShows, type IShow } from '@/services/api'

export const useShowsStore = defineStore('shows', () => {
  const shows = ref<IShow[]>([])
  const loading = ref(false)

  async function loadShows() {
    if (shows.value.length) return
    loading.value = true
    try {
      shows.value = await fetchShows()
    } finally {
      loading.value = false
    }
  }

  return { shows, loading, loadShows }
})
