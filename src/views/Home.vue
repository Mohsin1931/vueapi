<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h1>Home</h1>
    <h1>{{ user }}</h1>
  </div>
</template>
<script>
import User from '../api/Users'
export default {

  data () {
    return {
      user: null
    }
  },

  mounted () {
    User.auth().then(response => {
      this.user = response.data
    })
  }
}
</script>
