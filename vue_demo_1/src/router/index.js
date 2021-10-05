import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo1_Intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
