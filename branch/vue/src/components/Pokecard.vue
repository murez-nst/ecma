<template>
<div id='pokecard' :class='cardDim'>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Salsa'>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Scada'>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Sansita'>
  <div class='upper'>
    <div class='badge'>
      <p class='fa fa-star fs-25'></p>
      <p class='score sansita fs-20'>{{ parseInt(score) }}</p>
    </div>
    <p class='title sansita fs-35'>{{ cosmo }}</p>
  </div>
  <div class='lower'>
    <button class='btnPop scada fs-18'>{{ buttons[0] }}</button>
    <button class='btnPop scada fs-18'>{{ buttons[1] }}</button>
  </div>
  <div class='main'>
    <img @click='action' @mouseenter='toggle(1)' @mouseleave='toggle(0)' src='./../assets/profile_pict02.jpeg' />
    <div class='wanda scada fs-18'>
      <slot name='cover'></slot>
      <div v-for='e of wanda'><i :class='[e.icon,"fs-20"]' :key='e.cosmo'></i>{{ e.text }}</div>
      <slot></slot>
    </div>
  </div>
</div>
</template>
<style scoped>
#pokecard{
  position:relative;
  border-radius:30px;
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.3),0 6px 20px 0 rgba(0,0,0,0.2);
  -o-transition:all 0.5s ease 0s;
  -moz-transition:all 0.5s ease 0s;
  -webkit-transition:all 0.5s ease 0s;
  transition:all 0.5s ease 0s;
}
#pokecard>*{
  position:relative;
  box-sizing:border-box
}
#pokecard>.upper,#pokecard>.lower{
  height:50%;
  padding:10px
}
#pokecard>.upper{
  border-bottom:5px lightgray solid;
  border-radius:30px 30px 0 0;
  background:linear-gradient(to bottom right,rgba(102,102,255,0.2),rgba(0,51,204,0.65),rgba(0,19,77,0.9));
}
#pokecard>.upper>.title{
  text-align:center;
  color:white;
  margin:8% 0 0;
}
#pokecard>.upper>.badge{
  position:absolute;
  top:-3px;
  right:10%;
  width:45px;
  height:69px;
  opacity:0;
  padding:2px 2%;
  cursor:default;
  border-radius:0 0 5px 5px;
  box-sizing:border-box;
  background:linear-gradient(rgba(255,232,102,0.85),rgb(255,224,51));
  -o-transition:opacity 0.5s ease 0s;
  -moz-transition:opacity 0.5s ease 0s;
  -webkit-transition:opacity 0.5s ease 0s;
  transition:opacity 0.5s ease 0s;
}
#pokecard>.upper>.badge>.fa-star{
  display:block;
  padding:0;
  margin:12px 0 0;
  text-align:center;
  color:rgb(255,255,240)
}
#pokecard>.upper>.badge>.score{
  text-align:center;
  padding:1% 0;
  margin:0;
  color:rgb(179,152,0);
}

#pokecard>.main{
  position:absolute;
  top:27.5%;
  width:100%;
  height:45%;
}
#pokecard>.main>img{
  display:block;
  height:100%;
  margin:auto;
  cursor:pointer;
  border:5px lightgray solid;
  border-radius:50%;
  box-sizing:border-box;
  -o-transition:box-shadow 0.5s ease 0.1s;
  -moz-transition:box-shadow 0.5s ease 0.1s;
  -webkit-transition:box-shadow 0.5s ease 0.1s;
  transition:box-shadow 0.5s ease 0.1s;
}
#pokecard>.main>img:hover{
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.3),0 6px 20px 0 rgba(0,0,0,0.2);
}
#pokecard>.main>.wanda{
  height:0;
  overflow:auto;
  padding:15px 3%;
  visibility:hidden;
  opacity:0;
  box-sizing:border-box;
  transition:opacity 1s ease 0s;
}
#pokecard>.main>.wanda>*{
  padding:10px 0;
  color:#4a4a4a
}
#pokecard>.main>.wanda>*>i{
  margin-left:2%;
  margin-right:4%
}

#pokecard>.lower{
  top:0;
  border-bottom:1px rgba(255,255,255,0.3) solid;
  border-right:1px rgba(255,255,255,0.5) solid;
  border-left:1px rgba(255,255,255,0.5) solid;
  border-top:5px lightgray solid;
  border-radius:0 0 30px 30px;
  background:linear-gradient(to bottom right,rgba(242,242,242,0.3),rgba(217,217,217,0.5),rgba(166,166,166,0.8));
  -o-transition:all 0.5s ease 0s;
  -moz-transition:all 0.5s ease 0s;
  -webkit-transition:all 0.5s ease 0s;
  transition:all 0.5s ease 0s;
}
#pokecard>.lower>button{
  position:absolute;
  width:35%;
  bottom:10%;
  margin:0;
  padding:10px 0
}
#pokecard>.lower>button:first-child{
  left:12%
}
#pokecard>.lower>button:last-child{
  right:12%
}

