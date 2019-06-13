/**
 *@author     黄佳
 *@date       2019/6/13  10:50
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
  //按官网文档  组件可以不用dispatch到actions 可以直接到mutations
  // actions: {
  //   //ctx 上下文参数
  //   changeCity (ctx, value) {
  //     console.log(value)
  //     ctx.commit('changeCity',value)
  //   }
  // },
  mutations: {
    changeCity (state,value){
      state.city = value;
    }
  }
})
