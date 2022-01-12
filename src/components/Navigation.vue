<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" :to="{ name: 'Dashboard' }">Laravel Sanctum</router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link class="nav-item nav-link" :to="{ name: 'Login'}" v-if="!isLoggedIn">
          Login
        </router-link>
         <router-link class="nav-item nav-link" :to="{ name: 'Register'}" v-if="!isLoggedIn">
          Register
        </router-link>
        <router-link class="nav-item nav-link" :to="{ name: 'Dashboard'} " v-if="isLoggedIn">
          Dashboard
        </router-link>
        <a class="nav-item nav-link" @click.prevent="logout" href="#" v-if="isLoggedIn">Logout</a>
      </ul>
      </div>
  </nav>
</template>

<script>
import User from '../api/Users'
export default {
  name: 'NavBar',

  data () {
    return {
      isLoggedIn: false
    }
  },

  methods: {
    logout () {
      User.logout().then(() => {
        localStorage.removeItem('token')
        this.isLoggedIn = false
        this.$router.push({ name: 'Login' })
      })
    }

  },

  mounted () {
    this.eventBus.on('login', () => {
      this.isLoggedIn = true
    })
    this.isLoggedIn = !!localStorage.getItem('token')
  }
}
</script>
