<script setup lang="ts">
import { ref } from 'vue'
import HamburgerIcon from '@/assets/HamburgerIcon.vue'
import CloseIcon from '@/assets/CloseIcon.vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
    <HamburgerIcon v-if="!isOpen" />
    <CloseIcon v-else />
  </button>

  <div v-if="isOpen" class="backdrop" @click="closeMenu"></div>

  <nav class="mobile-menu" :class="{ open: isOpen }">
    <slot :closeMenu="closeMenu" />
  </nav>
</template>

<style scoped>
.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-primary);
  z-index: 1100;
}

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  max-width: 300px;
  height: 100%;
  background: var(--color-bg-light);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: right 0.3s ease;
  z-index: 1000;
}

.mobile-menu.open {
  right: 0;
}
</style>
