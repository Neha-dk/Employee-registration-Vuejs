<template>
<div class="header">
  <div class="topnav">
      <router-link class="active" to="/">HOME</router-link>
      <router-link to="/register">REGISTER</router-link>
</div>
<router-view></router-view>
</div>


</template>

<script>
export default {
name:'home'
}
</script>

<style>

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>