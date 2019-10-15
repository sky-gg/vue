import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import('@/pages/Home/index.vue')
const NotFound = () => import('@/pages/NotFound/index.vue')

const routes = [
  { path: '/', component: Home },
  { path: '*', component: NotFound }
]

export default new VueRouter({
  routes
})
