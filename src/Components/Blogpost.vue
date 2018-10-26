<template>
  <div class="blogpost">
    <p>Headline</p>
    <input type="text" name="" v-model.lazy="blog.headline" value="">
    <hr>
    <p>Text</p>
    <input type="text" name="" v-model.lazy="blog.text" value="">
    <label for="">Burger</label>
    <input type="checkbox" name="" value="burger" v-model="blog.categories">
    <label for="">Pizza</label>
    <input type="checkbox" name="" value="pizza" v-model="blog.categories">
    <label for="">Sushi</label>
    <input type="checkbox" name="" value="sushi" v-model="blog.categories">
    <div class="output">
      <h2>{{blog.headline}}</h2>
      <p>{{blog.text}}</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blog: {
        headline: '',
        text: '',
        categories: []
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  .blogpost {
    padding: 1rem 2rem;
    border: 1px solid #000;
  }
  .output {
    background-color: rgb(247, 207, 247);
    border: 1px solid #000;
  }

</style>
