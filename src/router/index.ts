import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../pages/home.vue'
import Details from '../pages/details.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
