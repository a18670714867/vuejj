import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import member from '../components/member'
import cart from '../components/cart'

import search from '../components/search'

import home from '../components/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/member',
      // name: 'HelloWorld',
      component: member
    },
    {
      path: '/cart',
      // name: 'HelloWorld',
      component: cart
    },
    {
      path: '/search',
      // name: 'HelloWorld',
      component: search
    },
    {
      path: '/home',
      // name: 'HelloWorld',
      component: home
    }
  ]
})
