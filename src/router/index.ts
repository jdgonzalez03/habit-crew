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

router.beforeEach(async (to) => {
  const auth = useAuth()

  // Check if the user is authenticated
  const isLoggedIn = auth.authIsLogin.value

  // If the route requires authentication and the user is not logged in
  if (to.meta.requiresAuth && !isLoggedIn) {
    return {
      path: '/login',
      // Store the original path to redirect after login
      query: { redirect: to.fullPath }
    }
  }

  // If the user is logged in and tries to access auth pages
  if ((to.path === '/login' || to.path === '/register') && isLoggedIn) {
    return { path: to.query.redirect?.toString() || '/' }
  }

  return true
})


export default router
