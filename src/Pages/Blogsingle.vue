<template>
  <div class="blog">
    <div v-if="loading" class="loading">
      <img v-bind:src="loadingImage" alt="">
    </div>
    <div v-if="loaded" class="content">
      <h1>{{blog.title}}</h1>
      <p>{{blog.body }}</p>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      loading: true,
      loaded: false
    }
  },
  computed: {
    loadingImage () {
      return require('../assets/img/loading.svg')
    }
  },
  created() {
    this.loading = true;
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id, {
      headers: {
        'Authorization': 'Basic YXBpOnBhc3N3b3Jk'
      }
    }).then(function(data){
      this.blog = data.body;
      this.loading = false;
      this.loaded = true;
    });
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  .blog {
    margin: 0 auto;
    padding: 1rem;
    background-color: rgb(255, 245, 231);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;

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
