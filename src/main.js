import { createApp } from 'vue'
import 'vuetify/styles'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'primeicons/primeicons.css'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(vuetify)
  .use(PrimeVue, {
    unstyled: true,
    pt: {
      chips: {
        container: 'tw-rounded-xl tw-bg-white tw-border-gray-200 tw-border tw-flex tw-p-1 tw-gap-1',
        input: 'tw-bg-transparent tw-border-none tw-outline-none tw-py-1 tw-px-2',
        token: 'tw-flex tw-items-center tw-rounded-xl tw-border-[#B2CCFF] tw-border tw-px-2 tw-gap-1 tw-bg-[#EFF4FF] tw-text-[#004EEB]',
        removeTokenIcon: 'tw-text-xs tw-text-[#528BFF] tw-cursor-pointer',
      }
    }
  })
  .mount('#app')
