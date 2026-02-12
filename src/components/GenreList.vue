<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ genres: string[] }>()
const emit = defineEmits<{ (e: 'select-genre', genre: string): void }>()

const selectedGenre = ref<string | null>(null)

function selectGenre(genre: string) {
  if (selectedGenre.value === genre) {
    selectedGenre.value = null
    emit('select-genre', '')
  } else {
    selectedGenre.value = genre
    emit('select-genre', genre)
  }
}
</script>

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

<style scoped>
.genre-list {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
}
.genre-list::-webkit-scrollbar {
  height: 6px;
  margin-top: 2px;
}
.genre-list::-webkit-scrollbar-track {
  background: transparent;
}
.genre-list::-webkit-scrollbar-thumb {
  background: var(--color-primary, #e50914);
  border-radius: 3px;
}
.genre-list::-webkit-scrollbar-thumb:hover {
  background: #c40810;
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

.genre-badge.active {
  background: var(--color-primary, #e50914);
  color: #fff;
}
</style>
