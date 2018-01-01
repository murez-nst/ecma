<template>
  <div id='timeline'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
    <div class='header fs-25'>
      <i class='fa fa-home' title='Home'></i>
      <i class='fa fa-gear' title='Settings'></i>
      <i class='fa fa-bell' title='Notification'></i>
      <i class='fa fa-envelope' title='Messages'></i>
    </div>
    <div class='main'>
      <div class='profile'>
        <div class='cosmo'>
          <h2 class='sansita fs-25'>{{ profile.cosmo }}</h2>
          <img src='./../../../assets/avatar001.jpeg'>
        </div>
        <p v-for='e of profile.wanda' class='wanda scada fs-15'>
          <i :class='[e.icon,"fs-18"]'></i>{{ e.text }}
        </p>
      </div>
      <div class='minor'>
        <div class='extra sansita fs-25'>
          <p style='text-align:center'>Extra</p>
        </div>
        <div class='extra sansita fs-25'>
          <p style='text-align:center'>Ads</p>
        </div>
        <div class='extra sansita fs-25'>
          <p style='text-align:center'>Ads</p>
        </div>
      </div>
      <div class='major'>
        <div class='publisher'>
          <p class='salsa fs-18'>What's your idea?</p>
          <textarea class='scada fs-15' v-model='article' @keyup.enter='mark' placeholder="...."></textarea>
          <button @click='submit' class='btnBase sansita fs-20'>Publish</button>
        </div>
        <div class='articles' v-for='(e,i) of articles' :key='e.ID' :style='[i > 0? i < articles.length - 1? "" : {marginBottom:0} : {marginTop:0}]'>
          <div class='sansita fs-25'>
            <img src='./../../../assets/avatar001.jpeg'>
            <h3>{{ e.cosmo }}</h3>
          </div>
          <div class='contents' v-for='p of e.wanda'>
            <p class='scada fs-15' v-if='!p.startsWith("\r") && !p.startsWith("\n")'>{{ p }}</p>
            <pre v-else>{{ p }}</pre>
          </div>
          <div>
            <span class='mono fs-15'><i @click='count(e)' class='fa fa-thumbs-up fs-25' aria-hidden='true'></i>{{ show(e.n) }}</span>
            <span class='mono fs-15'><i @click='' class='fa fa-comments fs-25' aria-hidden='true'></i>{{ show(e.comments.length) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class='footer sansita fs-35'>
      <p>Footer</p>
    </div>
  </div>
</template>
<style scoped>
#timeline{
  overflow:auto;
  background-color:#f5f7f8
}
#timeline>.header{
  position:relative;
  overflow:hidden;
  padding:0 5%;
  color:#fff;
  background-color:#ac3973
}
#timeline>.header>i{
  padding:15px 20px;
  cursor:pointer
}
#timeline>.header>i:not(:first-child){ float:right }

#timeline>.header>i:first-child{
  padding-top:10px;
  padding-bottom:10px;
  font-size:30px
}
#timeline>.header>i:hover{
  background-color:#862d59
}

#timeline>.main{
  overflow:auto;
  padding:10px 1%
}
#timeline>.main .profile,#timeline>.main .publisher,#timeline>.main .articles,#timeline>.main .minor>.extra{
  position:relative;
  overflow:hidden;
  border-radius:3px;
  background-color:#fff;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.3),0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
#timeline>.main .profile{
  width:17%;
  float:left;
  padding:15px 1%;
  margin:0 0.5%;
  border-bottom:2px #cc6699 solid
}
#timeline>.main .major,#timeline>.main .minor{
  position:relative;
  float:right;
  margin:0 0.5%
}
#timeline>.main .major{
  width:58%
}
#timeline>.main .minor{
  width:20%
}
#timeline>.main .publisher{
  padding:10px 2% 0;
  margin-bottom:15px;
  border-bottom:2px #cc6699 solid
}

#timeline>.main .profile>.cosmo{
  padding-bottom:15px;
  border-bottom:1px #f2d9e6 solid;
}
#timeline>.main .profile>.cosmo>h2{
  font-weight:normal;
  text-align:center;
  margin:10px 0 20px;
  cursor:pointer;
  color:#ac3973
}
#timeline>.main .profile>.cosmo>h2:active{ color:#602040 }
#timeline>.main .profile>.cosmo>img{
  display:block;
  width:120px;
  height:auto;
  margin:auto;
  border-radius:50%
}

