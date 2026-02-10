<script setup lang="ts">
import { ref, computed } from 'vue'
import { useShowsStore } from '@/stores/shows'
import { useRouter } from 'vue-router'

const props = defineProps<{ closeMenu?: () => void }>()
const MAX_QUERY_LENGTH = 3
const query = ref('')
const store = useShowsStore()
const router = useRouter()

const results = computed(() => {
  if (query.value.length < MAX_QUERY_LENGTH) return []
  const queryName = query.value.toLowerCase()
  return store.shows.filter((show) => show.name.toLowerCase().includes(queryName))
})

function goToShow(showId: number) {
  router.push(`/details/${showId}`)
  query.value = ''

  if (props.closeMenu) props.closeMenu()
}
</script>

<template>
  <div class="search-bar">
    <input v-model="query" type="text" placeholder="Search shows..." />
    <div v-if="query.length >= 3" class="results-dropdown">
      <ul v-if="results.length">
        <li v-for="show in results" :key="show.id" @click="goToShow(show.id)">
          {{ show.name }}
        </li>
      </ul>
      <p v-else class="no-results">No shows found for "{{ query }}"</p>
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.search-bar input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
.results-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-bg-light);
  border: 1px solid var(--color-border, #ccc);
  border-radius: 8px;
  margin-top: 0.25rem;
  max-height: 250px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
}

.results-dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.results-dropdown li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.results-dropdown li:hover {
  background: var(--color-primary);
  color: #fff;
}

.no-results {
  font-size: 0.85rem;
  color: var(--color-text-secondary, #666);
  padding: 0.5rem 1rem;
}
</style>
