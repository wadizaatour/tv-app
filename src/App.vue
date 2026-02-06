<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/details">Details</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

nav a {
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #0056b3;
}

nav a.router-link-active {
  color: #0056b3;
  border-bottom: 2px solid #0056b3;
  padding-bottom: 0.25rem;
}
</style>
