<template>
  <div class="dynamic_components">
    <h2>
      {{ title }}
    </h2>
    <keep-alive>
      <component v-bind:is="componentName"></component>
    </keep-alive>
    <button v-on:click="switchComponent" type="button" name="button">SWITCH</button>
  </div>
</template>

<script>
import DynamicOne from './DynamicOne.vue'
import DynamicTwo from './DynamicTwo.vue'

export default {
  name: 'app',
  components: {
    'DynamicOne': DynamicOne,
    'DynamicTwo': DynamicTwo
  },
  data() {
    return {
      title: 'Headline dynamic components',
      componentName: 'DynamicOne'
    }
  },
  methods: {
    switchComponent() {
      if (this.componentName === 'DynamicOne') {
        this.componentName = 'DynamicTwo';
      } else {
        this.componentName = 'DynamicOne';
      }
      console.info(this.componentName)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  HEADER {
    background-color: $background;
  }

</style>
