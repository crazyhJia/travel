<template>
    <div>
      <home-header></home-header>
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
    import {mapState} from 'vuex'
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
          lastCity: '',
          swiperList: [],
          iconList: [],
          recommandList: [],
          weekendList:[]
        }
      },
      computed: {
        ...mapState(['city'])
      },
      methods: {
        getHomeInfo () {
          axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommandList = data.recommandList
            this.weekendList = data.weekendList
          }
        }
      },
      mounted () {
        //页面mounted的时候会加载index.json
        this.lastCity = this.city
        this.getHomeInfo()
      },
      activated () {
        //当页面重新被显示的时候会被执行
        if (this.lastCity !== this.city) {
          this.lastCity = this.city
          this.getHomeInfo()
        }
      }
    }
</script>

<style scoped>

</style>
