<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~@/assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-avtive" src="~@/assets/img/tabbar/home_a.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/all">
      <img slot="item-icon" src="~@/assets/img/tabbar/all.png" alt="">
      <img slot="item-icon-avtive" src="~@/assets/img/tabbar/all_a.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/video">
      <img slot="item-icon" src="~@/assets/img/tabbar/video.png" alt="">
      <img slot="item-icon-avtive" src="~@/assets/img/tabbar/video_a.png" alt="">
      <div slot="item-text">视频</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~@/assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-avtive" src="~@/assets/img/tabbar/cart_a.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/my">
      <img slot="item-icon" src="~@/assets/img/tabbar/my.png" alt="">
      <img slot="item-icon-avtive" src="~@/assets/img/tabbar/my_a.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,TabBarItem
  }
}
</script>

<style scoped>

</style>
