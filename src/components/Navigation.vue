<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">Laravel Sanctum</router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link class="nav-item nav-link" :to="{ name: 'Login'}" v-if="!isLogged">
          Login
        </router-link>
         <router-link class="nav-item nav-link" :to="{ name: 'Register'}" v-if="!isLogged">
          Register
        </router-link>
        <router-link class="nav-item nav-link" :to="{ name: 'Dashboard'} " v-if="isLogged && isAdmin">
          Dashboard
        </router-link>
        <a class="nav-item nav-link" @click.prevent="logout" href="#" v-if="isLogged">Logout</a>
      </ul>
      </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',

  computed: {
    ...mapGetters([
      'isLogged',
      'isAdmin'
    ])
  },

  methods: {
    logout () {
      this.$store
        .dispatch('logout')
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
    }
  }
}
</script>
