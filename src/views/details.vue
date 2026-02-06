<template>
  <div class="details">
    <h1>Details Page</h1>
    <p>TV show details will be displayed here</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.details {
  padding: 2rem;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

p {
  color: #666;
  margin-bottom: 1.5rem;
}

a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #6c757d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

a:hover {
  background-color: #5a6268;
}
</style>
