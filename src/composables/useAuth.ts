import { ref, computed, readonly } from 'vue';

import { signUpWithEmail, loginWithEmail } from '@/services/authService';
import type { User } from '@supabase/supabase-js';

const AUTH_STORAGE_KEY = 'auth_user'

const authUser = ref<User | null>(null)

function loadUserFromStorage () {
  const storedUser = localStorage.getItem(AUTH_STORAGE_KEY)
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser)
      authUser.value = user
    } catch (error) {
      console.error('Error loading user from storage:', error)
    }
  }
}

loadUserFromStorage()

export default function useAuth () {

  async function registerWithEmail (email: string, password: string) {
    try {
      const data = await signUpWithEmail({ email, password})
      authUser.value = data.user
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  async function login (email: string, password: string) {
    try{
      const data = await loginWithEmail({ email, password })
      authUser.value = data.user
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data.user))
    } catch (error) {
      console.error('Error during login:', error)
    }
  }


  return {
    authIsLogin: computed(() => authUser.value !== null),
    authUser: readonly(authUser),
    registerWithEmail,
    login,
  }
}
