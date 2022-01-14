<template>
  <div class="info">
    <div class="decr" :style="bgImg">
      <p>
        Outsourced HR and Payroll services eliminates the need for full-time employees on staff. Over
        our 85 years of combined team experience, we have gained a reputation for delivering innovative
        solutions to support our client’s strategic goals. We support many sectors and industries, and
        we support business at all stages of growth from high-potential start-ups to well established
        companies producing turnover in the millions.
      </p>
    </div>
    <div class="form">
      <el-row>
        <el-col>
          <div class="title">
            Something about you
          </div>
        </el-col>
        <el-col>
          <el-form :model="startForm" class="el-form" :rules="rules" size="medium" ref="form">
            <el-form-item class="item" label="Your Company Name" prop="companyName">
              <el-input class="input" type="text" v-model="startForm.companyName"></el-input>
            </el-form-item>
            <el-form-item class="item" label="Business Sector" prop="businessSector">
              <el-input class="input" type="text" v-model="startForm.businessSector"></el-input>
            </el-form-item>
            <el-form-item class="item" label="Number of employees" prop="numberOfEmployees">
              <el-input class="input" oninput="value=value.replace(/[^\d]/g,'')" v-model="startForm.employeeNumber"></el-input>
            </el-form-item>
            <el-form-item class="item" label="Company Location" prop="companyLocation">
              <el-input class="input" type="text" v-model="startForm.companyLocation"></el-input>
            </el-form-item>

            <el-col :span="12">
              <el-form-item class="item" label="Contact Name" prop="contactName">
                <el-input class="input" type="text" v-model="startForm.contactName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="item" label="Contact Job Title" prop="contactJobTitle">
                <el-input class="input" type="text" v-model="startForm.contactJobTitle"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="item" label="Contact Telephone" prop="contactTelephone">
                <el-input class="input" oninput="value=value.replace(/[^\d]/g,'')" v-model="startForm.contactTelephone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="item" label="Contact Email" prop="contactEmail">
                <el-input class="input" type="email" v-model="startForm.contactEmail"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item class="start-button">
                <br>
                <button type="primary" v-on:click="onSubmit" class="submit">
                  <span>Continue</span>
                </button>
              </el-form-item>
            </el-col>
          </el-form>
        </el-col>

      </el-row>
    </div>
  </div>

</template>

<script>
import infobgurl from '../assets/infoPage.jpg'
// import axios from "axios";

export default {
  name: "Start",

  data() {
    return {
      startForm: {
        companyName: "",
        businessSector: "",
        employeeNumber: "",
        companyLocation: "",
        contactName: '',
        contactJobTitle: "",
        contactEmail: "",
        contactTelephone: "",
      },
      rules: {
        companyName: [
          {required: true, message: 'Please enter your company name!', trigger: 'blur'},
          {min: 1, max: 20, message: 'The company name must between 1 and 20 characters!', trigger: 'blur'}
        ],
        businessSector: [
          {required: true, message: 'Please enter your business sector!', trigger: 'blur'},
          {min: 1, max: 10, message: 'The business sector must between 1 and 10 characters!', trigger: 'blur'}
        ],
        employeeNumber: [
          {required: true, message: 'Number of your employees cannot be empty!'},
          // {min: 1,type: 'number', message: 'Number of your employees must be a number!', trigger: 'blur'},
        ],
        companyLocation: [
          {min: 1, max: 30, message: 'The location of your company must between 1 and 30 characters!', trigger: 'blur'}
        ],
        contactEmail: [
          {required: true, message: 'Please enter your E-mail!', trigger: 'blur'},
          {type: 'email', message: 'Incorrect E-mail format!', trigger: 'blur'}
        ],
        contactTelephone: [
          {required: true, message: 'Please enter your phone number!', trigger: 'blur'},
          // {type: 'number', message: 'Incorrect telephone format!', trigger: 'blur'}
        ]
      },
      bgImg: {
        backgroundImage: "url(" + infobgurl + ")"
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$router.push({
            path:'/Questionnaire',
            name:'Questionnaire',
            params: this.startForm
          });

        } else {
          if(document.getElementsByClassName('el-form-item__error').length>0){
            this.$notify.error({
              title: '提示',
              message: document.getElementsByClassName('el-form-item__error')[0].innerText
            });
          }
          setTimeout(()=>{
            var isError= document.getElementsByClassName("is-error");
            isError[0].querySelector('input').focus();
          },100);
          return false;
        }
      })

    }
  },
  // sendData(){
  //   axios.post("getquestionnaire",this.startForm)
  // }
}
</script>

<style scoped>
.info {
  width: 100%;
  background-color: #ABD16F;
  position: relative;
}

.info div {
  display: inline-block;
  vertical-align: top;
}

.decr {
  display: inline-block;
  margin: 3% 2%;
  margin-left: 2%;
  padding: 5% 2%;
  width: 40%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;
  border-radius: 6px;
}

p {
  font-size: 25px;
  color: white;
  font-family: "Apple Braille";
  line-height: 250%;
}

.form {
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 1%;
  color: white;
  width: 45%;
  font-family: inherit;
  border: 3px solid white;
  border-radius: 25px;
  padding: 20px;
}

.form div {
  display: block;
}

.el-form {
  font: inherit;
  font-family: inherit;
  font-size: large;
  color: white;
}

.title {
  font-family: "Apple Braille";
  font-size: 40px;
}

.item >>> .el-form-item__label {
  color: white;
  font: inherit;
}

.input >>> .el-input__inner {
  border: none;
  width: 98%;
}

.start-button {
  text-align: center;
}

.submit {
  border: none;
  background-color: #70AD47;
  color: white;
  font-size: 30px;
  border-radius: 8px;
  margin: auto;
  width: 50%;
}

.submit span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.submit span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.submit:hover span {
  padding-right: 25px;

}

.submit:hover span:after {
  opacity: 1;
  right: 0;
}

.submit:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>