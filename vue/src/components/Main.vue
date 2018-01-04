<template>
<div id='main'>
  <div>
    <pokecard v-bind='data'>
      <!-- <img slot='cover' src="./../assets/profile_pict01.jpeg" style='width:100%'> -->
      <!-- Other contents -->
    </pokecard>
  </div>
  <div>
    <pokecard v-bind='data'></pokecard>
  </div>
</div>
</template>
<style scoped>
#main>:first-child{
  width:21.5%;
  float:left;
  padding:5px 2%;
  box-sizing:border-box
}
#main>:last-child{
  width:30%;
  float:left;
  padding:5px 2%;
  box-sizing:border-box
}
</style>
<script>
import Pokecard from './Pokecard'
export default{
  data() { return{
    data:{
       cosmo:'Murez Nasution'
      ,cardDim:'cardDim'
      ,buttons:['Chat','Follow']
      ,score:99
      ,xHeight:250
      ,wanda:[
         { cosmo:'job', icon:'fa fa-address-book', text:'Software Developer' }
        ,{ cosmo:'home', icon:'fa fa-home', text:'Medan, Indonesia' }
        ,{ cosmo:'birth', icon:'fa fa-birthday-cake', text:'October 23, 1990' }
      ]
    }
  }}
  ,methods:{
    test(e) { alert(3) }
  }
  ,components:{ Pokecard }
}
</script>
<style scoped>
.cardDim{
  width:280px;
  height:400px;
}
</style>