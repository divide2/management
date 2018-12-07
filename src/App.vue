<template>
    <view-box id="app">
        <router-view></router-view>
        <tabbar></tabbar>
    </view-box>
</template>

<script>
//import '//at.alicdn.com/t/font_946044_mwcpatwhpih.js'
import Tabbar from '@/components/tabbar.vue'
import {Viewbox} from 'vux'

export default {
  name: 'app',
  components: {
    Tabbar, Viewbox
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
