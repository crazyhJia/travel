<template>
    <div class="city">
      <div class="fixedTemplate">
        <city-header></city-header>
        <city-search></city-search>
      </div>
      <city-list :city='city' :hotCities="hotCities" :allCities="allCities"></city-list>
      <div class="fixedTemplate">
       <city-alphabet :allCities="allCities"></city-alphabet>
      </div>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/11  14:19
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    import axios from 'axios'
    import CityHeader from './component/header'
    import CitySearch from './component/search'
    import CityList from './component/list'
    import CityAlphabet from './component/alphabet'
    export default {
      name: "city",
      components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
      },
      data () {
          return {
            city: '',
            hotCities: [],
            allCities: {},
          }
      },
      methods: {
        getCityInfo () {
          axios.get('/api/city.json').then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.city = data.city
            this.hotCities = data.hotCity
            this.allCities = data.allCities
          }
        }
      },
      mounted () {
        this.getCityInfo()
      }
    }
</script>

<style scoped lang="stylus">
  .fixedTemplate
    position fixed
    width: 100%
    z-index :1
</style>
