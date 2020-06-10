import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/signup.vue'
import SendLetter from '../components/sendletter.vue'
import ReceivedLetter from '../components/receivedletter.vue'
import SentLetter from '../components/sentletters.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/sendletter',
    name: 'SendLetter',
    component: SendLetter
  },
  {
    path: '/receivedletter',
    name: 'ReceivedLetter',
    component: ReceivedLetter
  },
  {
    path: '/sentletter',
    name: 'SentLetter',
    component: SentLetter
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
