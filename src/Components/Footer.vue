<template>
  <footer>
    <slot name="row1"></slot>
    <p>
      {{footer}}
    </p>
    <slot name="row2"></slot>
  </footer>
</template>

<script>

import {bus} from '../main';

export default {
  name: 'app',
  data() {
    return {
      footer: 'Footer.vue component'
    }
  },
  created() {
    bus.$on('busUpdate', (data) => {
      this.footer = data;
    })
  },
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

</style>
