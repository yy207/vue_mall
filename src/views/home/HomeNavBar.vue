<template>
  <nav-bar>
    <div slot="left">
      <img src="@/assets/img/navbar/pre.png" alt="返回" width="10" height="18" >
    </div>
    <div slot="center" class="home-nav">
      首页
    </div>
    <div slot="right">
      <img src="@/assets/img/navbar/search.png" alt="搜索" width="20" height="20">
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
name: "HomeNavBar",
  components:{
    NavBar
  },
}
</script>

<style scoped>
.home-nav{
  color: cornflowerblue;
}
.home-nav img{
  vertical-align: middle;
  line-height: 44px;
}
</style>
