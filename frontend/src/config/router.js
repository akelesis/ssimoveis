import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Action from '../views/ActionDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/imoveis',
      name: 'imoveis',
      component: () => import('../views/Houses.vue')
    },
    {
      path: '/empreendimentos',
      name: 'empreendimentos',
      component: () => import('../views/Actions.vue')
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('../views/Gallery.vue')
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/casa',
      name: 'casa',
      component: () => import('../views/HouseDetails.vue')
    },
    {
      path: '/action',
      name: 'action',
      component: Action
    },

  ]
})
