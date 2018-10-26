<template>
  <div>
    <p>{{title}}</p>
    <input type="text" name="" value="ONE">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'dynamic component ONE'
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
