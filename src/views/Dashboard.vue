<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue'
import GenreList from '@/components/GenreList.vue'
import { useShowsStore } from '@/stores/shows'
import { useGenres } from '@/composables/useGenres'
import { ref, computed, onMounted } from 'vue'

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
    <div class="header" v-if="!store.loading">
      <h1>TV Shows</h1>
      <h3>Browse by Genre</h3>
      <GenreList :genres="genres" @select-genre="filterByGenre" />
    </div>
    <section v-for="(genreShows, genre) in filteredShowsByGenre" :key="genre">
      <router-link :to="`/genre/${genre}`" class="genre-link" v-if="!store.loading">
        <h2>{{ genre }}</h2>
      </router-link>
      <ul class="shows-list" :ref="genre">
        <li v-for="show in genreShows" :key="show.id">
          <ShowCard :show="show" />
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.genre-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.genre-link h2:hover {
  color: var(--color-primary);
}
.dashboard {
  background: var(--color-bg-light);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem; /* desktop default */
  color: var(--color-text-primary);
  gap: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.list-container {
  width: 100%;
}

.shows-list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 1rem;
  list-style: none;
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

  .header {
    margin-bottom: 1rem;
    text-align: center;
  }

  .header h1 {
    font-size: 1.4rem;
    margin-bottom: 0.25rem;
  }

  .header h2 {
    font-size: 1rem;
    margin: 0.25rem 0 0.5rem;
  }

  .shows-list {
    gap: 0.5rem;
  }
}
</style>
