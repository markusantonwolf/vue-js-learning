<template>
  <div class="material">
    <hr>
    <Header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></Header>
    <p>{{ title }}</p>
    <hr>
    <Titel></Titel>
    <hr>
    <hr>
    <Ninjas v-bind:ninjas="ninjas"></Ninjas>
    <h2>Ninjas</h2>
    <ul>
      <li v-for="ninja in ninjas">
        {{ninja.name}}
      </li>
    </ul>
  </div>
</template>

<script>

import Header from '../Components/Header.vue'
import Ninjas from '../Components/Ninjas.vue'
import Titel from '../Components/Titel.vue'

export default {
  components: {
    'Header': Header,
    'Titel': Titel,
    'Ninjas': Ninjas,
  },
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
      variableSlot: 'SLOTs are great',
      ninjas: [
        {
          id: '1',
          name: 'Hans',
          show: true,
        },
        {
          id: '2',
          name: 'Peter',
          show: true,
        },
        {
          id: '3',
          name: 'Werner',
          show: true,
        }
      ]
    }
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  .blog {
    margin: 0 auto;
    padding: 1rem;
    background-color: rgb(255, 245, 231);

    &.modern {
      background-color: rgb(237, 237, 237);
    }

  }

  .blogpost {
    padding: 1rem 2rem;
    border: 1px solid #000;
    border-radius: 1rem;
  }



</style>
