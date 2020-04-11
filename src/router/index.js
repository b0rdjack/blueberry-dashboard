import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reports from '../views/Reports.vue'
import Report from '../views/Report.vue'
import Users from '../views/Users.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
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
  {
    path: "/users",
    name: "users",
    component: Users
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
