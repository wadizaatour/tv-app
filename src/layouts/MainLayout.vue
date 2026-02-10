<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LoadingBar from '@/components/LoadingBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useShowsStore } from '@/stores/shows'
import { defineAsyncComponent } from 'vue'
import { useDeviceType, DeviceType } from '@/composables/useDeviceType'
import MenuToggle from '@/components/MenuToggle.vue'
import { toRefs } from 'vue'

const DashboardSkeleton = defineAsyncComponent(() => import('@/components/DashboardSkeleton.vue'))
const store = useShowsStore()

const { deviceType } = toRefs(useDeviceType())
</script>

<template>
  <div class="layout" role="main">
    <LoadingBar :loading="store.loading" />

    <header class="header">
      <h1 class="logo">
        <RouterLink to="/" aria-label="Go to dashboard">🎬 MyShows</RouterLink>
      </h1>

      <form v-if="deviceType !== DeviceType.Mobile" role="search" class="search-wrapper">
        <SearchBar />
      </form>

      <div v-if="deviceType !== DeviceType.Mobile" class="theme-wrapper">
        <ThemeToggle />
      </div>

      <MenuToggle
        v-if="deviceType === DeviceType.Mobile"
        v-slot="{ closeMenu }"
        class="menu-toggle-wrapper"
      >
        <form role="search" class="mobile-search">
          <SearchBar :closeMenu="closeMenu" />
        </form>
      </MenuToggle>
    </header>

    <section class="content">
      <DashboardSkeleton v-if="store.loading" />
      <slot v-else />
    </section>
  </div>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
}

.logo a {
  color: var(--color-primary);
  text-decoration: none;
}

.search-wrapper {
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
}

.theme-wrapper {
  display: flex;
  justify-content: flex-end;
}

.menu-toggle-wrapper {
  justify-self: end;
}

.content {
  flex: 1;
  padding: 1rem;
}

@media (max-width: 600px) {
  .header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
