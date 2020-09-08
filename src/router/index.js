import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

    {
        path : '/experiance', 
        component: () => import('@/views/experiance/Experiance.vue'), 
        children: [
            {
              path : 'optimumarea', 
              name : 'optimumarea', 
              component: () => import('@/views/experiance/Optimumarea.vue')
            },
            {
                path : 'ca',
                name : 'ca',
                component: () => import('@/views/experiance/Ca.vue')
            }, 

            {
                path: 'imi',
                name: 'imi',
                component: () => import('@/views/experiance/Imi.vue')
            }, 

            {
                path: 'pcorder', 
                name : 'pcorder', 
                component: () => import('@/views/experiance/Pcorder.vue')
            }
        ]
    }, 

//   {
//     path: '/experiance/ca',
//     name: 'ca',
//     component: () => import(/* webpackChunkName: "about" */ '../views/experiance/Ca.vue')
//   },

//   {
//     path: '/experiance/imi',
//     name: 'imi',
//     component: () => import(/* webpackChunkName: "about" */ '../views/experiance/Imi.vue')
//   },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
