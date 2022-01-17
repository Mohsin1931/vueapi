<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h1>About</h1>
    <h5>{{ userData['name'] }}</h5>
    <h6>{{ userData['email'] }}</h6>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { store } from '../store/index'
// import User from '../api/Users'
export default {
  // data () {
  //   return {
  //     user: store.getters.usersData
  //   }
  // }

  computed: mapGetters([
    // user: state => state.user
    'userData'
  ])

  // mounted () {
  //   User.auth().then(response => {
  //     console.log(response.data)
  //     this.user = response.data
  //   })
  // }
}
</script>
