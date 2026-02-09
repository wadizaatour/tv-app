<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue'
import { useShowsStore } from '@/stores/shows'
import { useGenres } from '@/composables/useGenres'
import { ref, computed, onMounted } from 'vue'
import { defineAsyncComponent } from 'vue'

const GenreList = defineAsyncComponent(() => import('@/components/GenreList.vue'))
const store = useShowsStore()
onMounted(() => store.loadShows())

const { genres, showsByGenre } = useGenres(() => store.shows)

const selectedGenre = ref<string | null>(null)

const filteredShowsByGenre = computed(() => {
  if (!selectedGenre.value) return showsByGenre.value
  return { [selectedGenre.value]: showsByGenre.value[selectedGenre.value] || [] }
})

function filterByGenre(genre: string) {
  selectedGenre.value = selectedGenre.value === genre ? null : genre
}
</script>

<template>
  <div class="dashboard">
    <header v-if="!store.loading" class="dashboard-header">
      <h1>TV Shows</h1>
      <h2>Browse by Genre</h2>
      <GenreList :genres="genres" @select-genre="filterByGenre" />
    </header>

    <section v-for="(genreShows, genre) in filteredShowsByGenre" :key="genre" class="genre-section">
      <router-link v-if="!store.loading" :to="`/genre/${genre}`" class="genre-link">
        <h2>{{ genre }}</h2>
      </router-link>

      <ul class="shows-list">
        <li v-for="show in genreShows" :key="show.id">
          <ShowCard :show="show" />
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  background: var(--color-bg-light);
  color: var(--color-text-primary);
}

.dashboard-header {
  margin-bottom: 1rem;
}

.genre-link {
  color: inherit;
  text-decoration: none;
}
.genre-link:hover {
  color: var(--color-primary);
}

.shows-list {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  list-style: none;
  padding: 0;
  margin: 0;
}
.shows-list li {
  flex: 0 0 auto;
}
.shows-list::-webkit-scrollbar {
  display: none;
}

@media (max-width: 1024px) {
  .dashboard {
    padding: 1.5rem 2rem;
    gap: 1.5rem;
  }
  .shows-list {
    gap: 0.75rem;
  }
}

@media (max-width: 600px) {
  .dashboard {
    padding: 1rem;
    gap: 1rem;
  }
  .dashboard-header {
    text-align: center;
  }
  .dashboard-header h1 {
    font-size: 1.4rem;
    margin-bottom: 0.25rem;
  }
  .dashboard-header h2 {
    font-size: 1rem;
    margin: 0.25rem 0 0.5rem;
  }
  .shows-list {
    gap: 0.5rem;
  }
}
</style>
