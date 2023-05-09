import { createApp } from 'vue'
import App from './App.vue'


import StatesAPIService from '@/services/stateService'

import router from '@/router'

let app = createApp(App)

app.config.globalProperties.$stateService = StatesAPIService

app.use(router)

app.mount('#app')
