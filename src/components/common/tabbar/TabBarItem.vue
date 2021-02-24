<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive" >
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot  name="item-icon-avtive"></slot>
    </div>
    <div :class="{active:isActive}" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      // isActive:true
    }
  },
  props: {
    path: {
      type: String,
      required: true
    },
    activeColor:{
      type:String,
      default:"#00f"
    }
  },
  methods:{
    itemClick(){
      //console.log("itemClick");
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },

}
</script>

<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
