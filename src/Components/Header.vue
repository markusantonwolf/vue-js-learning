<template>
  <header>
    <h1 v-on:click="changeTitle">
      {{ title }}
    </h1>
    <h2>
      {{ secondtitle }}
    </h2>
  </header>
</template>

<script>
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
