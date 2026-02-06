<template>
  <div class="home">
    <h1>TV Shows</h1>
    <ul>
      <li v-for="show in shows" :key="show.id">{{ show.name }} - {{ show.genres }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchShows, type IShow } from '@/services/api'

const shows = ref<IShow[]>([])

onMounted(async () => {
  shows.value = await fetchShows()
})
</script>

<style scoped>
.home {
  padding: 2rem;
}

h1 {
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  color: #666;
}
</style>