#timeline>.main .profile>.wanda{
  padding:8px 0;
  margin:10px 0;
  color:#555;
  cursor:default;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis
}
#timeline>.main .profile>.wanda>i{
  margin-right:5%;
  margin-left:2%;
  color:#ac3973
}

#timeline>.main .major .publisher>p{
  margin:5px 10px 10px;
  color:#777
}
#timeline>.main .major .publisher>textarea{
  margin:auto;
  display:block;
  max-width:95%;
  min-width:90%;
  padding:5px 10px;
  overflow:hidden;
  outline:none;
  border:1px #ccc solid;
  color:#555!important;
}
#timeline>.main .major .publisher>button{
  margin:8px 0;
  float:right
}

#timeline>.main .major>.articles{
  width:96%;
  float:left;
  margin:5px 0;
  padding:10px 2% 0
}

#timeline>.main .major>.articles>:first-child{
  padding:5px 1%;
  margin-bottom:25px;
  overflow:auto
}

#timeline>.main .major>.articles .contents>p,#timeline>.main .major .articles .contents>pre{
  margin:0 0.5%;
  color:#444
}
#timeline>.main .major>.articles>:first-child h3{
  display:inline-block;
  float:left;
  padding:6px;
  margin:0;
  color:#3a3a3a;
  cursor:pointer;
  font-weight:normal;
  border-bottom:2px transparent solid;
}
#timeline>.main .major>.articles>:first-child h3:hover{
  border-bottom-color:#d279a6
}
#timeline>.main .major>.articles>:first-child img{
  width:50px;
  float:left;
  margin-right:5%;
  border-radius:50%
}
#timeline>.main .major>.articles>:last-child{
  border-top:1px #df9fbf solid;
  margin-top:25px;
  padding:10px 0 20px
}
#timeline>.main .major>.articles>:last-child *{
  margin:0 8px;
  color:#ac3973
}
#timeline>.main .major>.articles>:last-child i{
  margin-right:10px;
  cursor:pointer
}

#timeline>.footer{
  position:relative;
  overflow:hidden;
  color:#fff;
  background-color:#000
}

#timeline>.footer>:first-child{
  text-align:center;
  padding:25px;
  margin:0
}

#timeline>.main .minor>.extra{
  padding:10px 5%;
  margin:10px 0
}
#timeline>.main .minor>.extra:first-child,#timeline>.main .minor>.extra:last-child{
  margin:0
}

@media only screen and (max-width: 750px){
  #timeline>.main .profile>.cosmo>img{ width:90% }
}
@media only screen and (max-width: 520px){
  #timeline>.main .profile>.cosmo>img{ width:200px }
  #timeline>.main .profile{
    width:97%;
    margin-bottom:25px
  }
  #timeline>.main .major{ width:99% }
  #timeline>.main .minor{
    width:99%;
    margin-bottom:25px
  }
  #timeline>.header{ padding:0 1% }
}
@media only screen and (max-width: 320px){
  #timeline>.header>i{
    width:100%;
    float:none!important;
    text-align:center;
    padding:10px 0
  }
}
@media only screen and (max-width: 240px){
  #timeline>.main .profile>.cosmo>img{ width:90% }
}
</style>
<style>
@import url(//fonts.googleapis.com/css?family=Scada);
@import url(//fonts.googleapis.com/css?family=Salsa);
@import url(//fonts.googleapis.com/css?family=Sansita);
/*@font-face{ font-family:sal; src:url(salsa.ttf); }
@font-face{ font-family:san; src:url(sansita.otf); }
@font-face{ font-family:eco; src:url(economica.otf); }
@font-face{ font-family:ykf; src:url(yanone_kaffeesatz.ttf); }*/

#timeline .mono { font-family:Consolas,monospace }
#timeline .super { font-family:Verdana,Geneva,sans-serif }
#timeline .scada { font-family:Scada,Verdana,Geneva,sans-serif }
#timeline .salsa { font-family:Salsa,Verdana,Geneva,sans-serif }
#timeline .sansita { font-family:Sansita,Verdana,Geneva,sans-serif }
/*#timeline .salsa { font-family:sal,Verdana,Geneva,sans-serif }
#timeline .sansita { font-family:san,Verdana,Geneva,sans-serif }
#timeline .yan_kaf { font-family:ykf,Verdana,Geneva,sans-serif }
#timeline .economica { font-family:eco,Verdana,Geneva,sans-serif }*/

#timeline .fs-35{ font-size:35px }
#timeline .fs-30{ font-size:30px }
#timeline .fs-25{ font-size:25px }
#timeline .fs-20{ font-size:20px }
#timeline .fs-18{ font-size:18px }
#timeline .fs-15{ font-size:15px }
#timeline .fs-12{ font-size:12px }
#timeline .btnBase{
  border:0;
  color:#fff;
  cursor:pointer;
  outline:none;
  padding:10px 15px;
  border-radius:3px;
  background-color:#d279a6
}
#timeline .btnBase:hover{
  background-color:#ac3973
}
#timeline .btnBase:active{
  background-color:#c6538c
}

