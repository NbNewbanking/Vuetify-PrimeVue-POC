import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import theme from './theme';

createApp(App)
  .use(PrimeVue, {
    unstyled: true,
    pt: theme
  })
  .mount('#app')
