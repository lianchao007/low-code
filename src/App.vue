<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-02-15 09:17:30
 * @LastEditors: lc
 * @LastEditTime: 2022-08-09 10:40:20
-->
<script setup>
import { provide, readonly } from "vue";
import * as echarts from 'echarts'
import api from 'api/apiList.js'
provide('$api',readonly(api))
provide('$echarts',readonly(echarts))
</script>

<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #edeff3;
  color: #555;
  height: 100%;
}
</style>
