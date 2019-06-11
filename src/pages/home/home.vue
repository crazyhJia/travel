<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <home-recommand></home-recommand>
      <home-weekend></home-weekend>

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
    import HomeRecommand from './components/recommand'
    import HomeWeekend from './components/weekend'
    import axios from 'axios'
    export default {
      name: "home",
      components: {
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeRecommand,
        HomeWeekend
      },
      methods: {
        getHomeInfo () {
          axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
          console.log(res)
        }
      },
      mounted () {
        this.getHomeInfo()
      }
    }
</script>

<style scoped>

</style>
