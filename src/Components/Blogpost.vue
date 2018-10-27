<template>
  <div class="blogpost">
    <p>Headline</p>
    <form class="" action="index.html" method="post">
      <div class="form-result" v-if="submitted">
        Post wurde erfolgreich übermittelt
      </div>
      <div class="form-result" v-if="submitting">
        loading...
      </div>

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
    <select class="" name="author" v-model="blog.author">
      <option v-for="author in authors" v-bind:value="author.id">{{author.name}}</option>
    </select>
    <button type="button" name="button" v-on:click.prevent="postData">Absenden</button>

    </form>
    <div class="output">
      <h2>{{blog.headline}}</h2>
      <p>{{blog.text}}</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
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
        categories: [],
        author: ''
      },
      submitting: false,
      submitted: false,
      authors: [
        {
          id: '1',
          name: 'Max Mustermann'
        },
        {
          id: '2',
          name: 'Stefan Schnell'
        },
        {
          id: '3',
          name: 'Andreas Alter'
        }
      ]
    }
  },
  methods: {
    postData() {
      console.info('POST DATA');
      this.submitting = true;
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.headline,
        body: this.blog.text,
        userId: this.blog.author
      }, {headers: {'Authorization': 'Basic YXBpOnBhc3N3b3Jk'}}).then(function(data){
        console.info(data);
        this.submitting = false;
        this.submitted = true;
      });
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

  FORM {
    margin: 0;
    padding: 0;
    position: relative;

    .form-result {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.9);
      text-align: center;
    }

  }


</style>
