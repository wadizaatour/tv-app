<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useShowsStore } from '@/stores/shows'

const route = useRoute()
const store = useShowsStore()

onMounted(() => store.loadShows())

const showId = Number(route.params.id)
const show = computed(() => store.shows.find((s) => s.id === showId))
</script>

<template>
  <div v-if="show" class="details-page">
    <div
      class="hero"
      :style="{ backgroundImage: `url(${show.image?.original || show.image?.medium})` }"
    >
      <div class="overlay"></div>
      <div class="hero-content">
        <h1 class="title">{{ show.name }}</h1>
        <p class="meta">{{ show.language }} • {{ show.genres.join(', ') }} • {{ show.status }}</p>
        <p class="rating">⭐ {{ show.rating?.average ?? 'N/A' }}</p>
        <a v-if="show.officialSite" :href="show.officialSite" target="_blank" class="cta-btn">
          Visit Official Site
        </a>
      </div>
    </div>

    <div class="info-grid">
      <div>
        <h3>Premiered</h3>
        <p>{{ show.premiered }}</p>
      </div>
      <div v-if="show.ended">
        <h3>Ended</h3>
        <p>{{ show.ended }}</p>
      </div>
      <div>
        <h3>Runtime</h3>
        <p>{{ show.runtime ?? show.averageRuntime ?? 'N/A' }} min</p>
      </div>
      <div>
        <h3>Network</h3>
        <p>{{ show.network?.name ?? 'N/A' }}</p>
      </div>
    </div>

    <div class="summary" v-html="show.summary"></div>
  </div>
</template>

<style scoped>
.details-page {
  color: var(--color-text-primary, #fff);
  display: flex;
  flex-direction: column;
}

.hero {
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
}

.hero-content {
  position: relative;
  padding: 2rem;
  max-width: 800px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}

.meta {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: var(--color-text-secondary, #ccc);
}

.rating {
  font-size: 1.2rem;
  margin: 0.5rem 0 1rem;
}

.cta-btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: var(--color-primary, #e50914);
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
}

.cta-btn:hover {
  background: var(--color-secondary, #b20710);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background: var(--color-bg-light, #111);
}

.info-grid h3 {
  font-size: 0.9rem;
  color: var(--color-text-secondary, #aaa);
  margin-bottom: 0.25rem;
}

.info-grid p {
  font-size: 1rem;
  margin: 0;
}

.summary {
  padding: 2rem;
  line-height: 1.6;
  font-size: 1rem;
  color: var(--color-text-primary, #fff);
}
</style>
