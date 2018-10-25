<template>
  <header>
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Welcome to an other Vue.ja App'
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
