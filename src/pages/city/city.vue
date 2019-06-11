<template>
    <div class="city">
      <city-header></city-header>
      <city-search></city-search>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/11  14:19
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    import CityHeader from './component/header'
    import CitySearch from './component/search'
    export default {
      name: "city",
      components:{
        CityHeader,
        CitySearch,
    },
      data () {
          return {
            city: '北京'
          }
      }
    }
</script>

<style scoped lang="stylus">

</style>
