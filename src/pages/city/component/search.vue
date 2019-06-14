<template>
  <div>
    <div class="search">
      <input v-model="keyWord" type="text" class="search-input" placeholder="输入城市或拼音"/>
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li  class="search-item" v-for="item in list" :key="item.id"
             @click="handelCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>

</template>

<script>
  /**
   *@author     黄佳
   *@date       2019/6/11  15:36
   *@Copyright 天源迪科信息技术股份有限公司
   *@Description
   */
  import BScroll  from 'better-scroll';
  import { mapMutations } from 'vuex'

  export default {
    name: "city-search",
    props: {
      allCities: Object
    },
    data () {
      return {
        keyWord:'',
        list: [],
        timer: null
      }
    },
    computed: {
      hasNoData () {
        return !this.list.length
      }
    },
    wacth: {
      keyWord () {
        console.log()
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyWord) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.allCities) {
            this.allCities[i].forEach((value) => {
              if (value.name.indexOf(this.keyWord) > -1 ) {
                result.push(value)
              }
            })
          }
          console.log(result)
          this.list = result
        },100)
      }
    },
    methods: {
      handelCityClick (value) {
        //按官网文档  组件可以不用dispatch到actions 可以直接到mutations
        // this.$store.dispatch('changeCity',value)
        // this.$store.commit('changeCity',value)
        //这句是上一句和 ...mapMutations运用后的简写
        this.changeCity(value )
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
      // handelCityClick (value) {
      //   //按官网文档  组件可以不用dispatch到actions 可以直接到mutations
      //   // this.$store.dispatch('changeCity',value)
      //   this.$store.commit('changeCity',value)
      //   this.$router.push('/')
      // }
    },
    mounted () {
       this.scroll = new BScroll(this.$refs.search)
    },
  }
</script>

<style lang="stylus" scoped>
  .search
    height: 1.4rem
    padding: 5px auto
    background : lightskyblue
    .search-input
      height: 1.2rem
      line-height :1.2rem
      width: 100%
      text-align: center
      border-radius : 4px
      padding: 5px auto
      box-sizing: border-box

  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    height: 50px
    top: 3.28rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: 30px
      padding-left: 10px
      background: #fff
      color: #666

</style>
