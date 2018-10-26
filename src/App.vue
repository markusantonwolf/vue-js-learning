<template>
<div id="app">
  <Header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></Header>
  <p>{{ title }}</p>
  <Ninjas v-bind:ninjas="ninjas"></Ninjas>
  <ul>
    <li><a href="https://www.youtube.com/watch?v=yP5Tu3S_FtU" target="_blank">Vue JS 2 Tutorial #18 - Vue Files & The Root Component</a></li>
    <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
    <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
  </ul>
  <h2>Ninjas</h2>
  <ul>
    <li v-for="ninja in ninjas">
      {{ninja.name}}
    </li>
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
      ninjas: [
        {
          id: '1',
          name: 'Hans',
          show: true,
        },
        {
          id: '2',
          name: 'Peter',
          show: true,
        },
        {
          id: '3',
          name: 'Werner',
          show: true,
        }
      ]
    }
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/variables.scss";
@import "./assets/styles/global.scss";
</style>
