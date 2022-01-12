import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const eventBus = mitt()
const app = createApp(App).use(router)

app.config.globalProperties.eventBus = eventBus
// createApp(App).use(router).mount('#app')
app.mount('#app')
