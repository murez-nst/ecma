import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import Home from "@/components/branch/test/Home"
import "vuetify/dist/vuetify.min.css"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
})