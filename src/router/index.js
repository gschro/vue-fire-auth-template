import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/views/partial/Footer'
import NavBar from '@/views/partial/NavBar'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'
import Login from '@/views/Login'
import Persons from '@/views/Persons'

Vue.use(Router)

export default new Router({
  mode: 'history',
  abstract: true,
  scrollBehavior (to, from, savedPosition) {
    window.scrollTo(0, 0)
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        navbar: NavBar,
        default: Home,
        footer: Footer
      }
    },
    {
      path: '/Login',
      name: 'Login',
      components: { navbar: NavBar, default: Login, footer: Footer }
    },
    {
      path: '/Persons',
      name: 'Persons',
      components: { navbar: NavBar, default: Persons, footer: Footer }
    },
    {
      path: '*',
      components: { navbar: NavBar, default: NotFound, footer: Footer }
    }
  ]
})
