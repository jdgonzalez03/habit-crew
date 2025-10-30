<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import Password from 'primevue/password';

import IftaLabel from 'primevue/iftalabel';

import AuthLayout from '@/layout/AuthLayout.vue';
import AuthForm from '@/components/AuthForm.vue';

import useAuth from '@/composables/useAuth';

const { registerWithEmail } = useAuth()
const router = useRouter()

function handleSubmit () {
  try {
    registerWithEmail(email.value, password.value)
    router.push({name: 'home'})
  } catch (error) {
    console.error('Error during registration:', error)
  }

}

const email = ref()
const username = ref()
const password = ref()

</script>


<template>
  <AuthLayout>
    <AuthForm
      title="Crea una cuenta"
      @submit="handleSubmit"
      submit-text="Registrate"
      alt-text="¿Ya tienes una cuenta? Inicia Sesión"
      alt-label="aquí"
      alt-link-path="login"
    >
      <IftaLabel>
        <IconField>
          <InputIcon>
            <i class="pi pi-envelope" />
          </InputIcon>
          <InputText
          id="emailInput"
          v-model="email"
          type="email"
          placeholder="pepitoperez@mail.com"
          autofocus
          fluid
          required="true"
          />
        </IconField>
        <label for="emailInput">Email</label>
      </IftaLabel>

      <IftaLabel>
        <IconField>
          <InputIcon>
            <i class="pi pi-user" />
          </InputIcon>
          <InputText
          id="usernameInput"
          v-model="username"
          type="text"
          placeholder="pperez2025"
          autofocus
          fluid
          required="true"
          />
        </IconField>
        <label for="usernameInput">Username</label>
      </IftaLabel>

      <IftaLabel>
        <IconField>
          <InputIcon>
            <i class="pi pi-lock" />
          </InputIcon>
          <Password
            v-model="password"
            placeholder="**********"
            toggleMask
            feedback
            fluid
          />
        </IconField>
        <label for="usernameInput">Password</label>
      </IftaLabel>

    </AuthForm>
  </AuthLayout>
</template>
