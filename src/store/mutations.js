/**
 *@author     黄佳
 *@date       2019/6/13  12:00
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
export default {
  changeCity (state,value){
    state.city = value;
    try {
      localStorage.city = value
    }
    catch (e) {}
  }
}
