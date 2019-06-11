<template>
    <div class="search">
      <input class="search-input" placeholder="输入城市或拼音"/>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/11  15:36
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "city-search"
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

</style>
