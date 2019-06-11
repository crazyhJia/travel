<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">上海</div>
            </div>
            <div class="button-wrapper">
              <div class="button">西安</div>
            </div>
            <div class="button-wrapper">
              <div class="button">成都</div>
            </div>
            <div class="button-wrapper">
              <div class="button">深圳</div>
            </div>
            <div class="button-wrapper">
              <div class="button">南京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">广州</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title">A</div>
          <div class="item-list">
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title">A</div>
          <div class="item-list">
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title">A</div>
          <div class="item-list">
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title">A</div>
          <div class="item-list">
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title">A</div>
          <div class="item-list">
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    /**
     *@author     黄佳
     *@date       2019/6/11  15:54
     *@Copyright 天源迪科信息技术股份有限公司
     *@Description
     */
    // import BScroll from 'better-scroll'
    export default {
        name: "city-list",
      // mounted () {
      //     this.scroll = new Bscroll(this.$ref.wrapper)
      // }

    }
</script>

<style lang="stylus" scoped>
.list
  overflow : hidden
  position : absolute
  top: 53px
  left: 0
  width: 100%
  .title
    border-bottom : 1px solid lightgray
    line-height : 1.3rem
    padding-left : .5rem
    background #eee
    color: #666
  .button-list
    overflow :hidden
    line-height: 16px
    padding: .3rem .3rem
    .button-wrapper
      float: left
      width: 33.3%
      .button
        margin: 5px
        padding: 5px
        text-align: center
        border: 1px solid #ccc
        border-radius :6px
  .item-list
    .item
      line-height : 22px
      margin-left : 10px
      padding: 4px
      border-bottom : 1px solid lightgray
</style>
