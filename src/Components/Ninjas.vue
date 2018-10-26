<template>
<ul>
  <li v-for="ninja in ninjas">
    <h2 v-on:click="ninja.show = !ninja.show">{{ ninja.name }}</h2>
    <p v-if="ninja.show">
      {{ ninja.name }}
    </p>
    <button type="button" name="button" v-on:click="deleteNinja(ninja.id)">X</button>
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
  },
  methods: {
    deleteNinja(id) {
      this.ninjas.splice(id, 1);
      console.info('delete: ' + id);
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
BUTTON {
  padding: 1rem;
}
</style>
