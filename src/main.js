import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router
import router from './router'
// import pinia
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
