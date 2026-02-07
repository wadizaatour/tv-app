<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import '@/styles/styles.css'
import '@/styles/theme.css'
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>
