<template>
  <div class="root">
    <div class="row">
      <div class="column">
        <registration :rdata="edata"></registration>
      </div>
      <div class="column">
        <preview :pdata="edata"></preview>
      </div>
    </div>
    <employeeDetails></employeeDetails>
  </div>
</template>

<script>
import { Countries } from "./constants/constants.js";
import registration from "./components/registration_form";
import preview from "./components/preview_form";
import employeeDetails from "./components/Details_display.vue";
var regData = {
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
  components: {
    registration,
    preview,
    employeeDetails
  },
  data() {
    return { edata: regData };
  }
};
</script>

<style scoped lang="css">
.column {
  border-style: groove;
  flex: 50%;
}
.row {
  display: flex;
}
</style>
