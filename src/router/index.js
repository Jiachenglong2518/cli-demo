import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: index
  },{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/personal/index',
    name: 'personalidex',
    component: () => import(/* webpackChunkName: "about" */ '../views/personal/index.vue')
  },{
    path: '/flex',
    name: 'flex',
    component : () => import ('../views/flex.vue')
  },{
    path: '/for-key',
    name: 'for-key',
    component : () => import ('../views/for-key.vue')
  },{
    path: '/animation',
    name: 'animation',
    component : () => import ('../views/animation.vue')
  }
]
console.log( process.env.BASE_URL);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
