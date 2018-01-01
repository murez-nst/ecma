<template>
<div id='main'>
  <div class='register'>
    <input class='inpBasic' type='text' placeholder='Title' v-model='title'
      style='float:left;width:70%;border-right:0;border-radius:5px 0 0 5px;'
    />
    <button class='btnBasic' v-on:click='submit'
      style='float:left;width:26.5%;border-radius:0 5px 5px 0;'
    >Submit</button>
    <textarea placeholder='Content' v-model='content'
      style='margin:15px 0 0;width:97%'
    ></textarea>
  </div>
  <div class='navigation'>
    <p>Created Date</p>
    <p>{{ created }}</p>
  </div>
  <div class='articles'>
    <simple-article v-for='article of articles'
      v-bind:key='article.created'
      v-bind:title='article.title'
      v-bind:content='article.content'
      v-bind:created='article.created'
      v-on:selected:article='selected'>
    </simple-article>
  </div>
</div>
</template>
<style scoped>
body, body *{ margin:0 }
body{
  padding:0;
  overflow:auto;
  background-color:#f7f7f7
}
body *{
  font-family:'Avenir',Helvetica,Arial, sans-serif;
  font-size:20px;
  color:#4a4a4a 
}
#main>.register{
  position:relative;
  width:90%;
  padding:20px 5%;
  overflow:auto;
  background-color:#fff
}
.btnBasic{
  border:none;
  color:#fff;
  cursor:pointer;
  outline:none;
  padding:10px 2%;
  background-color:#ff4d4d;
}
.inpBasic{
  padding:8px 1.5%;
  outline:none;
  border:2px #ff4d4d solid;
}
textarea{
  height:30px;
  border-top:0;
  border-right:0;
  border-left:0;
  border-bottom:2px #efefef solid;
  padding:10px;
  max-width:97%;
  min-width:80px;
  min-height:30px;
  outline:none;
}
textarea:focus{ border-bottom-color:#ff4d4d }
#main>.navigation{
  position:relative;
  width:20%;
  margin:30px 3% 10px;
  padding:25px 3%;
  float:left;
  border-radius:4px;
  background-color:#ff4d4d;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.3),0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
#main>.navigation *{ color:#fff }
#main>.articles{
  position:relative;
  padding:25px 2%;
  overflow:auto;
  width:64%;
  float:left
}
#main>.articles>:first-child{
  margin-top:0
}
#main>.articles>:last-child{
  margin-bottom:0
}
</style>
<script>
let OPTIONS = {  
  weekday:'short',
  year:'numeric',
  month:'short',  
  day:'numeric',
  hour:'2-digit',
  minute:'2-digit'  
}
import SimpleArticle from './SimpleArticle'
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
      this.created = d.toLocaleDateString("en-US", OPTIONS)
    }
  },
  components: { SimpleArticle }
}
</script>