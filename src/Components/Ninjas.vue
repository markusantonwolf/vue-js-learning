<template>
<ul>
  <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
    <h2>{{ ninja.name }}</h2>
    <p v-if="ninja.show">
      {{ ninja.name }}
    </p>
  </li>
</ul>
</template>

<script>
export default {
  name: 'app',
  props: ['ninjas'],
  data() {
    return {
      title: 'Ninja',

    }
  }
}
</script>

<style scoped lang="scss">

  UL {
    display: flex;
    justify-content: center;
    list-style: none;
  }

LI {
  padding: 5rem;
  border: 2px solid #000;
  font-weight: bold;
}
</style>
