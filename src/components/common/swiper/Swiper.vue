<template>

<div id="hy-swiper">
  <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <slot></slot>
  </div>
  <slot name="indicator"></slot>
  <div class="indicator">
    <slot name="indicator" v-if="showIndicator && slideCount > 1">
      <div v-for="(item,index) in slideCount" class="indi-item" :class="{active: index === currentIndex}"></div>
    </slot>
  </div>
</div>
</template>

<script>
export default {
name: "Swiper",
  props:{
    interval:{
      type:Number,
      default:3000
    },
    animDaration:{
      type:Number,
      default: 300
    },
    moveRatio:{
      type:Number,
      default:0.25
    },
    showIndicator:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return{
      slideCount:0,
      totalWidth:0,
      swiperStyle:{},
      currentIndex:1,
      scrolling:false
    }
  },
  mounted() {
    setTimeout(()=>{
      this.handleDom()
      this.startTimer()
    },3000)
  },
  methods:{
    startTimer(){
      this.playTimer=setInterval(()=>{
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      },this.interval)
    },
    stopTimer(){
      this.scrolling = false;
      window.clearInterval(this.playTimer)
    },
    scrollContent(position){
      this.scrolling = true 
      this.swiperStyle.transaction = 'transform '+this.animDaration+'ms'
      this.setTransform(position)
      this.checkPosition()
      this.scrolling = false
    },
    checkPosition(){
      window.setTimeout(()=>{
        this.swiperStyle.transition = '0ms'
        if(this.currentIndex >= this.totalWidth * -this.currentIndex){
          this.setTransform(this.totalWidth * -this.currentIndex)
        }else if(this.currentIndex <= 0){
            this.currentIndex = this.slideCount
          this.setTransform(this.totalWidth * -this.currentIndex)
        }
        this.$emit('transitionEnd',this.currentIndex-1)
      },this.animDaration)
    },
    setTransform(pos){
      this.swiperStyle.transform = `translate3d(${pos}, 0, 0)`
    },
    handleDom(){
      let swperEL = document.querySelector(".swiper")
      let slideELS = document.getElementsByClassName("slide")
      this.slideCount = slideELS.length

      if(this.slideCount > 1){
        let cloneFirst = slideELS[0].cloneNode(true)
        let cloneLast = slideELS[this.slideCount - 1 ].cloneNode(true)
        swperEL.insertBefore(cloneFirst,slideELS[0])
        swperEL.appendChild(cloneLast)
        this.totalWidth = swperEL.offsetWidth
        this.swiperStyle = swperEL.style
      }
      this.setTransform(-this.totalWidth)
    },
    /**
     * 拖动事件的处理
     */
    touchStart: function (e) {
      // 1.如果正在滚动, 不可以拖动
      if (this.scrolling) return;

      // 2.停止定时器
      this.stopTimer();

      // 3.保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },

    touchMove: function (e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      // 2.设置当前的位置
      this.setTransform(moveDistance);
    },
    touchEnd: function (e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance);
      // 2.判断最终的距离
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右边移动超过0.5
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移动超过0.5
        this.currentIndex++
      }

      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 4.移动完成后重新开启定时器
      this.startTimer();
    },




  }
}
</script>

<style scoped>
#hy-swiper{
  overflow: hidden;
  position: relative;
}
.swiper{
  display: flex;
}
.indicator{
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}
.indi-item{
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #ffffff;
  line-height: 8px;
  text-align: center;
  font-size: 14px;
  margin: 0 5px;
}
.indi-item.active{
  background-color:  rgba(212,62,46,1.0);
}
</style>
