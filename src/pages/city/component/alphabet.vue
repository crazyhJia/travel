<template>
    <div class="alphabet">
      <ul class="list" v-for="item,key in allCities" :key="key">
        <li class="item">{{key}}</li>
      </ul>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/11  17:00
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "city-alphabet",
      props:{
        allCities: Object
      }
    }
</script>

<style lang="stylus" scoped>
.alphabet
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 155px
  right:0
  bottom:0
  width: 15px
  .item
    line-height : 15px
    text-align : center
    color: deepskyblue

</style>
