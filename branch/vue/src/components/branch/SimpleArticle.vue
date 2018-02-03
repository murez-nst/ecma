<template>
  <div id="simpleArticle">
    <div><h1 v-on:click='selected' style='color:#cc0000;margin-bottom:25px'>{{ title }}</h1></div>
    <p>{{ content }}</p>
  </div>
</template>
<script>
export default {
  props: [ 'title', 'content', 'created' ],
  methods: {
    selected() {
      this.$emit('selected:article', this.created)
    }
  }
}
</script>
<style scoped>
#simpleArticle{
  margin:20px 0;
  overflow:auto;
  padding:30px 5%;
  border-bottom:2px #ff4d4d solid;
  border-radius:3px;
  background-color:#fff;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.3),0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
#simpleArticle h1{
  display:inline-block;
  cursor:pointer;
  font-size:30px;
  border-bottom:3px transparent solid;
}
#simpleArticle h1:hover{
  border-bottom-color:#ff4d4d;
}
#simpleArticle p{
  font-size:18px
}
</style>