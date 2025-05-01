import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', redirect: '/signin' },
  { path: '/signup', component: Signup },
  { path: '/signin', component: Signin },
  { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
