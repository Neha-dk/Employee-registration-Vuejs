<template>
  <div class="root">
  <registration :rdata="edata"></registration>
  <preview :pdata="edata"></preview>
    
  </div>
</template>

<script>
import { Countries } from "./constants/constants.js";
import registration from "./components/registration_form";
import preview from "./components/preview_form";
var regData =  {
      fn: "",
      ln: "",
      email: "",
      pswd: "",
      Hobbies: [],
      warning: "",
      Address: "",
      date: "",
      gender: "",
      country: "",
      state: "",
      state_object: [],
      country_object: Countries
    };
export default {
  name: "root_registration",
  components:{
    registration,
    preview
  },
  data(){
  return {edata:regData}
  },

};
</script>

<style scoped lang="scss">


</style>
