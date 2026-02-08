<template>
  <RouterLink :to="detailsLink" class="show-card">
    <img v-if="show.image?.medium" :src="show.image.medium" :alt="show.name" class="show-image" />
    <h3 class="show-title">{{ show.name }}</h3>
    <p class="show-year">{{ premiereYear }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import type { IShow } from '../services/api'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

export type IShowCard = Pick<IShow, 'id' | 'name' | 'premiered' | 'image'>
const props = defineProps<{ show: IShowCard }>()

const premiereYear = computed(() => {
  if (!props.show.premiered) return 'Unknown'
  return new Date(props.show.premiered).getFullYear()
})

const detailsLink = computed(() => {
  return `/details/${encodeURIComponent(props.show.id)}`
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
  text-decoration: none;
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
