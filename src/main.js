import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(router).use(store).use(Vuex).mount('#app')

// createApp({
//   router,
//   Vuex,
//   store,
//   created () {
//     const token = localStorage.getItem('token')
//     if (token) {
//       console.log(store)
//       store.commit('setUserData', token)
//     }
//   }
// }).mount('#app')
// // new Vue({
//   router,
//   store,
//   created () {
//     const token =
//   }
//   render: h => h(App)
// }).$mount('#app')
// // const eventBus = mitt()
