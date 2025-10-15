<script setup lang="ts">
import { ref } from 'vue'

import AuthLayout from '@/layout/AuthLayout.vue'
import AuthForm from '@/components/AuthForm.vue'

import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const email = ref()
const password = ref()

function handleSubmit() {
  alert('Hola mundo')
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
