<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
import LoadingBar from '@/components/LoadingBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useShowsStore } from '@/stores/shows'
import { defineAsyncComponent } from 'vue'

const DashboardSkeleton = defineAsyncComponent(() => import('@/components/DashboardSkeleton.vue'))
const store = useShowsStore()
</script>

<template>
  <div class="layout" role="main">
    <LoadingBar :loading="store.loading" />

    <header class="header">
      <h1 class="logo">
        <RouterLink to="/" aria-label="Go to dashboard">🎬 MyShows</RouterLink>
      </h1>
      <section class="middle">
        <form role="search">
          <SearchBar />
        </form>
      </section>
      <ThemeToggle />
    </header>

    <section class="content">
      <DashboardSkeleton v-if="store.loading" />
      <slot v-else />
    </section>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  gap: 1rem;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
}
.logo a {
  color: var(--color-primary);
  text-decoration: none;
}

.middle {
  display: flex;
  flex: 1;
  justify-content: center;
}

.content {
  flex: 1;
  padding: 1rem;
}

@media (max-width: 1024px) {
  .header {
    flex-wrap: wrap;
    justify-content: center;
  }
  .middle {
    flex: 1 1 100%;
  }
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    gap: 0.75rem;
  }
  .logo {
    text-align: center;
    font-size: 1.2rem;
  }
  .middle {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
}
</style>
