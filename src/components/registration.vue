<template>
  <div class="root">
    <div class="registration-container">
      <h1>Registration</h1>
      <form>
        <div class="form-class">
          <div class="Fields">
            <label>First Name</label>
          </div>
          <input v-model="fn" />

          <div class="Fields">
            <label>Last Name</label>
          </div>
          <input type="text" v-model="ln" />

          <div class="Fields">
            <label>Mail ID</label>
          </div>
          <input @change="mailValidation" type="text" v-model="email" />
          <div class="mailcolor">
            <span>{{warning}}</span>
          </div>

          <div class="Fields">
            <label>Password</label>
          </div>

          <input type="password" v-model="pswd" />

          <div class="Fields">
            <label>Date of Birth</label>
          </div>
          <input type="date" v-model="date" />
          <div class="GenderClass">
            <div class="Fields">
              <label>Gender</label>
            </div>
            
            <div @click="gender_event(0)"><input type="radio" v-model="gender" name="Gender"  value="male" /> Male</div>
            <div @click="gender_event(1)"><input type="radio" v-model="gender" name="Gender"  value="female" />Female</div>
          </div>
          <div class="Fields">
            <label>Country</label>
          </div>
          <div class="country-class">
            <select class="Country" v-model="country">
              <option value="India">India</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div class="Fields">
            <label>State</label>
          </div>
          <div class="state-class">
            <select class="State" v-model="state">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <div class="hobbies-class">
            <div class="Fields">
              <label>Hobbies</label>
            </div>
            <input  type="checkbox" v-model="Hobbies" id="sing" value="Singing" />
            <label for="sing"> Singing</label>
            <input  type="checkbox" v-model="Hobbies" id="dance" value="Dancing" />
  <label for="dance">Dancing</label>
            <input  type="checkbox" v-model="Hobbies" id="story" value="Story Writing" />
     <label for="story">Story Writing</label>
            <input  type="checkbox" v-model="Hobbies" id="games" value="Games" />
    <label for="games">Games</label>
          </div>
          <div class="Fields">
            <label>Address</label>
          </div>
          <textarea v-model="Address">Where is your House</textarea>

          <div class="submission-class" align="right">
            <button class="cancel">Cancel</button>
            <button class="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
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
          <p>{{email}}</p>
          <div class="Fields">
            <label>Password</label>
          </div>
          <p>{{pswd}}</p>
          <div class="Fields">
            <label>Date of Birth</label>
          </div>
          <p>{{date}}</p>
          <div class="GenderClass">
            <div class="Fields">
              <label>Gender</label>
            </div>
            <p>{{gender}}</p>
          </div>
          <div class="Fields">
            <label>Country</label>
          </div>
          <p>{{ country }}</p>

          <div class="Fields">
            <label>State</label>
          </div>
          <div class="state-class">
            <p>{{state}}</p>
          </div>

          <div class="hobbies-class">
            <div class="Fields">
              <label>Hobbies</label>
            </div>
            <ol>
              <li v-for="hobby in Hobbies" :key="hobby">{{hobby}}</li>
            </ol>
          </div>
          <div class="Fields">
            <label>Address</label>
          </div>
          <p>{{Address}}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration",
  props: {
    msg: String
  },
  data() {
    return {
      fn: "",
      ln: "",
      email: "",
      pswd: "",
      country: "",
      gender: "",
      state: "",
      Hobbies: [],
      warning: "",
      Address: "",
      date: ""
    };
  },
  methods: {
    fullname() {
      return this.fn + " " + this.ln;
    },
    mailValidation() {
      var id = this.email;
      this.warning = id.endsWith("@gmail.com") ? "" : "Invalid Email";
    },
    gender_event(index)
    {
        document.getElementsByName("Gender")[index].checked = true;
        this.gender = document.getElementsByName("Gender")[index].value;
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
  border: 1px solid #000;
  padding: 10%;
  padding-top: 0px;
  float: right;
}
.registration-container {
  float: left;
  padding: 10%;
  padding-top: 0px;
  border: 1px solid #000;
}
body {
  .Form-class {
    margin: 30px 30px;
    padding: 10px;
    background-color: #d3d3d3;
  }
}
.Form-class {
  .fields {
    margin-top: 5px;
  }
}
.Form-class {
  select {
    margin-top: 2px;
    margin-bottom: 6px;
  }
}
.submit {
  background-color: #003399;
}

.cancel {
  background-color: #a9a9a9;
}
</style>
