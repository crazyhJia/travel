import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/city',
    //   name: 'city',
    //   component: City
    // },
    // {
    //   path: '/detail',
    //   // path: '/detail/:id',
    //   name: 'detail',
    //   component: Detail
    // },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/city')
    },
    {
      path: '/detail',
      // path: '/detail/:id',
      name: 'detail',
      //异步加载组件方式   用于app.js文件有几mb大时，项目文件过大时，拆分代码
      component: () => import('@/pages/detail/detail')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return{x:0, y:0}
  }
})
