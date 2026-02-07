<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { useDeviceType, DeviceType } from '@/composables/useDeviceType'

const { deviceType } = useDeviceType()
</script>

<template>
  <div class="layout">
    <header class="header">
      <!-- Logo -->
      <RouterLink to="/" class="logo">🎬 MyShows</RouterLink>

      <!-- Middle section: search + nav -->
      <div class="middle">
        <div class="search-bar">
          <input type="text" placeholder="Search shows..." />
        </div>
        <!-- ✅ Hide nav badges on mobile -->
        <nav v-if="deviceType !== DeviceType.Mobile">
          <RouterLink to="/details" class="nav-badge">Details</RouterLink>
        </nav>
      </div>

      <!-- Theme toggle -->
      <ThemeToggle />
    </header>

    <!-- ✅ Hide breadcrumb on mobile -->
    <Breadcrumb v-if="deviceType !== DeviceType.Mobile" />

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  gap: 1rem;
}

/* Logo */
.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

/* Middle section: search + nav grouped */
.middle {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: center;
}

/* Search bar */
.search-bar input {
  width: 100%;
  max-width: 500px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Navigation badges */
nav {
  display: flex;
  gap: 0.5rem;
}

.nav-badge {
  background: var(--color-primary);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.3s;
}

.nav-badge:hover {
  background: var(--color-secondary);
}

.nav-badge.router-link-active {
  background: var(--color-secondary);
}

/* Breadcrumb bar */
.breadcrumb {
  padding: 0.5rem 2rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary, #666);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* Content area */
.content {
  flex: 1;
  padding: 1rem;
}

/* ✅ Tablet adjustments */
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

  .search-bar input {
    max-width: 350px;
  }
}

/* ✅ Mobile adjustments */
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

  .search-bar input {
    max-width: 100%;
  }

  nav {
    justify-content: center;
  }

  .nav-badge {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }

  .breadcrumb {
    padding: 0.5rem 1rem; /* tighter padding on mobile */
    font-size: 0.8rem;
    flex-wrap: wrap;
  }
}
</style>