@media only screen and (max-width: 500px){
  #timeline .fs-35{ font-size:30px }
  #timeline .fs-30{ font-size:25px }
  #timeline .fs-25{ font-size:20px }
  #timeline .fs-20{ font-size:18px }
  #timeline .fs-18{ font-size:15px }
  #timeline .fs-15{ font-size:12px }
  #timeline .fs-12{ font-size:10px }
}
@media only screen and (max-width: 300px){
  #timeline .fs-35{ font-size:25px }
  #timeline .fs-30{ font-size:20px }
  #timeline .fs-25{ font-size:18px }
  #timeline .fs-20{ font-size:15px }
  #timeline .fs-18{ font-size:12px }
  #timeline .fs-15{ font-size:10px }
  #timeline .fs-12{ font-size:8px }
}
@media only screen and (max-width: 100px){
  #timeline .fs-35{ font-size:20px }
  #timeline .fs-30{ font-size:18px }
  #timeline .fs-25{ font-size:15px }
  #timeline .fs-20{ font-size:12px }
  #timeline .fs-18{ font-size:10px }
  #timeline .fs-15{ font-size:9px }
  #timeline .fs-12{ font-size:7px }
}
</style>
<script>
import Profile from './components/Profile'
import SimplePost from './components/SimplePost'
export default {
  data() { return {
    profile:{
       cosmo:'Murez Nasution'
      ,wanda:[
         { cosmo:'job', icon:'fa fa-address-book', text:'Software Developer' }
        ,{ cosmo:'home', icon:'fa fa-home', text:'Medan, Indonesia' }
        ,{ cosmo:'birth', icon:'fa fa-birthday-cake', text:'October 23, 1990' }
      ]
    }
    ,articles:[ ]
    ,article:''
    ,indexes:[]
  }}
  ,methods:{
     count(e) { e.n++ }
    ,show(number) {
      return typeof number === 'number'? number > 0? number : '' : '...'
    }
    ,mark() {
      this.indexes.push(this.article.length)
    }
    ,submit() {
      let article = this.article
      if(!article) return;
      let indexes = this.indexes, i, n, r;
      if(Boolean(indexes) && indexes.length > 0) {
        let p = '';
        r = []; i = 0;
        for(let index of this.indexes) {
          for(; i < index; p += article.charAt(i++));
          r.push(p)
          p = ''
        }
        if(i < (n = article.length)) {
          for(; i < n; p += article.charAt(i++));
          r.push(p)
          p = ''
        }
      } else r = [ this.article ]
      /*let b = false, j; i = 0;
      for(let e of r)
        if(!b) {
          if(e.startsWith('\r') || e.startsWith('\n')) i++
          else { b = !b; j = 0; }
        } else {
          if(e.startsWith('\r') || e.startsWith('\n')) j++
          else j = 0
        }
      r.splice(0, i)*/
      this.articles.unshift({
        ID:Date.now()
        ,cosmo:'Murez Nasution'
        ,wanda:r
        ,n:0
        ,comments:[]
      });
      r = undefined;
      this.article = ''
      this.indexes = []
    }
    ,sdsd(){}
  }
  ,components:{ Profile, SimplePost }
}
</script>