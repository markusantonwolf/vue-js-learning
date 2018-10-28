<template>
<div id="app">
  <app-navigation></app-navigation>
  <div class="main">
      <router-view></router-view>

  </div>
  <Footer>
    <p slot="row1">Hello I'm slot row1 with variables: {{ variableSlot }}</p>
    <p slot="row2">Hello I'm slot row2</p>
  </Footer>
</div>
</template>

<script>
import appNavigation from './Components/Navigation.vue'
import appFooter from './Components/Footer.vue'

export default {
  name: 'app',

  components: {
    'app-navigation': appNavigation,
    'app-footer': appFooter
  },
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
      variableSlot: 'SLOTs are great',
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
