<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const segments = computed(() => {
  const parts = route.path.split('/').filter(Boolean)
  return parts
    .filter((part) => part.toLowerCase() !== 'genre' && part.toLowerCase() !== 'details')
    .map((part, index, arr) => {
      return {
        name: part.charAt(0).toUpperCase() + part.slice(1),
        path: '/' + arr.slice(0, index + 1).join('/'),
      }
    })
})

function goTo(path: string) {
  router.push(path)
}
</script>

<template>
  <nav class="breadcrumb">
    <span class="crumb" @click="goTo('/')">Home</span>
    <template v-for="segment in segments" :key="segment.path">
      <span class="separator">/</span>
      <span class="crumb" @click="goTo(segment.path)">
        {{ segment.name }}
      </span>
    </template>
  </nav>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  padding: 0.5rem 2rem; /* align with header */
}

.crumb {
  cursor: pointer;
  color: var(--color-primary, #e50914);
}

.crumb:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 0.25rem;
  color: var(--color-text-secondary, #aaa);
}
</style>
