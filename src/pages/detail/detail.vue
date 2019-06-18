<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/17  11:15
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    import DetailBanner from './component/detailBanner'
    import DetailHeader from './component/header'
    import DetailList from './component/list'
    import axios from 'axios'
    export default {
        name: "detail",
        components: {
          DetailBanner,
          DetailHeader,
          DetailList
      },
      data () {
          return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            categoryList: [],
            // list: [
            //   {
            //     title: '成人票',
            //     children: [
            //       {
            //         title:'成人三馆联票',
            //         children: [
            //           {
            //             title:'成人三馆联票-未央区'
            //           },
            //           {
            //             title:'成人三馆联票-新城区'
            //           },
            //         ]
            //       },
            //       {
            //         title:'成人五馆联票'
            //       },
            //       {
            //         title:'成人全馆联票'
            //       }
            //     ]
            //   },
            //   {
            //     title: '学生票'
            //   },
            //   {
            //     title: '儿童票'
            //   },
            //   {
            //     title: '特惠票'
            //   },
            // ]
          }
      },
      methods: {
        getDetailInfo () {
          axios.get('/api/detail.json',{
            params: {
              id: this.$route.params.id
            }
          }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            console.log(data)
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.categoryList = data.categoryList

          }
        }
      },
      mounted () {
          this.getDetailInfo()
      }
    }
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
