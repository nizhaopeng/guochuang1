import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Materials from '@/pages/Materials.vue'
import Analysis from '@/pages/Analysis.vue'
import Creation from '@/pages/Creation.vue'
import Works from '@/pages/Works.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/materials',
    name: 'materials',
    component: Materials,
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: Analysis,
  },
  {
    path: '/creation',
    name: 'creation',
    component: Creation,
  },
  {
    path: '/works',
    name: 'works',
    component: Works,
  },
]

const router = createRouter({
  history: createWebHistory('/guochuang1/'),
  routes,
})

export default router
