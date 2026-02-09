<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import LoadingBar from '@/components/LoadingBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import DashboardSkeleton from '@/components/DashboardSkeleton.vue'
import { useDeviceType, DeviceType } from '@/composables/useDeviceType'
import { useShowsStore } from '@/stores/shows'

const { deviceType } = useDeviceType()
const store = useShowsStore()
</script>

<template>
  <main class="layout">
    <LoadingBar :loading="store.loading" />

    <header class="header">
      <h1 class="logo">
        <RouterLink to="/">🎬 MyShows</RouterLink>
      </h1>

      <div class="middle">
        <SearchBar />
      </div>

      <ThemeToggle />
    </header>

    <main class="content">
      <DashboardSkeleton v-if="store.loading" />
      <slot v-else />
    </main>
  </main>
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
  color: var(--color-primary);
  text-decoration: none;
}
.logo a {
  color: var(--color-primary);
  text-decoration: none;
}
.middle {
  display: flex;
  align-items: center;
  gap: 1rem;
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
    gap: 1rem;
  }

  .middle {
    flex: 1 1 100%;
    justify-content: center;
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
