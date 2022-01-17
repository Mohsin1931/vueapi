<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Login</h1>
    <div class="card">
      <div class="card-body">
         <span class="text-danger" v-if= "errors.email">
            {{ errors.email[0] }}
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
      this.$store
        .dispatch('login', {
          email: this.form.email,
          password: this.form.password
        })
        .then(() => {
          // console.log(this.isAdmin())
          if (this.isAdmin()) {
            this.$router.push({ name: 'Dashboard' })
          } else {
            // console.log('anout')
            this.$router.push({ name: 'About' })
          }
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
          }
        })
    },

    isAdmin () {
      return localStorage.getItem('role') === 'admin'
    }
  }

}
</script>
