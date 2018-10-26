<template>
  <div>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'dynamic component TWO'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  P {
    font-weight: bold;
  }

</style>
