import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/Home',
      component: resolve => require(['../components/page/Home.vue'], resolve),
    },
    {
        path: '/login',
        component: resolve => require(['../components/page/Login.vue'], resolve)
    },   
  ]
})
