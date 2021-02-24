<template>
<div id="home">
  <home-nav-bar></home-nav-bar>


  <swiper>
    <swiper-item v-for="(item,index) in result" :key="index">
      <img :src="item.img" alt="">
    </swiper-item>
  </swiper>


</div>
</template>

<script>import HomeNavBar from "@/views/home/HomeNavBar";
import {getHomeData} from "@/network/home/home";
import {Swiper,SwiperItem} from "@/components/common/swiper/index"
export default {
  name: "Home",
  components:{
    HomeNavBar,Swiper,SwiperItem
  },data(){
    return {result:null}
  },
  created() {
    getHomeData().then(res =>{
      this.result = res.data
      console.log(res.data);
    })
  }
}
</script>

<style scoped>


</style>
