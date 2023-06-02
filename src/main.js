import { createApp } from 'vue'
import pinia from './stores'
// import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(pinia).mount('#app')

