<template>
  <div class="blog" v-theme:modern="'light'">
    <h1>All Blog Posts</h1>
    <input type="text" name="" v-model="search" placeholder="Filter..." />
    <div class="blogpost" v-for="post in filteredBlogs">
      <h2 v-randomcolor>
        <router-link v-bind:to="'/list/' + post.id">
          {{post.title | to-uppercase}}
        </router-link>
      </h2>
      <p>{{post.body | excerpt }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blog: [],
      search: ''
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Basic YXBpOnBhc3N3b3Jk'
      }
    }).then(function(data){
      this.blog = data.body.splice(0, 10);
      // console.info(data);
    });
  },
  computed: {
    filteredBlogs () {
      return this.blog.filter( (blog) => {
        return blog.title.match(this.search);
      });
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
    flex-grow: 1;

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
