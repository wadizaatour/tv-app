<script setup lang="ts">
import { ref, computed } from 'vue'
import { useShowsStore } from '@/stores/shows'
import { useRouter } from 'vue-router'

const query = ref('')
const store = useShowsStore()
const router = useRouter()

const results = computed(() => {
  if (!query.value) return []
  const q = query.value.toLowerCase()
  return store.shows.filter((show) => show.name.toLowerCase().includes(q))
})

function goToShow(showId: number) {
  router.push(`/details/${showId}`)
  query.value = ''
}
</script>

<template>
  <div class="search-bar">
    <input v-model="query" type="text" placeholder="Search shows..." />
    <ul v-if="results.length" class="results-dropdown">
      <li v-for="show in results" :key="show.id" @click="goToShow(show.id)">
        {{ show.name }}
      </li>
    </ul>
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
  list-style: none;
  padding: 0;
  max-height: 250px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.results-dropdown li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.results-dropdown li:hover {
  background: var(--color-primary);
  color: #fff;
}
</style>
