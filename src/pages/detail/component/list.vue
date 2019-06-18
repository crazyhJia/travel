<template>
    <div>
      <div class="item" v-for="item,index in list" :key="index">
        <div class="item-title">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div v-if="item.children">
          <detail-list :list="item.children" class="item-children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/18  11:15
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description 递归组件的使用
     */
    export default {
      name: "detail-list",
      props: {
        list: Array
      }


    }
</script>

<style lang="stylus" scoped>
  item-title-icon
    position : relative
    left: .12rem
    top: .12rem
    display : inline-block
    width: .72rem
    height: .72rem
    background : url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.9rem no-repeat
    margin-right:.2rem
    background-size : .8rem 6rem
  .item-title
    line-height: 2rem
    font-size : 14px
    padding: 0 .4rem
  .item-children
    padding: 0 .6rem
</style>
