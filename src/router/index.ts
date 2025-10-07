import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '@/pages/HelloView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloView,
    default: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
