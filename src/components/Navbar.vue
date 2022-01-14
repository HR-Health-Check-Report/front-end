<template>
  <div class="navbar">
    <div>
      <a href="">
        <div class="nav-logo">
          <img
              src="https://albatel.ie/wp-content/uploads/2021/03/new-logo.jpg"
              data-src="https://albatel.ie/wp-content/uploads/2021/03/new-logo.jpg"
              class="custom-logo lazy loaded" alt="ALBATEL"
              data-srcset="https://albatel.ie/wp-content/uploads/2021/03/new-logo.jpg 1x, https://albatel.ie/wp-content/uploads/2021/03/new-logo.jpg 2x"
              srcset="https://albatel.ie/wp-content/uploads/2021/03/new-logo.jpg 1x, https://albatel.ie/wp-content/uploads/2021/03/new-logo.jpg 2x"
              data-was-processed="true">
        </div>
      </a>
    </div>
    <div class="main-ul">
      <div class="main-li">
        <a href="">ABOUT US</a>
      </div>
      <div class="main-li">
        <a href="">SERVICES</a>
      </div>
      <div class="main-li">
        <a href="">BLOG&RESOURCES</a>
      </div>
      <div class="main-li">
        <a href="">CONTACT US</a>
      </div>
      <div class="main-li">
        <a href="">$0.00</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}

</script>

<style>
.navbar {
  padding: 0px 120px;
  position: relative;
  border-bottom: 1px solid #9ee08f;
}

.navbar div {
  display: inline-block;
  vertical-align: top;
}

.nav-logo img {
  width: 293px;
  height: 116px;
}

.nav-logo {
  position: relative;
}

.nav-logo::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
}

.nav-logo:hover::before {
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.5;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
}

.main-ul {
  margin-left: 16%;
  list-style-type: none;
  text-align: center;
}

.main-li {
  display: inline-block;
  margin: 30px 20px;
  font-size: 19px;
  position: relative;
}

.main-li a {
  color: #414040;
  font-family: Courier;
}

.main-li::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 0;
  width: 0px;
  height: 100%;
  border-bottom: 2px solid rgb(145, 198, 84);
  transition: width 0.4s;
  -webkit-transition: width 0.4s;
}

.main-li:hover::after {
  width: 100%;
  height: 100%;
  transition: width 0.4s;
  -webkit-transition: width 0.4s;
}

.main-li:hover a {
  color: #70AD47;
}
</style>