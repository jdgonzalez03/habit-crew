import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '@/pages/HelloView.vue'
import useAuth from '@/composables/useAuth'


const registerView = () => import('@/pages/RegisterView.vue')
const loginView = () => import('@/pages/LoginView.vue')


const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: registerView,
  },
  {
    path: '/login',
    name: 'login',
    component: loginView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuth()

  const isLoggedIn = auth.authIsLogin.value
  console.log(isLoggedIn)

  if (to.meta.requiresAuth && !isLoggedIn) {
    return { path: '/login' }
  }

  if ((to.path === '/login' || to.name === 'login' || to.path === '/register' || to.name === 'register') && isLoggedIn) {
    return { path: '/' }
  }

  return true
})


export default router
