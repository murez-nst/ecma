<template>
<div id='main'>
  <pokecard v-bind='data'>
    <!-- <img slot='cover' src="./../assets/profile_pict01.jpeg" style='width:100%'> -->
    <!-- Other contents -->
  </pokecard>
</div>
</template>
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