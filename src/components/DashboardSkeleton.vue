<template>
  <div class="dashboard">
    <div class="header">
      <div class="skeleton-title large"></div>
      <div class="skeleton-title medium"></div>
    </div>

    <section v-for="n in 2" :key="n">
      <div class="genre-link">
        <div class="skeleton-title small"></div>
      </div>
      <div class="list-container">
        <div class="shows-list">
          <div v-for="m in 10" :key="m" class="skeleton-card">
            <div class="skeleton-image"></div>
            <div class="skeleton-line short"></div>
            <div class="skeleton-line tiny"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Reuse dashboard spacing */
.dashboard {
  background: var(--color-bg-light);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  color: var(--color-text-primary);
  gap: 2rem;
}

.header {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.genre-link {
  margin-bottom: 0.75rem;
}

.list-container {
  width: 100%;
}

.shows-list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 1rem;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.shows-list::-webkit-scrollbar {
  display: none;
}

.skeleton-title,
.skeleton-image,
.skeleton-line {
  background: linear-gradient(90deg, #444 25%, #666 50%, #444 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.skeleton-title.large {
  width: 200px;
  height: 28px;
}

.skeleton-title.medium {
  width: 150px;
  height: 20px;
}

.skeleton-title.small {
  width: 120px;
  height: 18px;
}

.skeleton-card {
  width: 160px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.skeleton-image {
  width: 100%;
  height: 240px;
}

.skeleton-line.short {
  width: 80%;
  height: 14px;
  margin-top: 0.5rem;
}

.skeleton-line.tiny {
  width: 40%;
  height: 12px;
  margin-top: 0.25rem;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
