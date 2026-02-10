<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NotFound from '@/assets/NotFound.vue'
</script>

<template>
  <div class="not-found">
    <NotFound />
    <h2>No show found</h2>
    <p>Sorry, the show you’re looking for doesn’t exist or has been removed.</p>
    <RouterLink to="/" class="back-home">Go back to Dashboard</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  color: var(--color-text-primary, #fff);
}

.not-found-svg {
  width: 200px;
  height: auto;
  margin-bottom: 1.5rem;
}

.not-found h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.not-found p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary, #ccc);
}

.back-home {
  padding: 0.6rem 1.2rem;
  background: var(--color-primary, #e50914);
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
}

.back-home:hover {
  background: var(--color-secondary, #b20710);
}
</style>
