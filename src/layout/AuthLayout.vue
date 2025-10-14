<template>
  <div class="min-h-screen w-full flex flex-col">
    <header class="flex justify-start gap-4 p-4">
      <i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>
      <h1 class="text-2xl font-bold">
        Habit Crew
      </h1>
    </header>

    <main class="w-full flex-1 flex items-center justify-center">
      <slot></slot>
    </main>

    <footer class="flex justify-center p-4 text-white/70 gap-2 italic">
      Hecho por <strong>jdgonzalez03</strong>
    </footer>
  </div>
</template>
