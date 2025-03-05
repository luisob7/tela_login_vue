import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify';

createApp(App).use(vuetify).use(createPinia()).mount('#app')
