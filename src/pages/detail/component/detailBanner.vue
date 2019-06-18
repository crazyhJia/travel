<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://imgs.qunarzz.com/p/tts5/1502/dc/ca8be7f07061e5.jpg_r_390x260x90_d664e735.jpg"/>
      <div class="banner-info">
        <div class="banner-title" style="display: inline-block">
          大连圣亚海洋世界（AAAA景区）
        </div>
        <div class="banner-number" style="display: inline-block">
          <Icon class="banner-icon" type="ios-image" />
          39
        </div>
      </div>
    </div>
    <gallary :imgs="imgs"
             v-show="showGallary"
             @closeBanner="handleCloseGallary"
    ></gallary>
  </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/17  11:18
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    import Gallary from '../../../components/gallary/gallary'
    export default {
        name: "detailBanner",
      components: {
        Gallary
      },
      data () {
          return {
            showGallary: false,
            imgs: [
              "https://imgs.qunarzz.com/p/tts5/1502/dc/ca8be7f07061e5.jpg_r_390x260x90_d664e735.jpg",
              "https://imgs.qunarzz.com/p/tts4/1803/5e/57c476224e2aee02.jpg_r_390x260x90_d3c03095.jpg"
            ]
          }
      },
      methods: {
        handleBannerClick () {
          this.showGallary = true
        },
        handleCloseGallary () {
          this.showGallary = false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow :hidden
    height: 0
    padding-bottom : 55%
    .banner-img
      width: 100%
    .banner-info
      display flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height : 20px
      color: #fff
      background-image : linear-gradient(top, ragb(0,0,0,0), ragb(0,0,0,0.8))
      .banner-title
        flex: 1
        font-size: 16px
        padding: 0 .4rem
        margin : .4rem .4rem
      .banner-number
        float: right
        margin : .4rem .4rem
        padding: 0 .8rem
        line-height: 20px
        height: 20px
        border-radius : .4rem
        background : rgba(0,0,0, .8)
        font-size: 16px
        .banner-icon
          font-size: 16px

</style>
