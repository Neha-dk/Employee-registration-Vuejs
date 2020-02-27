<template>
    <div class="root">
        <div class="registration-container">
            <h1>Registration</h1>
            <form>
                <div class="form-class">

                    <div class="Fields"><label>First Name</label><br></div>
                    <input v-model="fn"><br>
                    <div class="Fields"><label>Last Name</label><br></div>
                    <input type="text" v-model="ln"><br>
                    <div class="Fields"><label>Mail ID</label><br></div>
                    <input @change="mailValidation" type="text" v-model="email">
                    <div class="mailcolor" v-bind:style="{color: red}"><span v-bind:style="{ color: red}">{{warning}}</span></div>
                    
                    <div class="Fields"><label>Password</label><br></div>
                    <input type="password" v-model="pswd"><br>
                    <div class="GenderClass">
                        <div class="Fields"><label>Gender</label><br></div>
                        <input type="radio" v-model="gender" value="male">Male
                        <input type="radio" v-model="gender" value="female">Female<br>
                    </div>
                    <div class="Fields"><label>Country</label><br></div>
                    <div class="country-class">
                        <select class="Country"  v-model = "country">
                            <option value="India">India</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="China">China</option>
                            <option value="Japan">Japan</option>

                        </select><br>
                    </div>
                    <div class="Fields"><label>State</label><br></div>
                    <div class="state-class">
                        <select class="State" v-model = "state">
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Tamilnadu">Tamilnadu</option>
                            <option value="Delhi">Delhi</option>

                        </select><br>
                    </div>
                    <div class="hobbies-class">
                        <div class="Fields"><label>Hobbies</label><br></div>
                        <input id="1" type="checkbox" v-model="Hobbies" value="Singing"> Singing<br>
                        <input type="checkbox" v-model="Hobbies" value="Dancing"> Dancing<br>
                        <input type="checkbox" v-model="Hobbies" value="Story Writing"> Story Writing<br>
                        <input type="checkbox" v-model="Hobbies" value="Games"> Games<br>
                    </div>
                    <div class="Fields"><label>Address</label><br></div>
                    <textarea v-model="Address">Where is your House</textarea><br>
                    <div class="submission-class" align="right">
                        <button class="Cancel">Cancel</button>
                        <button class="Submit">Submit</button>
                    </div>

                </div>


            </form>
        </div>
        <div class="preview-container">
            <h1>Preview</h1>
            <form>
                <div class="form-class">

                    <div class="Fields"><label>Full Name</label><br></div>
                    <p>{{fullname()}}</p>
                    <div class="Fields"><label>Mail ID</label><br></div>
                    <p>{{email}}</p>
                    <div class="Fields"><label>Password</label><br></div>
                    <p>{{pswd}}</p>
                    <div class="GenderClass">
                        <div class="Fields"><label>Gender</label><br></div>
                        <p>{{gender}}</p>
                    </div>
                    <div class="Fields"><label>Country</label><br></div>
                    <p>{{ country }}</p>

                        <br>
                   
                    <div class="Fields"><label>State</label><br></div>
                    <div class="state-class">
                        <p>{{state}}</p>
                    </div>
                    
                    <div class="hobbies-class">
                        <div class="Fields"><label>Hobbies</label><br></div>
                        <ol>
                            <li v-for = "hobby in Hobbies" :key="hobby">
                                {{hobby}}
                            </li>
                        </ol>
                    </div>
                    <div class="Fields"><label>Address</label><br></div>
                    <p>{{Address}}</p>
                </div>


            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'registration',
  props: {
    msg: String
  },
  data()
  {
      return {
          fn:"",
        ln:"",
        email:"",
        pwd:"",
        country:"",
        gender:"",
        state:"",
        Hobbies:[],
        warning:"",
        Address:""
      }
  },
  methods:
  {
       fullname(){
            return this.fn+" "+this.ln;
        },
         mailValidation()
        {
            var id = this.email;
            this.warning=(id.endsWith("@gmail.com"))? "" : "Invalid Email";
        }
  }
}

</script>

<style scoped>
.preview-container
{
  border: 1px solid #000;
  padding: 10%;
  padding-top: 0px;
  float: right;
}
.registration-container
{
  float: left;
    padding: 10%;
  padding-top: 0px;
  border: 1px solid #000;
}
body .Form-class
{
    background-color: #d3d3d3;

}
.Form-class
{
    margin : 30px 30px;
    padding: 10px;
}
.Form-class .fields
{
    margin-top: 5px;
  
}
.Form-class select
{
    margin-top: 2PX;
    margin-bottom: 6px;
}
.submit
{
    background-color: #003399;
}

.cancel
{
    background-color : #a9a9a9 ;
}
</style>
