import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    beforeEnter: (to, from, next)=>{
      if(store.getters['auth/authenticated']){
        return next({
          name:'dashboard'
        })
      }
      next();
    }
  },
  
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/LandingView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    beforeEnter: (to, from, next)=>{
      if(store.getters['auth/authenticated']){
        return next({
          name:'dashboard'
        })
      }
      next();
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/HomeView.vue'),
    beforeEnter: (to, from, next)=>{
      if(!store.getters['auth/authenticated']){
        return next({
          name:'login'
        })
      }
      next();
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
