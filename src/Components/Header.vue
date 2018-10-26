<template>
  <header>
    <h1 v-on:click="changeTitle">
      {{ title }}
    </h1>
    <h2 v-on:click="busUpdate">
      {{ secondtitle }}
    </h2>
  </header>
</template>

<script>
import {bus} from '../main';

export default {
  name: 'app',
  props: [
    'title'
  ],
  data() {
    return {
      secondtitle: 'Welcome to an other Vue.ja App'
    }
  },
  methods: {
    changeTitle() {
      // this.title = 'test';
      this.$emit('changeTitle', 'Yet an other Welcome...');
    },
    busUpdate(){
      bus.$emit('busUpdate', 'Update bus Vue');
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  HEADER {
    background-color: $background;
  }

</style>
