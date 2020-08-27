import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import kcb from '../components/kcb.vue'

Vue.use(VueRouter)

  const routes = [
    { 
      path:'/login',
      component:login
    },
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/kcb',
      component:kcb
    }
]

const router = new VueRouter({
  routes
})

export default router
