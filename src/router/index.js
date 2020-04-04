import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reports from '../views/Reports.vue'
import Report from '../views/Report.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/reports',
    name: 'reports',
    component: Reports
  },
  {
    path: '/reports/:id',
    name: 'report',
    component: Report
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
