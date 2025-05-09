import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import PrimeVue from 'primevue/config'

import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App).use(vuetify)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura,

    options: {
      prefix: 'p',

      darkModeSelector: 'system',

      cssLayer: false,
    },
  },
})

app.mount('#app')
