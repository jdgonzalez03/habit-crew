import '@/assets/global.css'

import App from '@/App.vue'
import router from '@/router'

import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import FocusTrap from 'primevue/focustrap';

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.directive('focustrap', FocusTrap);


app.mount('#app')
