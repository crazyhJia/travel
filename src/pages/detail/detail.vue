<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/17  11:15
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    import DetailBanner from './component/detailBanner'
    import DetailHeader from './component/header'
    export default {
        name: "detail",
        components: {
          DetailBanner,
          DetailHeader
      }
    }
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
