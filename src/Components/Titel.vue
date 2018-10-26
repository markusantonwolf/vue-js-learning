<template>
  <header>
    <h2>
      {{ title }}
    </h2>
  </header>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Headline H2 in Titel.vue'
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
