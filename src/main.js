import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faExclamationTriangle, faUser, faUserCog, faSignOutAlt, faEdit, faEye, faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass';

// Install BootstrapVue
Vue.use(BootstrapVue)
library.add(faExclamationTriangle)
library.add(faUser)
library.add(faUserCog)
library.add(faSignOutAlt)
library.add(faTrashAlt)
library.add(faCheckCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
