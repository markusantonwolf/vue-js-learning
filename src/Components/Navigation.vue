<template>
  <nav>
    <div class="navigation">
      <ul>
        <li><router-link to='/get'>List</router-link></li>
        <li><router-link to='/post'>Post</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'app',
  props: [
    'title'
  ],
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  NAV {
    width: 100%;
    background-color: $background;
  }

</style>
