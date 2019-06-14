/**
 *@author     黄佳
 *@date       2019/6/13  11:57
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
let cityDefault = '上海'
//如果使用了localstorage   最好进行捕获异常操作
try {
  if (localStorage.city) {
    cityDefault = localStorage.city
    console.log(cityDefault)
  }
}
catch (e) {

}

export default {
  city: cityDefault
}
