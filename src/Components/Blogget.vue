<template>
  <div class="blog" v-theme:modern="'dark'">
    <h1>All Blog Posts</h1>
    <div class="blogpost" v-for="post in blog">
      <h2 v-randomcolor>{{post.title | to-uppercase}}</h2>
      <p>{{post.body | excerpt }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blog: []
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Basic YXBpOnBhc3N3b3Jk'
      }
    }).then(function(data){
      this.blog = data.body.splice(0, 10);
      console.info(data);
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