#pokecard .btnPop{
  border-radius:7px;
  border:0;
  outline:none;
  color:#000066;
  cursor:pointer;
  background-color:transparent;
  -o-transition:box-shadow 0.3s ease,background 0.5s ease 0.1s;
  -moz-transition:box-shadow 0.3s ease,background 0.5s ease 0.1s;
  -webkit-transition:box-shadow 0.3s ease,background 0.5s ease 0.1s;
  transition:box-shadow 0.3s ease,background 0.5s ease 0.1s;
}
#pokecard .btnPop:hover{
  color:white;
  background:linear-gradient(rgba(102,102,255,0.6),rgba(0,0,102,0.7));
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.3),0 6px 20px 0 rgba(0,0,0,0.2);
}

.fs-18{ font-size:18px }
.fs-20{ font-size:20px }
.fs-25{ font-size:25px }
.fs-35{ font-size:35px }
/*@import url(//fonts.googleapis.com/css?family=Scada);
@import url(//fonts.googleapis.com/css?family=Salsa);
@import url(//fonts.googleapis.com/css?family=Sansita);*/
#pokecard .mono { font-family:Consolas,monospace }
#pokecard .super { font-family:Verdana,Geneva,sans-serif }
#pokecard .scada { font-family:Scada,Verdana,Geneva,sans-serif }
#pokecard .salsa { font-family:Salsa,Verdana,Geneva,sans-serif }
#pokecard .sansita { font-family:Sansita,Verdana,Geneva,sans-serif }
</style>
<script>
export default {
  props:{
     cosmo:{ type:String, required:true }
    ,score:{ type:Number, required:true }
    ,cardDim:{ type:String, required:true }
    ,xHeight:{ type:Number, default:300 }
    ,buttons:{ type:Array, default:[ 'Follow', 'Projects' ], validator:(e) => Boolean(e) && e.length > 1 && Boolean(e[0]) && Boolean(e[1]) }
    ,wanda:{ type:Array, validator(values) {
      for(let k of [ 'cosmo', 'icon', 'text' ])
        for(let value of values)
          if(!value[k]) return false
      return true
    }}
  }
  ,data(){ return {
     isPopped:false
  }}
  ,mounted() { let murez = {}
    Object.defineProperty(murez, 'avatar', { value:document.querySelector('#pokecard>.main>img') })
    Object.defineProperty(murez, 'wanda', { value:document.querySelector('#pokecard>.main>.wanda') })
    Object.defineProperty(murez, 'upper', { value:document.querySelector('#pokecard>.upper') })
    Object.defineProperty(murez, 'lower', { value:document.querySelector('#pokecard>.lower') })
    Object.defineProperty(murez, 'main', { value:document.querySelector('#pokecard>.main') })
    Object.defineProperty(murez, 'transition', { value:{
      check(el) {
        let e, o = this.c
        for(e in o)
          if(!el.style[e])
            return this.c[e]
      }
      ,c:{
         'transition':'transitionend'
        ,'OTransition':'oTransitionEnd'
        ,'MozTransition':'transitionend'
        ,'WebkitTransition':'webkitTransitionEnd'
      }
    }})
    let lower = murez.lower, transition = murez.transition
    Object.defineProperty(this, 'murez', { value:murez })

    lower.addEventListener(transition.check(lower), (function(context, f) { return function(e) { return f(context, e) } })(this, function($, e) {
      let isPopped = $.isPopped
      if(e.propertyName === 'top') {
        if(!isPopped) {
          let style = murez.wanda.style, rootHeight = parseInt(document.getElementById('pokecard').style.height);
          style.height = rootHeight
             - parseInt(murez.upper.style.height)
             - parseInt(murez.lower.style.height)
             - (parseInt(getComputedStyle(murez.avatar).height) / 2) + 'px'
          style.visibility = 'visible'
          style.opacity = 1
        }
        $.isPopped = !isPopped
      }
    }))
  }
  ,methods:{
     toggle(b) { pokecard.querySelector('#pokecard>.upper>.badge').style.opacity = b }
    ,action() {
      let root = document.getElementById('pokecard')
        ,murez = this.murez
        ,lower = murez.lower
        ,isPopped = this.isPopped
      if(isPopped) {
        let wanda = murez.wanda.style
        //upper.style.height = ''
        //lower.style.height = ''
        root.style.height = ''
        lower.style.top = ''
        wanda.height = ''
        wanda.opacity = ''
        wanda.visibility = ''
        //main.style.top = ''
        //main.style.height = ''
      } else {
        let upper = murez.upper, main = murez.main
          ,rootHeight = parseInt(getComputedStyle(root).height) + this.xHeight
          ,upperHeight = parseInt(getComputedStyle(upper).height)
          ,lowerHeight = parseInt(getComputedStyle(lower).height)
        upper.style.height = upperHeight + 'px'
        main.style.top = getComputedStyle(main).top
        main.style.height = getComputedStyle(main).height
        lower.style.height = lowerHeight + 'px'
        lower.style.top = rootHeight - upperHeight - lowerHeight + 'px'
        root.style.height = rootHeight + 'px'
      }
    }
  }
}
</script>