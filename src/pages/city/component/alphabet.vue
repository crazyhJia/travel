<template>
    <div class="alphabet">
      <ul class="list">
        <li class="item"
            v-for="item in letters" :key="item"
            @touchStart="handleTouchStart"
            @handleTouchMove="handleTouchMove"
            @handleTouchEnd="handleTouchEnd"
            @click="handleletterClick"
            :ref="item"
        >{{item}}</li>
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
      },
      computed: {
        letters () {
          const letters = [];
          for (let i in this.allCities) {
            letters.push(i)
          }
          return letters;
        }
      },
      data () {
          return {
            touchStatus: false,
            startY: 0,
            timer: null
          }
      },
      updated () {
        this.startY = this.$refs['A'][0].offsetTop
      },
      methods: {
        handleletterClick (e) {
          this.$emit('handleLetterChange',e.target.innerText)
        },
        //兄弟节点之间传值
        handleTouchStart () {
          this.touchStatus = true;
        },
        handleTouchMove (e) {
          if (this.touchStatus) {
            //timer的设置是为了减少handleTouchMove的执行
            if(this.timer) {
              clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
              const touchY = e.touches[0].clientY-79
              const index = Math.floor((touchY - this.startY)/20)
              if (index >= 0 && index < this.letters.length){
                this.$emit('change',this.letters[index ])
              }
            },16)
          }
        },
        handleTouchEnd () {
          this.touchStatus = false;
        }
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
