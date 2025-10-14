<script setup lang="ts">
import { computed } from 'vue';

import Button from 'primevue/button'

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const props = defineProps<{
  title: string
  submitText: string
  altText: string
  altLabel: string
  altLinkPath: string
}>()

const link = computed(() => `/${props.altLinkPath}`)
</script>

<template>

  <div class="flex justify-center items-center flex-col gap-y-3">
      <h1 class="text-white/80 uppercase font-bold text-center text-xl">{{ title }}</h1>
      <form v-focustrap class="w-full sm:w-80 flex flex-col gap-6" @submit.prevent="emit('submit')" >

        <!-- Dynamic content here -->
        <slot></slot>

        <div class="flex items-center justify-end gap-2">
          <span class="text-white/70">{{ altText }}</span>
          <Button asChild variant="link" v-slot="slotProps">
            <RouterLink :to="link" :class="[slotProps.class, '!p-0']">{{ altLabel }}</RouterLink>
          </Button>
        </div>

        <Button type="submit" :label="submitText" class="mt-2" />
      </form>
    </div>
</template>
