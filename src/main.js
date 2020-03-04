import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './components/home';
// import root_registration from './root_registration.vue'
import registration from "./components/registration_form.vue";
// import preview from "./components/preview_form";
import employeeDetails from "./components/Details_display.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'/register', component: registration
  },
  {
    path:'/', component: employeeDetails
  }
]

const router  = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(home),
  router
}).$mount('#app')
