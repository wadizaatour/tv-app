<template>
  <div class="genre-list" ref="listRef">
    <span
      v-for="genre in genres"
      :key="genre"
      class="genre-badge"
      @click="$emit('select-genre', genre)"
    >
      {{ genre }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps<{ genres: string[] }>()
defineEmits<{ (e: 'select-genre', genre: string): void }>()

const listRef = ref<HTMLDivElement | null>(null)
</script>

<style scoped>
.genre-list {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
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

/* Tablet */
@media (max-width: 1024px) {
  .genre-badge {
    font-size: 0.85rem;
    padding: 0.4rem 0.9rem;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .genre-list {
    flex-wrap: nowrap; /* keep badges in one row */
    justify-content: flex-start; /* align left */
    overflow-x: auto; /* allow horizontal scroll */
    -webkit-overflow-scrolling: touch; /* smooth scrolling on iOS */
  }
  .genre-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    flex-shrink: 0; /* prevent shrinking so they stay side by side */
  }
}
</style>
