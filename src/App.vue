<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-800">
    <header>
      <h1 class="text-2xl md:text-3xl font-semibold mb-6 text-center py-8">
        Single Quick Start
        <span class="text-blue-600">Vue 3</span> + <span class="text-teal-600">Tailwind</span> +
        <span class="text-indigo-600">Vue Router</span>
      </h1>
    </header>

    <main class="flex-1 flex flex-col items-center justify-center">
      <RouterView class="w-full" />
    </main>

    <footer class="flex justify-center items-center py-6 text-gray-700/80 text-sm md:text-base">
      <p>
        © 2025 Made with love by
        <span class="text-gray-700 font-bold"> jdgonzalez03</span>
      </p>
    </footer>
  </div>
</template>
