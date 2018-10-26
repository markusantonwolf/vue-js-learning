<template>
  <footer>
    <p>
      {{footer}}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      footer: 'Footer.vue component'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  FOOTER {
    padding: 4rem;
    background-color: $footer;
  }

</style>
