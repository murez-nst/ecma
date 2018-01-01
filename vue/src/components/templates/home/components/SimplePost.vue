<template>
  <div id='simplePost'>
    <div>
      <div class='cosmo'>
        <img src='./../../../../assets/avatar001.png'>
        <h3>{{ cosmo }}</h3>
        <span>3 min</span>
      </div>
      <div class='wanda'>
        <p v-for='par of wanda.pars'>{{ par }}</p>
      </div>
    </div>
    <div>
      <span>
        <i @click='count()' class='fa fa-thumbs-up' aria-hidden='true'></i>
        <span v-if='n > 0'>{{ n }}</span>
      </span>
      <span>
      	<i class='fa fa-comments' aria-hidden='true'></i>
        <span v-if='comments.length > 0'>{{ comments.length }}</span>
      </span>
    </div>
  </div>
</template>
<style scoped>
#simplePost{
  position:relative;
  overflow:hidden;
  border-radius:5px;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.3),0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
#simplePost>:first-child,#simplePost>:last-child{
  padding:20px 3%
}
#simplePost>:first-child>.cosmo{
  overflow:hidden;
  padding:0 0 35px;
  border-bottom:1px #ffcccc solid
}
#simplePost>:first-child>.cosmo>img{
  position:relative;
  width:100px;
  height:auto;
  float:left;
  margin:0 2% 0;
  border-radius:50%
}
#simplePost>:first-child>.cosmo>h3{
  float:left;
  margin:25px 0;
  padding:5px 15px;
  font-size:28px;
  font-weight:normal;
  font-family:Sansita,Verdana,Geneva,sans-serif
}
#simplePost>:first-child>.cosmo>span{
  float:right;
  color:#aaa;
  font-size:15px;
  font-family:Scada,Verdana,Geneva,sans-serif;
}
#simplePost>:first-child>.wanda>p{
  font-size:16px;
  color:#373737;
}

#simplePost>:last-child{
  border-top:2px #ff9999 solid
}
#simplePost>:last-child>:not(:first-child){
  margin:0 15px;
}
#simplePost>:last-child>*>i{
  font-size:25px;
  padding:5px;
  color:#ff4d4d;
  cursor:pointer;
  border-radius:50%
}
#simplePost>:last-child>*>i:active{
  color:#e60000
}
#simplePost>:last-child>*>span{
  margin-left:3px;
  font-size:15px;
  color:#ff4d4d;
  font-family:Consolas,monospace;
}

@media only screen and (max-width: 500px){
  #simplePost{ border-radius:3px }
  #simplePost>:first-child>.cosmo>img{
    display:block;
    width:150px;
    height:auto;
    margin:auto;
    float:none
  }
  #simplePost>:first-child>.cosmo>h3{
    float:none;
    margin:5px 0;
    font-size:24px;
    text-align:center
  }
}
@media only screen and (max-width: 300px){
  #simplePost{ border-radius:1px }
  #simplePost>:first-child>.cosmo>img{
    width:50%
  }
  #simplePost>:first-child>.cosmo>h3{
    font-size:20px;
    padding:0
  }
  #simplePost>:first-child>.cosmo>span{ font-size:12px }
}
@media only screen and (max-width: 150px){
  #simplePost>:first-child>.cosmo>h3,#simplePost>.cosmo>span{
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  #simplePost>:first-child>.cosmo>h3{ font-size:15px }
  #simplePost>:first-child>.cosmo>span{ font-size:10px }
}
</style>
<script>
export default{
  props:{
    cosmo:String,
    wanda:Object
  }
  ,data() { return {
     n:0
    ,comments:[]
  }}
  ,methods:{
    count() { this.n++ }
  }
}
</script>