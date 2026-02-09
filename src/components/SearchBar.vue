<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
</script>

<template>
  <form class="search-bar" role="search">
    <input id="search-input" v-model="query" type="text" placeholder="Search shows..." />
  </form>
</template>

<style scoped>
.search-bar input {
  width: 100%;
  max-width: 500px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
</style>
