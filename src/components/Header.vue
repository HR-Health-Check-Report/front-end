<template>
  <div class="container">
    <div class="header">
      <ul style="list-style-type: none; text-align: right;">
        <li class="header-li">
          <a class="li-a" href="">Book a Discovery Call</a >
          <span>|</span>
        </li>
        <li class="header-li">
          <a class="li-a" href="">Send a Message</a >
          <span>|</span>
        </li>
        <li class="header-li">
          <a class="li-a" href="">01 6102688</a >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.container{
  height: 36px;
  text-align: right;
  border-bottom: 1px solid #efeded;
  position: relative;
}
.header{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-13%,-50%);
}
.li-a, span{
  color: #414040;
}

span{
  margin: 0 8px;
}
.li-a:hover{
  color: #9ee08f;
}
.header-li{
  text-align: center;
  font-size: 10px;
  display: inline-block;
}

</style>