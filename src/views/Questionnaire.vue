<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="8">
          <div class="questions-title-list">
            <h2>Classify</h2>
            <ul class="questions-title-ul">
              <li v-for="(item,questionIndex) in questionnaire" :key="item.index" :index="questionIndex">
                <div class="title-button-div">
                  <button :id="'button'+ questionIndex" class="title-button" v-on:click="selectedPage(questionIndex)">{{ item.title }}</button>
                </div>
              </li>
            </ul>
          </div>
        </el-col>

        <el-col :span="16">
          <div class="questions">
            <div class="questions-title">
              <h2>{{ questionnaire[index].title }}</h2>
            </div>
            <div class="questions-body">
              <ul>
                <li v-for="(item) in questionnaire[index].questions" :key="item.index">
                  {{ item.question }}<br>
                  <div class="selected-button-div">
                    <input :id="item.id+'green'" type="radio" :name="item.id" value="GREEN" v-model="item.choose">
                    <label class="selected-button" id="greenButton" :for="item.id+'green'">GREEN</label>

                    <input :id="item.id+'amber'" type="radio" :name="item.id" value="AMBER" v-model="item.choose">
                    <label class="selected-button" id="amberButton" :for="item.id+'amber'">AMBER</label>

                    <input :id="item.id+'red'" type="radio" :name="item.id" value="RED" v-model="item.choose">
                    <label class="selected-button" id="redButton" :for="item.id+'red'">RED</label>

                  </div>
                </li>
              </ul>
            </div>
            <div class="page-button-div">
              <button class="page-button" v-if="!isFirst" v-on:click="previous">Previous</button>
              <button class="page-button" v-if="!isLast" v-on:click="next">Next</button>
              <button class="page-button" v-if="isLast" v-on:click="finish">Finish</button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>


export default {
  name: "Questionnaire",
  beforeCreate() {

  },
  mounted() {
    this.getData();
    this.companyInfo = this.$route.params;
    this.changeColor();
    document.getElementById("button" + 0).style.backgroundColor = "#9ee08f"
  },
  data() {
    return {
      index: 0,
      isFirst: true,
      isLast: false,
      quesData: {},
      questionnaire: [],
      companyInfo:{},
      Answer: {
        group:'',
        answerList:[]
      },
    }
  },
  methods: {
    previous() {
      this.index--;
      if (this.index === 0) {
        this.isFirst = true;
      }
      this.isLast = false;
      this.changeColor(this.index);
    },
    next() {
      this.index++;
      if (this.index === this.questionnaire.length - 1) {
        this.isLast = true;
      }
      this.isFirst = false;
      this.changeColor(this.index);
    },
    selectedPage(questionIndex) {
      this.index = questionIndex;
      if (this.index === 0) {
        this.isFirst = true;
        this.isLast = false;
      }
      if (this.index === this.questionnaire.length - 1) {
        this.isLast = true;
        this.isFirst = false;
      }
      this.changeColor(this.index);
    },

    finish() {

      this.companyInfo.answerCard = [];
      for (let i = 0; i < this.questionnaire.length; i++) {
        let tempAnswerCard = {};
        this.Answer.group = this.questionnaire[i].title;
        for (let j = 0; j < this.questionnaire[i].questions.length; j++) {
          let choose = -1;
          if (this.questionnaire[i].questions[j].choose === "GREEN") choose = 0;
          else if (this.questionnaire[i].questions[j].choose === "AMBER") choose = 1;
          else if (this.questionnaire[i].questions[j].choose === "RED") choose = 2;
          else {
            alert("YOU DO NOT FINISH THE QUESTIONNAIRE!")
            return
          }
          this.Answer.answerList.push({
            'id': this.questionnaire[i].questions[j].id,
            'choose': choose
          })
        }
        tempAnswerCard.group= this.Answer.group;
        tempAnswerCard.answerList= this.Answer.answerList;
        this.companyInfo.answerCard.push(tempAnswerCard);
        this.Answer.answerList=[];
      }
      // this.companyInfo.answerCard = this.answerCard;
      console.log(this.companyInfo)
      this.sendData()
      this.$router.push('/PDFDownload');
    },

    async getData() {
      const {data: res} = await this.$http.get("getquestionnaire");
      this.questionnaire = res;
    },

    async sendData(){
      const {data : res} = await this.$http.post("sendanswercard", this.companyInfo);
      console.log(res);
    },

    changeColor(questionIndex){
      for (let i =0;i<this.questionnaire.length;i++){
        if (i===questionIndex){
          document.getElementById("button"+i).style.backgroundColor="#9ee08f"
        }
        else{
          document.getElementById("button"+i).style.backgroundColor="white"
        }
      }
    },
  },
}
</script>

<style scoped>

el-container {
  background-color: #a4e2a4;
}

.questions-title-list {
  width: 90%;
}

.questions-title-list h2 {
  font-size: 40px;
  color: #585858;
  margin: 5%;
}

.questions-title-ul {
  margin: 10%;
}

.questions-title-ul li {
  border: 1px solid #9ee08f;
  margin-bottom: -1px;
}

.title-button-div {
  width: 100%;
  margin: 0px;
}

.title-button {
  width: 100%;
  border: none;
  padding: 5% 20px;
  font-size: 20px;
  border-radius: 0px;
  background-color: white;
}

.questions {
  margin-right: 3%;
  padding: 7%;
  border: 1px solid #9ee08f;
  border-radius: 25px;
}

.questions-title {
  font-family: "Apple Braille";
  font-size: 25px;
  color: #585858;
  letter-spacing: 2px;
  margin-bottom: 3%;
}

.questions-body {
  font-size: 20px;
  letter-spacing: 2px;
}

.selected-button-div {
  margin: 3%;
  margin-left: 0px;
}

.selected-button {
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 13px;
  padding: 1%;
  font-size: 15px;
}

input {
  display: none;
}

#greenButton {
  border: 2px solid #a4e2a4;
}

input:checked + #greenButton {
  background-color: #a4e2a4;
}

#amberButton {
  border: 2px solid #fdd8a5;
}

input:checked + #amberButton {
  background-color: #fdd8a5;
}

#redButton {
  border: 2px solid #ee9898;
}

input:checked + #redButton {
  background-color: #ee9898;
}

ul {
  list-style: none;
}

.page-button-div {
  margin-top: 50px;
}

.page-button {
  border: none;
  width: 20%;
  margin-right: 20px;
  border-radius: 13px;
  padding: 1%;
  font-size: 20px;
}

</style>