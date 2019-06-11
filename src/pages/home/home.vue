<template>
    <div>
      <home-header :city="city"></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icon :iconList="iconList"></home-icon>
      <home-recommand :recommandList="recommandList"   ></home-recommand>
      <home-weekend :weekendList="weekendList"></home-weekend>

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
      data () {
        return {
          city: '',
          swiperList: [],
          iconList: [],
          recommandList: [],
          weekendList:[]
        }
      },
      methods: {
        getHomeInfo () {
          axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.city = data.city
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommandList = data.recommandList
            this.weekendList = data.weekendList
          }
        }
      },
      mounted () {
        this.getHomeInfo()
      }
    }
</script>

<style scoped>

</style>
