<template>
<ul>
  <li v-for="ninja in ninjas">
    <a href="http://router.vuejs.org/" target="_blank" class="link">
      {{ ninja.name }}
    </a>
  </li>
</ul>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Ninja',
      ninjas: [{
          name: 'Hans'
        },
        {
          name: 'Peter',
        },
        {
          name: 'Werner'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.link {
    color: #e98e05;
    font-weight: bold;
}
</style>
