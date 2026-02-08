import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Details from '@/views/Details.vue'
import Dashboard from '@/views/Dashboard.vue'
import GenrePage from '@/views/GenrePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true,
  },
  {
    path: '/genre/:name',
    name: 'GenrePage',
    component: GenrePage,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
