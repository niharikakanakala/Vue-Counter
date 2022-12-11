import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue"
import CountView from "../components/CountView.vue"

const routes = [
    {
      path: '/helloworld',
      name: 'Home',
      component: HelloWorld
    },
    {
        path: '/',
        name: 'Count',
        component: CountView
      },
      {
        path: '/about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_HASH),
    routes
  })
  
  export default router