<template>
  <div class="show-card">
    <img v-if="show.image?.medium" :src="show.image.medium" :alt="show.name" class="show-image" />
    <h3 class="show-title">{{ show.name }}</h3>
    <p class="show-year">{{ premiereYear }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IShow } from '../services/api'
import { computed } from 'vue'

const props = defineProps<{ show: IShow }>()

// Extract only the year from premiered
const premiereYear = computed(() => {
  if (!props.show.premiered) return 'Unknown'
  return new Date(props.show.premiered).getFullYear()
})
</script>

<style scoped>
.show-card {
  width: 160px;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.show-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
}

.show-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.25rem 0 0 0;
  color: var(--color-text-primary, #fff);
}

.show-year {
  font-size: 0.85rem;
  color: var(--color-text-secondary, #ccc);
  margin: 0;
}
</style>
