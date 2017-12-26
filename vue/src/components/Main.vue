<template>
<div>
  <p>{{ created }}</p>
  <input type='text' placeholder='Title' v-model='title' />
  <textarea placeholder='Content' v-model='content'></textarea>
  <button v-on:click='submit'>Submit</button>
  <simple-article v-for="article of articles"
    v-bind:key='article.created'
    v-bind:title='article.title'
    v-bind:content='article.content'
    v-bind:created='article.created'
    v-on:selected:article='selected'>
  </simple-article>
</div>
</template>
<script>
import SimpleArticle from '@/components/SimpleArticle'
export default {
  data: function() {
    return {
      title: '',
      content: '',
      created: '',
      articles: [ ]
    }
  },
  methods: {
    submit: function() {
      if(Boolean(this.title) && Boolean(this.content)) {
        this.articles.unshift({ title: this.title, content: this.content, created: Date.now() })
        this.title = ''
        this.content = ''
      }
    },
    selected: function(v) {
      let d = new Date()
      d.setTime(v)
      this.created = 'Created Date: ' + d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    }
  },
  components: { SimpleArticle }
}
</script>