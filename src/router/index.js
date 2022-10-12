import { createRouter, createWebHistory } from 'vue-router'
import ViewStartScreen from '@/views/ViewStartScreen.vue'
import ViewCalcScreen from '@/views/ViewCalcScreen.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: ViewStartScreen
  },
  {
    path: '/age-calc',
    name: 'calc',
    component: ()=> import('@/views/ViewCalcScreen.vue')
  },
  {
    path: '/ration',
    name: 'ration',
    component: ()=> import('@/views/ViewRation.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router


  
