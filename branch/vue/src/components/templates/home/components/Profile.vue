<template>
  <div id='profile'>
    <div class='cosmo'>
      <h2 class='sansita fs-35'>{{ cosmo }}</h2>
      <img src='./../../../../assets/avatar001.png'>
    </div>
    <div class='wanda yan_kaf fs-25'>
      <div v-for='e of wanda'><i :class='[e.icon,"fs-30"]'></i><p>{{ e.text }}</p></div>
    </div>
  </div>
</template>
<style scoped>
#profile{
  position:relative;
  padding:20px 3%;
  overflow:hidden;
  border-radius:3px;
  border-bottom:2px #ff4d4d solid;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.3),0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
#profile>.cosmo>h2{ text-align:center }
#profile>.cosmo>img{
  border-radius:50%;
  display:block;
  width:40%;
  margin:0 auto 25px
}
#profile>.wanda{
  position:relative;
  cursor:default
}
#profile>.wanda>*{
  position:relative;
  overflow:hidden;
  padding:12px 0;
  margin:5px 0
}
#profile>.wanda i{
  width:5%;
  float:left;
  margin-left:1%;
  margin-right:4%;
  color:#ff4d4d
}
#profile>.wanda p{
  width:90%;
  float:left;
  margin:0;
  color:#454545;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}


#profile>.wanda>:hover{
  background-color:#ff4d4d;
  border-radius:5px
}
#profile>.wanda>:hover i{
  color:#fff
}
#profile>:last-child>:hover p{
  color:#ffe6e6
}

@media only screen and (max-width: 500px){
  #profile>.cosmo>h2{
    font-size:20px;
    font-weight:normal
  }
  #profile>.cosmo>img{ width:50% }
  #profile>.wanda>:hover{ border-radius:2px }
  #profile>.wanda i{ font-size:20px }
  #profile>.wanda p{ font-size:18px }
}
@media only screen and (max-width: 300px){
  #profile>.wanda i{ display:none }
  #profile>.wanda p{
    width:90%;
    padding:0 5%;
    white-space:normal;
    text-align:center;
    font-size:15px;
    text-overflow:clip;
  }
  #profile>.wanda>:not(:last-child){ border-bottom:1px #ffcccc solid }
  #profile>.wanda>:hover{ background-color:transparent }
  #profile>.wanda>:hover p{ color:#ff3333 }
}
@media only screen and (max-width: 200px){
  #profile>.cosmo>h2{
    font-size:15px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  #profile>.cosmo>img{ width:75% }
  #profile>.wanda p{ font-size:12px }
}
</style>
<script>
export default {
  props:{
     cosmo:{ type:String, required:true }
    ,wanda:{ type:Array }
  }
}
</script>