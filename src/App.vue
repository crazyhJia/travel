<template>
  <div id="app">
    <!--exclude="detail"   意味着detail页面并不被缓存-->
    <keep-alive exclude="detail">
      <!--router-view 显示的是当前路由地址对应的内容,  指向route/index.js-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
