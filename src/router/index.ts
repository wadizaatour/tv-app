import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('@/views/Details.vue'),
    props: true,
  },
  {
    path: '/genre/:name',
    name: 'GenrePage',
    component: () => import('@/views/GenrePage.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
