<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="hcity in hotCities"
                 :key="hcity.id"
                 @click="handelCityClick(hcity.name)"
            >
              <div class="button">{{hcity.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="city,key in allCities" :key="key">
          <div class="title">{{key}}</div>
          <div class="item-list" v-for="item in city"
               :key="item.id" @click="handelCityClick(item.name)">
            <div class="item" >{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/11  15:54
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    // import BScroll from 'better-scroll'
    export default {
        name: "city-list",
      // mounted () {
      //     this.scroll = new Bscroll(this.$ref.wrapper)
      // }
      props: {
        city: String,
        hotCities:Array,
        allCities:Object

      },
      data () {
          return {

          }
      },
      methods: {
        handelCityClick (value) {
          //按官网文档  组件可以不用dispatch到actions 可以直接到mutations
          // this.$store.dispatch('changeCity',value)
          this.$store.commit('changeCity',value)
        }
      },


    }
</script>

<style lang="stylus" scoped>
.list
  overflow : hidden
  position : absolute
  top: 53px
  left: 0
  width: 100%
  .title
    border-bottom : 1px solid lightgray
    line-height : 1.3rem
    padding-left : .5rem
    background #eee
    color: #666
  .button-list
    overflow :hidden
    line-height: 16px
    padding: .3rem .3rem
    .button-wrapper
      float: left
      width: 33.3%
      .button
        margin: 5px
        padding: 5px
        text-align: center
        border: 1px solid #ccc
        border-radius :6px
  .item-list
    .item
      line-height : 22px
      margin-left : 10px
      padding: 4px
      border-bottom : 1px solid lightgray
</style>
