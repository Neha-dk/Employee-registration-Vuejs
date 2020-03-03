import Vue from 'vue'
// import App from './App.vue'
import root_registration from './root_registration.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(root_registration),
}).$mount('#app')
