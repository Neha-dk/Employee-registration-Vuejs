<template>
  <div class="RP">
    <div class="row">
      <div class="column">
        <registration :rdata="edata"></registration>
      </div>
      <div class="column">
        <preview :pdata="edata"></preview>
      </div>
    </div>
  </div>
</template>

<script>
import { Countries } from "../constants/constants";
import registration from "./registration_form";
import preview from "./preview_form";
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
  name: "registration_preview",
  components: {
    registration,
    preview
  },
  data() {
    return { edata: regData, employeeList: [] };
  }
};
</script>

<style>
.column {
  border-style: groove;
  flex: 50%;
}
.row {
  display: flex;
}
</style>