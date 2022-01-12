<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Login</h1>
    <div class="card">
      <div class="card-body">
         <span class="text-danger" v-if= "errors.email">
            {{ errors.email }}
          </span>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" class="form-control" v-model="form.email" id="email"/>

        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="form.password" id="password"/>
           <span class="text-danger" v-if= "errors.password">
            {{ errors.password[0] }}
          </span>
        </div>
        <button class="btn btn-primary btn-block" @click.prevent="login">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../api/Users'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: []
    }
  },

  methods: {
    login () {
      User.login(this.form)
        .then(response => {
          // this.$root.$emit('isLoggedIn', true)
          this.eventBus.emit('login', true)
          localStorage.setItem('token', response.data)
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data
          }
        })
    }
  }
}
</script>
