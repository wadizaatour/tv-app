<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue'
import GenreList from '@/components/GenreList.vue'
import { useShows } from '@/composables/useShows'
import { useGenres } from '@/composables/useGenres'
import { ref, computed } from 'vue'

const { shows } = useShows()
const { genres, showsByGenre } = useGenres(() => shows.value)

// Track selected genre
const selectedGenre = ref<string | null>(null)

// Filtered genres: either all, or just the selected one
const filteredShowsByGenre = computed(() => {
  if (!selectedGenre.value) return showsByGenre.value
  return { [selectedGenre.value]: showsByGenre.value[selectedGenre.value] || [] }
})

// Handle selection
function filterByGenre(genre: string) {
  // If the same genre is clicked again, clear the filter
  if (selectedGenre.value === genre) {
    selectedGenre.value = null
  } else {
    selectedGenre.value = genre
  }
}
</script>

<template>
  <div class="dashboard">
    <div class="header">
      <h1>TV Shows</h1>
      <h2>Browse by Genre</h2>
      <!-- Pass handler to GenreList -->
      <GenreList :genres="genres" @select-genre="filterByGenre" />
    </div>

    <!-- By Genre -->
    <section v-for="(genreShows, genre) in filteredShowsByGenre" :key="genre">
      <h2>{{ genre }}</h2>
      <div class="list-container">
        <div class="shows-list" :ref="genre">
          <ShowCard v-for="show in genreShows" :key="show.id" :show="show" />
        </div>
      </div>
      <router-link :to="`/all/${genre}`" class="show-all-btn">Show All {{ genre }}</router-link>
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  background: var(--color-bg-light);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem; /* desktop default */
  color: var(--color-text-primary);
  gap: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.list-container {
  position: relative;
  display: flex;
  align-items: center;
}

.shows-list {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  scroll-behavior: smooth;
}

.show-all-btn {
  margin-top: 0.5rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
}

.show-all-btn:hover {
  background: var(--color-secondary);
}

/* ✅ Mobile adjustments */
@media (max-width: 600px) {
  .dashboard {
    padding: 1rem; /* smaller padding */
    gap: 1.5rem; /* tighter spacing */
  }

  .header {
    margin-bottom: 1rem;
    text-align: center; /* center header text */
  }

  .header h1 {
    font-size: 1.5rem; /* smaller title */
  }

  .header h2 {
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }

  .shows-list {
    gap: 0.5rem; /* tighter spacing between cards */
  }

  .show-all-btn {
    display: block;
    text-align: center;
    margin: 0.75rem auto 0; /* center button */
  }
}
</style>
