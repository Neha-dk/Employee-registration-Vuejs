<template>
  <div class="preview-container">
    <h1>Preview</h1>
    <form>
      <div class="form-class">
        <div class="Fields">
          <label>Full Name</label>
        </div>
        <p>{{fullname()}}</p>
        <div class="Fields">
          <label>Mail ID</label>
        </div>
        <p>{{pdata.email}}</p>
        <div class="Fields">
          <label>Password</label>
        </div>
        <p>{{pdata.pswd}}</p>
        <div class="Fields">
          <label>Date of Birth</label>
        </div>
        <p>{{date_format()}}</p>
        <div class="GenderClass">
          <div class="Fields">
            <label>Gender</label>
          </div>
          <p>{{pdata.gender}}</p>
        </div>
        <div class="Fields">
          <label>Country</label>
        </div>
        <p>{{ pdata.country}}</p>

        <div class="Fields">
          <label>State</label>
        </div>
        <div class="state-class">
          <p>{{pdata.state}}</p>
        </div>

        <div class="hobbies-class">
          <div class="Fields">
            <label>Hobbies</label>
          </div>
          <ol>
            <li v-for="hobby in pdata.Hobbies" :key="hobby">{{hobby}}</li>
          </ol>
        </div>
        <div class="Fields">
          <label>Address</label>
        </div>
        <p>{{pdata.Address}}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name:"preview",
    props:{
        pdata:{}
    },
    methods: {
    fullname() {
      return this.pdata.fn + " " + this.pdata.ln;
    },
    date_format()
    {
        this.pdata.date =  this.pdata.date.split("-").reverse().join("-");
        return this.pdata.date;
    }

  }
};
</script>

<style scoped lang="scss">
label
{
    font-weight: bold;
}
.preview-container {
  // border: 1px solid #000;
  padding: 10%;
  padding-top: 0px;
  // float: right;
}

body {
  .Form-class {
    margin: 30px 30px;
    padding: 10px;
    background-color: #d3d3d3;
  }
}

.submit {
  background-color: #003399;
}

.cancel {
  background-color: #a9a9a9;
}
</style>