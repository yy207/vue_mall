<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

}
</script>

<style scoped>
  .navbar{
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }

  .navbar > .left ,.navbar > .right {
    width: 60px;
    text-align: center;
  }
  .navbar .center{
    flex: 1;
    /* //其他宽度按确定 比例为1占据所有*/
  }




</style>
