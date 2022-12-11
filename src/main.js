import { createApp } from 'vue'
import router from "./router"
import App from './App.vue'
import VueParticles from 'vue-particles'


createApp(App)
.use(router)
.use(VueParticles)
.mount('#app')
