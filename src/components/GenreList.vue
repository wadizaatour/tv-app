<template>
  <div class="genre-list" ref="listRef">
    <span
      v-for="genre in genres"
      :key="genre"
      class="genre-badge"
      :class="{ active: genre === selectedGenre }"
      @click="selectGenre(genre)"
    >
      {{ genre }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ genres: string[] }>()
const emit = defineEmits<{ (e: 'select-genre', genre: string): void }>()

const selectedGenre = ref<string | null>(null)

function selectGenre(genre: string) {
  if (selectedGenre.value === genre) {
    // ✅ clicked again → clear selection
    selectedGenre.value = null
    emit('select-genre', '')
  } else {
    // ✅ new selection
    selectedGenre.value = genre
    emit('select-genre', genre)
  }
}
</script>

<style scoped>
.genre-list {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.genre-badge {
  flex-shrink: 0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: var(--color-bg-card, #2a2a2a);
  color: var(--color-text-primary, #fff);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
}

.genre-badge:hover {
  background: var(--color-primary, #e50914);
  transform: scale(1.05);
}

/* ✅ Active state */
.genre-badge.active {
  background: var(--color-primary, #e50914);
  color: #fff;
}
</style>
