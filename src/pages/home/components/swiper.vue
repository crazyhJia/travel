<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper" >
    <!--<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">-->
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/6  17:13
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "home-swiper",
      props:{
        swiperList: {}
      },
      data () {
          return {
            swiperOption: {
              pagination: '.swiper-pagination',
              loop:true
            },
            // swiperList:[
            //   {
            //     id:'01',
            //     imgUrl: 'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/161bfb308c31ac5e61afca9b026e7cf4.jpg'
            //   },
            //   {
            //     id:'02',
            //     imgUrl: 'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/8b75ece9943e703fc1b78f2d02a71bae.jpg'
            //   },
            // ]
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bbullet-active
    background: #fff
  .swiper
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 31.25%
    .swiper-img
      width:100%
</style>
