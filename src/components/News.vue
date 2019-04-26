<template>
  <div>
    <label for="">Tile</label>
    <input type="text" v-model="news.title" />
    <br>
    <label for="">Text News</label>
    <input type="text" v-model="news.texts" />
    <br>
    <button @click="addAPI">Create</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      news: {
        title: '',
        texts: ''
      }
    }
  },
  methods: {
    addAPI () {
      let newsPost = {
        title: this.news.title,
        texts: this.news.texts
      }
      console.log(newsPost)
      axios
        .post('http://localhost:51515/news', newsPost)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
          })
    }
  }
}
</script>

<style>

</style>
