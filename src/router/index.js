import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Scanner from '../views/Scanner.vue'
import Monster from '../views/Monster.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/Scanner', name: 'Scanner', component: Scanner },
    { path: '/monster/:Id', name: "Monster", component: Monster },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router