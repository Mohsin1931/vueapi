<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h1>Dashboard</h1>
    <div class="card">
      <!-- <div class="card-body" v-if="user">
        <h3>Hello , {{ user.name }}</h3>
        <span>{{ user.email }}</span>
      </div> -->
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <!-- <div v-for="(user,index) in users" :key="index"> -->
            <tr v-for="(user,index) in users" :key="index">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            </tr>
          <!-- </div> -->
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
import User from '../api/Users'
export default {
  data () {
    return {
      users: []
    }
  },

  mounted () {
    User.auth().then(response => {
      // console.log(response.data[0])
      this.users = response.data
    })
  }

}
</script>
