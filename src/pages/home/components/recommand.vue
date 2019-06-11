<template>
  <div>
    <div class="title">
      热搜推荐
    </div>
    <ul v-for="item,index in recommandList" :key="item.id">
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/10  18:51
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "home-recommand",
        data () {
          return {
            recommandList: [
              {
                id: '0001',
                imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/d70fa4c6c8925b2e15f806ade0e17701.jpg',
                title: '初夏不眠夜',
                desc: '夜游巴塞罗那，邂逅艺术之城'
              },
              {
                id: '0002',
                imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/d70fa4c6c8925b2e15f806ade0e17701.jpg',
                title: '初夏不眠夜',
                desc: '夜游巴塞罗那，邂逅艺术之城'
              },
              {
                id: '0003',
                imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/d70fa4c6c8925b2e15f806ade0e17701.jpg',
                title: '初夏不眠夜',
                desc: '夜游巴塞罗那，邂逅艺术之城'
              },
              {
                id: '0004',
                imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/d70fa4c6c8925b2e15f806ade0e17701.jpg',
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
  .item
    overflow :hidden
    display: flex
    height: 80px
    background : #FFF
    border-bottom : 1px solid lightgray
    .item-img
      width: 100px
      height: 80px
    .item-info
      flex: 1
      padding: .4rem
      min-width: 0
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
      .item-button
        background: orange
        border-radius: 4px
        padding: 0 5px
        color: #fff

</style>
