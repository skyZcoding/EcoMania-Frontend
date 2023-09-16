import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QRCode from '../views/QRCode.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/qrcode', name: 'QRCode', component: QRCode }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router