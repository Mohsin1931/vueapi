import Vuex from 'vuex'
import user from '../api/Users'

export default new Vuex.Store({
  state: {
    role: null,
    token: null
  },

  mutations: {
    setUserData (state, { role, token }) {
      state.token = token
      state.role = role
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
      // axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },

    clearUserData () {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      location.reload()
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return user.login(credentials)
        .then(({ data }) => {
          // console.log(data.token)
          const token = data.token
          const role = data.user.role
          commit('setUserData', { role, token })
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
      console.log(state.role)
      return state.role === 'admin'
    }
  }
})
