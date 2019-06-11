<template>
    <div class="header">
      <router-link to="/">
        <span class="header-back"><Icon type="ios-arrow-back" /></span>
      </router-link>
      城市选择
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/11  15:09
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "city-header"
    }
</script>

<style lang="stylus" scoped>
    .header
      position :relative
      overflow: hidden
      height: 1.9rem
      line-height :1.9rem
      text-align :center
      color: #fff
      background : deepskyblue
      font-size: 16px
      .header-back
        width: 1.0rem
        text-align : center
        font-size: 16px
        position: absolute
        top: 0
        left: 0
        color: #fff

</style>
