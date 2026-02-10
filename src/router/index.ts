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
    component: () => import('@/views/Genre.vue'),
    props: true,
  },
  { path: '/:catchAll(.*)', redirect: { name: 'Dashboard' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
