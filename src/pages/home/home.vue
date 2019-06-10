<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/6  10:31
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    import HomeHeader from './components/header'
    import HomeSwiper from './components/swiper'
    import HomeIcon from './components/icon'
    export default {
      name: "home",
      components: {
        HomeHeader,
        HomeSwiper,
        HomeIcon
      }
    }
</script>

<style scoped>

</style>
