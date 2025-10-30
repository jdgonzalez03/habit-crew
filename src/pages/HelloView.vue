<script setup lang="ts">
import useAuth from '@/composables/useAuth';
import { Button } from 'primevue';
import { useRouter } from 'vue-router';

const router = useRouter()

const { authUser, logout } = useAuth()

function handleLogout () {
  try {
    logout()
    router.push({ name: 'login' })
  } catch (error) {
    console.error('Error during logout:', error)
  }
}


</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="text-3xl font-bold underline m-auto">Hola World!</h2>
    <Button @click="handleLogout">Logout</Button>
    <pre>
      {{  authUser }}
    </pre>
  </div>
</template>
