<template>
  <div class="blogpost">
    <p>Headline</p>
    <input type="text" name="" v-model.lazy="blog.headline" value="">
    <hr>
    <p>Text</p>
    <input type="text" name="" v-model.lazy="blog.text" value="">
    <div class="output">
      <h2>{{blog.headline}}</h2>
      <p>{{blog.text}}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blog: {
        headline: '',
        text: ''
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
