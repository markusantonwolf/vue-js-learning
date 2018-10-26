<template>
<div id="app">
  <Header></Header>
  <p>{{ title }}</p>
  <Ninjas v-bind:ninjas="ninjas"></Ninjas>
  <ul>
    <li><a href="https://www.youtube.com/watch?v=yP5Tu3S_FtU" target="_blank">Vue JS 2 Tutorial #18 - Vue Files & The Root Component</a></li>
    <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
    <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
  </ul>
  <h2>Ecosystem</h2>
  <ul>
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  </ul>
  <Footer></Footer>
</div>
</template>

<script>
import Header from './Components/Header.vue'
import Ninjas from './Components/Ninjas.vue'
import Footer from './Components/Footer.vue'
export default {
  name: 'app',

  components: {
    'Header': Header,
    'Ninjas': Ninjas,
    'Footer': Footer
  },
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
      ninjas: [{
          name: 'Hans',
          show: true,
        },
        {
          name: 'Peter',
          show: true,
        },
        {
          name: 'Werner',
          show: true,
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/variables.scss";
@import "./assets/styles/global.scss";
</style>
