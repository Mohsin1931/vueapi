import Vuex from 'vuex'
import user from '../api/Users'

export default new Vuex.Store({
  state: {
    user: [],
    role: null,
    token: null
  },

  mutations: {
    setUserData (state, { user, token, role }) {
      state.token = token
      state.user = user
      // console.log(user)
      state.role = role
      localStorage.setItem('token', token)
      const localUser = localStorage.getItem('user')
      if (!localUser) {
        localStorage.setItem('user', JSON.stringify(user))
      }
      localStorage.setItem('role', role)
      // console.log(user)
      // axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },

    clearUserData () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('role')
      location.reload()
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return user.login(credentials)
        .then(({ data }) => {
          // console.log(data)
          const token = data.token
          const user = data.user
          const role = data.user.role
          // console.log(user)
          commit('setUserData', { user, token, role })
        })
    },

    logout ({ commit }) {
      user.logout()
        .then(commit('clearUserData'))
    }
  },

  getters: {
    isLogged: state => {
      return !!state.token
    },

    isAdmin: state => {
      // console.log(state.user.role)
      return state.role === 'admin'
    },

    userData: state => {
      return state.user
    }
  }
})
