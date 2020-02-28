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
            <select @change="state_collection()" class="Country" v-model= "country">
                <option v-for= "c in country_object" :key="c.id">
                    {{ c.country }}
                </option>
            </select>
          </div>
          <div class="Fields">
            <label>State</label>
          </div>
          <div class="state-class">
            <select class="State" v-model="state">
              <option v-for= "s in state_object" :key="s.id">
                    {{ s }}
                </option>
              
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
          <p>{{date_format()}}</p>
          <div class="GenderClass">
            <div class="Fields">
              <label>Gender</label>
            </div>
            <p>{{gender}}</p>
          </div>
          <div class="Fields">
            <label>Country</label>
          </div>
          <p>{{ country}}</p>

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
import {Countries} from "../constants/constants.js";

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
      state_object:[],
      Hobbies: [],
      warning: "",
      Address: "",
      date: "",
      country_object:Countries
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
    },
    date_format()
    {
        this.date =  this.date.split("-").reverse().join("-");
        return this.date;
    },
    state_collection()
    {
        
        var state = (this.country_object.find(x=> x.country == this.country));
        this.state_object=state.states;
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
