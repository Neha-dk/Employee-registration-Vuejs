<template>
  <div class="employee-table">
    <table border=1>
      <tr>
        <th>Name</th>
        <th>Mail ID</th>
        <th>DOB</th>
        <th>Gender</th>
        <th>Country</th>
        <th>State</th>
        <th>Hobbies</th>
        <th>Address</th>
      </tr>
      <tr v-for="emp in this.tdata" :key="emp.fn">
        <td>{{emp.fn + " "+emp.ln}}</td>
        <td>{{emp.email}}</td>
        <td>{{emp.date}}</td>
        <td>{{emp.gender}}</td>
        <td>{{emp.country}}</td>
        <td>{{emp.state}}</td>
        <td>
          <ol>
            <li v-for="hobby in emp.Hobbies" :key="hobby">{{hobby}}</li>
          </ol>
        </td>
        <td>{{emp.Address}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "employeeDetails",
  props: {
    tdata: Array
  }
};
</script>

<style>
.display {
  float: right;
}

</style>