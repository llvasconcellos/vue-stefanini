import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tabela from '../views/Tabela.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tabela',
    name: 'Tabela',
    component: Tabela
  }
]

const router = new VueRouter({
  routes
})

export default router
