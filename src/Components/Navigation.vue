<template>
  <nav>
    <div class="navigation">
      <ul>
        <li><router-link to='/list'>List</router-link></li>
        <li><router-link to='/post'>Post</router-link></li>
        <li><router-link to='/material'>Material</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
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


</style>
