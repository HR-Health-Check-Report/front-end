<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
    <!--    <Footer></Footer>-->
  </div>
</template>


<script>
import Navbar from './components/Navbar'
import Header from "./components/Header";
// import Footer from './components/Footer'
export default {
  name: 'App',
  data() {
    return {
      height: 0
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },
  components: {
    Navbar,
    Header
    // Footer
  }
}
</script>

<style>
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, fieldset, legend, input, textarea, p, blockquote, th, td {
  margin: 0;
  padding: 0
}

a {
  text-decoration: none
}
</style>
