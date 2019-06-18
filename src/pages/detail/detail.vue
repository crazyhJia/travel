<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
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
    export default {
        name: "detail",
        components: {
          DetailBanner,
          DetailHeader,
          DetailList
      },
      data () {
          return {
            list: [
              {
                title: '成人票',
                children: [
                  {
                    title:'成人三馆联票',
                    children: [
                      {
                        title:'成人三馆联票-未央区'
                      },
                      {
                        title:'成人三馆联票-新城区'
                      },
                    ]
                  },
                  {
                    title:'成人五馆联票'
                  },
                  {
                    title:'成人全馆联票'
                  }
                ]
              },
              {
                title: '学生票'
              },
              {
                title: '儿童票'
              },
              {
                title: '特惠票'
              },
            ]
          }
      }
    }
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
