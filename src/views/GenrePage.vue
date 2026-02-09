<script setup lang="ts">
import { useShows } from '@/composables/useShows'
import { useGenres } from '@/composables/useGenres'
import ShowCard from '@/components/ShowCard.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { shows } = useShows()
const { showsByGenre } = useGenres(() => shows.value)

const genreName = computed(() => route.params.name as string)
const genreShows = computed(() => showsByGenre.value[genreName.value] || [])
</script>

<template>
  <div class="genre-page">
    <h1>{{ genreName }}</h1>
    <div class="genre-list">
      <ShowCard v-for="show in genreShows" :key="show.id" :show="show" />
    </div>
  </div>
</template>

<style scoped>
.genre-page {
  padding: 2rem;
}

.genre-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

@media (max-width: 600px) {
  .genre-list {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 0.75rem;
  }
  .genre-list::-webkit-scrollbar {
    display: none;
  }
  .genre-list > * {
    flex: 0 0 auto;
  }
}
</style>
