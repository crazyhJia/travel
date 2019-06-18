<template>
  <transition>
    <slot>

    </slot>
  </transition>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/18  15:16
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description  图片展示渐隐渐现的效果实现
     */
    export default {
      name: "fade",

    }
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
