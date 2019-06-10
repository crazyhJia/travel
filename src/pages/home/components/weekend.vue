<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul v-for="item,index in recommandList" :key="item.id">
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/10  20:13
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "home-weekend",
      data () {
        return {
          recommandList: [
            {
              id: '0001',
              imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/9114ed957e11683c9aeed0e23cef82cc.jpg',
              title: '初夏不眠夜',
              desc: '夜游巴塞罗那，邂逅艺术之城'
            },
            {
              id: '0001',
              imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/9114ed957e11683c9aeed0e23cef82cc.jpg',
              title: '初夏不眠夜',
              desc: '夜游巴塞罗那，邂逅艺术之城'
            },
            {
              id: '0001',
              imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/9114ed957e11683c9aeed0e23cef82cc.jpg',
              title: '初夏不眠夜',
              desc: '夜游巴塞罗那，邂逅艺术之城'
            },
            {
              id: '0001',
              imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/9114ed957e11683c9aeed0e23cef82cc.jpg',
              title: '初夏不眠夜',
              desc: '夜游巴塞罗那，邂逅艺术之城'
            }
          ]

        }
      }
    }
</script>

<style lang="stylus" scoped>
  .title
    line-height: 1.4rem
    background :#ccc
    text-indent: 1rem
    font-weight bold
  .item-img-wrapper
    overflow : hidden
    padding-bottom : 10px
  .item-img
    height: 80px
    width: 100%
  .item-info
    padding: .4rem
    .item-title
      line-height:10px
      font-size:.3rem
      overflow :hidden
      white-space : nowrap
      text-overflow: ellipsis
    .item-desc
      line-height : 1rem
      color: darkgray
      padding: .7rem 0
      overflow :hidden
      white-space : nowrap
      text-overflow: ellipsis


</style>

