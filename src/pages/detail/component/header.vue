<template>
    <div style="display: inline;">
      <router-link tag="div"
                   to="/"
                   class="header-abs"
                   style="display: inline;"
                   v-show="showAbs"
      >
        <Icon class="header-abs-back" type="ios-arrow-dropleft-circle" />
      </router-link>
      <div class="header-fixed"
           style="display: inline;"
           v-show="!showAbs"
           :style="opacityStyle"
      >
        <router-link to="/">
          <span class="header-fixed-back"><Icon type="ios-arrow-back" /></span>
        </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/17  17:27
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "detail-header",
      data () {
          return {
            showAbs:true,
            opacityStyle: {
              opacity: 0
            }
          }
      },
      methods: {
        handleScroll () {
          const top = document.documentElement.scrollTop
           // console.log(document.documentElement.scrollTop)
          if (top > 60) {
            let opacity = top / 140
            opacity = opacity > 1 ? 1 : opacity
            this.opacityStyle = {
              opacity
            }
            this.showAbs = false;
          }
          else {
            this.showAbs = true;
          }

        }
      },
      activated () {
          window.addEventListener("scroll",this.handleScroll)
      },
      deactivated () {
        // 在组件切换到另一个页面时执行该钩子函数  window是个全局事件
        window.removeEventListener("scroll",this.handleScroll)
      }
    }
</script>

<style lang="stylus" scoped>
  .header-abs
    position: absolute
    top: .4rem
    left: .4rem
    width: 1.6rem
    line-height: 1.6rem
    height: 1.6rem
    text-align: left
    border-radius: .8rem
    background : rbba(0,0,0,.8)
    .header-abs-back
      color: #fff
      font-size: 30px
  .header-fixed
    position :fixed
    top: 0
    left: 0
    right: 0
    height: 1.9rem
    line-height :1.9rem
    text-align :center
    color: #fff
    background : deepskyblue
    font-size: 16px
    .header-fixed-back
      width: 1.0rem
      text-align : center
      font-size: 16px
      position: absolute
      top: 0
      left: 0
      color: #fff
</style>
