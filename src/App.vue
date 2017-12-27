<template>
  <div id="app" class="container">
    <!-- <img src="./assets/logo.png"> -->
    <v-navbar></v-navbar>
    <router-view/>
    <hr>
    <ul v-for="link in links">
      <li v-for="sub in link.subs">
        <router-link :to="sub.route">{{sub.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  data() {
    return {
      links: [
        {name: 'Sorting', subs: [{name: 'Bubble Sort', route: 'bubble'}]}
      ]
    }
  },
  components: {
    vNavbar: Navbar
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "./assets/sass/util.scss";
#app {
  font-family: 'Ubuntu', Arial, sans-serif;
}
.navbar {
  background: #444;
  padding: 16px;
}
.navbar a {
  color: #fff;
}
</style>
