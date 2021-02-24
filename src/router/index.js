import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/home/Home";
import All from "@/views/all/All"
import Video from "@/views/video/Video";
import My from "@/views/my/My";
import Cart from "@/views/cart/Cart";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/home"
  },
  {
    path: '/',
    redirect:"/home",
  },
    {
      path: '/home',
      component:Home,
      meta:{
        title:"首页"
      }
    },
    {
      path: '/all',
      component:All,
      meta:{
        title:"全部"
      }
    },
    {
      path: '/video',
      component:Video,
      meta:{
        title:"视频"
      }
    },
    {
      path: '/cart',
      component:Cart,
      meta:{
        title:"全部"
      }
    },
    {
      path: '/my',
      component:My,
      meta:{
        title:"我的"
      }
    },

  ]

const router = new VueRouter({
  routes,
  mode:"history"
})



export default router
