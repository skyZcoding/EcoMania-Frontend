import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

let app = createApp(App)
    
app.use(router)
    .mount('#app')
