import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import PostList from '@/components/PostList'
import UserList from '@/components/UserList'
import SingleUser from '@/components/SingleUser'
import AppUser from '@/components/AppUser'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path:'/posts', component:PostList},
  { path:'/users/:id', component:AppUser},
  { path:'/users', component:UserList},
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
    render: h => h(App),
}).$mount('#app')
