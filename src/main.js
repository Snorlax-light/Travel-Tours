import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
app.mount('#app')

AOS.init({
  duration: 600,  // Faster! (was 800ms, now 300ms)
  delay: 0,       // No delay (was 100ms)
  once: true      // Animate only once per element
})