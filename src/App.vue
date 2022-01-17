<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/Navigation.vue'

export default {

  components: {
    NavBar
  },

  mounted () {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))
    const role = localStorage.getItem('role')
    console.log(user)
    if (token) {
      this.$store.commit('setUserData', { user, token, role })
    }
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
