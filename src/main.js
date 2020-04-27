import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import $http from './services/queryService'
import $nav from './utils/nav'
import GlobalLoading from './utils/globalLoading'

import './styles/'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use($http)
Vue.use($nav)
Vue.prototype.$globalLoading = GlobalLoading

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
