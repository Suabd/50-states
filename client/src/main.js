import { createApp } from 'vue'
import App from './App.vue'

import StatesAPIService from '@/services/stateService'

let app = createApp(App)

app.config.globalProperties.$stateService = StatesAPIService

app.mount('#app')
