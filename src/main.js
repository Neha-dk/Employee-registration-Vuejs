import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './components/home';
// import root_registration from './root_registration.vue'
import registration_preview from "./components/registrationPreview";
// import preview from "./components/preview_form";
import employeeDetails from "./components/Details_display.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/register-preview', component: registration_preview, props: true
  },
  {
     path: '/table', component: employeeDetails, props: true
  }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(home),
  router
}).$mount('#app')
