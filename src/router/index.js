import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import AdmReport from '@/views/AdmReport/AdmReport.vue'
import Register from '@/views/Register/Register.vue'

const routes = [

  {
    path: '/relatorios',
    name: 'AdmReport',
    component: AdmReport
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
