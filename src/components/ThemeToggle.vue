<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <span class="icon">
      <component :is="isDark ? SunIcon : MoonIcon" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SunIcon from '@/assets/SunIcon.vue'
import MoonIcon from '@/assets/MoonIcon.vue'

const isDark = ref(true)

const getStoredTheme = () => localStorage.getItem('theme') || 'dark'

const setTheme = (theme: 'dark' | 'light') => {
  isDark.value = theme === 'dark'
  localStorage.setItem('theme', theme)
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

const toggleTheme = () => {
  const newTheme = isDark.value ? 'light' : 'dark'
  setTheme(newTheme)
}

onMounted(() => {
  const theme = getStoredTheme()
  setTheme(theme as 'dark' | 'light')
})
</script>

<style scoped>
.theme-toggle {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
  background: var(--color-primary);
  color: #fff;
  transform: scale(1.05);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

svg {
  width: 100%;
  height: 100%;
}
</style>
