<template>
  <footer>
    <p>
      {{footer}}
    </p>
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

  FOOTER {
    padding: 4rem;
    background-color: $footer;
  }

</style>
