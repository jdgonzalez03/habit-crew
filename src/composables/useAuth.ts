import { ref, computed, readonly } from 'vue';

import { signUpWithEmail, loginWithEmail } from '@/services/authService';
import type { User } from '@supabase/supabase-js';

const auth = ref(false)

const authUser = ref<User | null>(null)

export default function useAuth () {

  async function registerWithEmail (email: string, password: string) {
    try {
      const data = await signUpWithEmail({ email, password})
      authUser.value = data.user
      auth.value = true
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  async function login (email: string, password: string) {
    try{
      const data = await loginWithEmail({ email, password })
      authUser.value = data.user
      auth.value = true
    } catch (error) {
      console.error('Error during login:', error)
    }
  }


  return {
    authIsLogin: computed(() => auth.value),
    authUser: readonly(authUser),
    registerWithEmail,
    login,
  }
}
