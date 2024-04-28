import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:8000/api/'
require('@/store/subcriber')
import '@/styles/app.css'


store.dispatch('auth/attempt',localStorage.getItem('token')).then(()=>{
    createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
})

