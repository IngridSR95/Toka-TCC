
import { createRouter, createWebHistory } from 'vue-router'
import AdmReport from '../views/AdmReport/AdmReport.vue'

const routes = [

  {
    path: '/relatorios',
    name: 'AdmReport',
    component: AdmReport
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
