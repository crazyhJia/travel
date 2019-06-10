<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="page,index in pages" :key="index">
        <div class="icon"  v-for="icon in iconList" :key="icon.id">
          <div>
            <img  :src="icon.imgUrl"/>
          </div>
          <p>{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/10  15:55
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "home-icon",
      data () {
          return {
            iconList:[
              {
                id: '001',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg',
                desc: '景点1'
              },
              {
                id: '002',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点2'
              },
              {
                id: '003',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点3-dffgdsgsgsgsgdsgsg'
              },
              {
                id: '004',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点4'
              },
              {
                id: '005',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点5'
              },
              {
                id: '006',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点6'
              },
              {
                id: '007',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点7'
              },
              {
                id: '008',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点8'
              },
              {
                id: '009',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点9'
              },
              {
                id: '010',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
                desc: '景点10'
              }
              ]
          }
      },
      computed: {
          pages (){
            const pages = []
            this.iconList.forEach((item, index) => {
              const page = Math.floor(index/4)
              if(!pages[page]){
                pages[page] = []
              }
              pages[page].push(item)
            })
            return pages;
          }
      }
    }
</script>

<style scoped lang="stylus">
  /*@import '~stylus/mixins.styl'*/
.icons >>> .swiper-container
  height: 0
  margin:0px;
  padding-bottom: 25%;
.icon
  /*position : relative*/
  /*float: left*/
  display inline-block
  height: 0
  width: 25%
  img
    width: 80px;
    height: 60px;
    padding: 5px 10px
    border-radius : 20px
  p
    text-align : center
    overflow :hidden
    white-space : nowrap
    text-overflow: ellipsis

  //ellipsis()
</style>
