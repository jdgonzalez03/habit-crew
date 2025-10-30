<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import useAuth from '@/composables/useAuth'

import AuthLayout from '@/layout/AuthLayout.vue'
import AuthForm from '@/components/AuthForm.vue'

import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const router = useRouter()
const { login } = useAuth()

const email = ref()
const password = ref()

function handleSubmit() {
  try {
    login(email.value, password.value)
    router.push({ name: 'home'})
  } catch (error) {
    console.error('Error during login:', error)
  }
}
</script>

<template>
  <AuthLayout>
    <AuthForm
      title="Inicia Sesión"
      @submit="handleSubmit"
      submit-text="Inicia Sesión"
      alt-text="¿No tienes una cuenta? Registrate"
      alt-label="aquí"
      alt-link-path="register"
    >
      <IconField>
        <InputIcon>
          <i class="pi pi-user" />
        </InputIcon>
        <InputText
          id="input"
          v-model="email"
          type="email"
          placeholder="pepitoperez@mail.com"
          autofocus
          fluid
          required="true"
        />
      </IconField>

      <IconField>
        <InputIcon>
          <i class="pi pi-lock" />
        </InputIcon>
        <InputText
          id="password"
          v-model="password"
          type="password"
          placeholder="password"
          fluid
          required="true"
        />
      </IconField>
    </AuthForm>
  </AuthLayout>
</template>
