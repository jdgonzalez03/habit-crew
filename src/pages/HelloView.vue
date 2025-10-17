<script setup lang="ts">
import useAuth from '@/composables/useAuth';

const { authUser } = useAuth()


</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="text-3xl font-bold underline m-auto">Hola World!</h2>
    <pre>
      {{  authUser }}
    </pre>
  </div>
</template>
