import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import 'lib-flexible'
import router from './router'
import * as con from './constant'
Vue.prototype.con = con

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
