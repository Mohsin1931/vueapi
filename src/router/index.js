import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { authOnly: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestOnly: true }
  },

  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestOnly: true }
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { adminOnly: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function isLoggedIn () {
  return localStorage.getItem('token')
}

function isAdmin () {
  return localStorage.getItem('role') === 'admin'
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: '/about',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.adminOnly)) {
    console.log(isAdmin())
    if (isAdmin()) {
      // next({
      //   path: '/dashboard',
      //   query: { redirect: to.fullPath }
      // })
      next()
    }
    // } else {
    //   next()
    // }
  } else {
    next()
  }
})

export default router
