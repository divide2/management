<template>
  <view-box id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </view-box>
</template>

<script>
import Tabbar from '@/components/tabbar.vue'
import { ViewBox } from 'vux'

export default {
  name: 'App',
  components: {
    Tabbar, ViewBox
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #F7F7F7;
    min-height: 100vh;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
