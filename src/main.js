import Vue from 'vue'
// import App from './App.vue'
import registration from './components/registration.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(registration),
}).$mount('#app')
