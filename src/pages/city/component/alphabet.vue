<template>
    <div class="alphabet">
      <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
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
        name: "city-alphabet"
    }
</script>

<style lang="stylus" scoped>
.alphabet
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 55px
  right:0
  bottom:0
  width: 15px
  .item
    line-height : 15px
    text-align : center
    color: deepskyblue

</style>
