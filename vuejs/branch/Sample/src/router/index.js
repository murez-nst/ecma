import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/branch/Note'
import Timeline from '@/components/templates/home/Timeline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Main
    }
    ,{
      path:'/home',
      name:'Timeline',
      component:Timeline
    }
	,{
      path:'/pokecard',
      name:'Main',
      component:Main
    }
  ]
})