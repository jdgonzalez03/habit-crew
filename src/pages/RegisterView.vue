<script setup lang="ts">
import AuthLayout from '@/layout/AuthLayout.vue';
import AuthForm from '@/components/AuthForm.vue';

function handleSubmit () {
  alert('hola mundo')
}

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

    </AuthForm>
  </AuthLayout>
</template>
