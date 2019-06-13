<template>
    <div class="header">
      <span class="header-left"><Icon type="ios-arrow-back" /></span>
      <span class="header-input"><Icon type="ios-search-outline" />输入城市/景点/游玩主题</span>
      <router-link to='/city'>
       <span class="header-right">{{this.city}}<Icon type="md-arrow-dropdown" /></span>
      </router-link>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/6  14:35
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    import { mapState } from 'vuex'
    export default {
        name: "home-header",
        computed: {
          ...mapState(['city'])
        }
    }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/varibles.styl'
  .header
    line-height : 2.5rem
    background: $bgColor
    color: #fff
    display: flex
    height: 2.5rem
    .header-left
      width: 2.24rem
      float: left
    .header-input
      flex: 1
      float: left
      background :#fff
      line-height: 1.9rem
      margin-top: .3rem
      margin-bottom: .3rem
      margin-left: .1rem
      color: #ccc
      text-align: left
      padding-left : .2rem
    .header-right
      min-width: 2.64rem
      float: right
      text-align: center
      margin-left: .3rem
      color:#fff

</style>
