import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1_Intro.vue'
import Demo2 from '../views/Demo2_EventMethod.vue'
import Demo3 from '../views/Demo3_Data.vue'
import Demo4 from '../views/Demo4_Binding.vue'
import Demo5 from '../views/Demo5_Form.vue'
import Demo6 from '../views/Demo6_Slot.vue'
import Demo7 from '../views/Demo7_Condition.vue'
import Demo8 from '../views/Demo8_Loop.vue'
import Demo9 from '../views/Demo9_LifeCycle.vue'
import Demo10 from '../views/Demo10_Variable_and_State.vue'

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
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: Demo4
  },
  {
    path: '/demo5',
    name: 'demo5',
    component: Demo5
  },
  {
    path: '/demo6',
    name: 'demo6',
    component: Demo6
  },
  {
    path: '/demo7',
    name: 'demo7',
    component: Demo7
  },
  {
    path: '/demo8',
    name: 'demo8',
    component: Demo8
  },
  {
    path: '/demo9',
    name: 'demo9',
    component: Demo9
  },
  {
    path: '/demo10',
    name: 'demo10',
    component: Demo10
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
