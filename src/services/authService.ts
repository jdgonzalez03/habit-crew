import { useSupabase } from '@/lib/supabase'

export async function logout() {
  const { error } = await useSupabase().auth.signOut()
  if (error) throw error
}

export async function loginWithEmail({ email, password }: { email: string; password: string }) {
  const { data, error } = await useSupabase().auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signUpWithEmail({ email, password }: { email: string; password: string }) {
  const { data, error } = await useSupabase().auth.signUp({
    email,
    password,
    // options: {
    //   data: meta,
    // },
  })

  if (error) throw error
  return data
}
