<template>
  <div class="start">
    <div class="Q_description">
      <p class="Q_text">Outsourced HR and Payroll services eliminates the need for full-time employees on staff. Over
        our 85 years of combined team experience, we have gained a reputation for delivering innovative solutions to
        support our client’s strategic goals.
        We support many sectors and industries, and we support business at all stages of growth from
        high-potential start-ups to well established companies producing turnover in the millions. </p>
    </div>
    <div>
      <button class="button_start" v-on:click="goTo">START NOW!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goTo() {
      this.$router.push('/start');
    }
  }

}
</script>

<style scoped>
.start {
  width: 100%;
  margin-top: 5%;
}

.start div{
  margin: 0 auto;
  text-align: center;
}

.Q_description {
  width: 80%;
}

.Q_text {
  width: 100%;
  line-height: 40px;
  font-size: 25px;
  color: #414040;
  font-family: Charter;
}

.button_start {
  margin: 5%;
  width: 300px;
  height: 70px;
  background: transparent;
  border-radius: 10px;
  border: 3px solid #9ee08f;
  font-size: 30px;
  letter-spacing: 6px;
}

.button_start:hover {
  color: #9ee08f;
}
</style>