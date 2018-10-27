<template>
  <div class="blog">
    <h1>All Blog Posts</h1>
    <div class="blogpost" v-for="post in blog">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
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
    padding: 1rem;
    background-color: rgb(255, 245, 231);

  }

  .blogpost {
    padding: 1rem 2rem;
    border: 1px solid #000;
    border-radius: 1rem;
  }



</style>
