<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-10 10:11:19
 * @LastEditors: lc
 * @LastEditTime: 2022-08-10 16:07:38
-->
<template>
    <el-button class="my-tree-node" :data-level="level" :data-path="path">Default</el-button>
</template>
<script setup>
const props = defineProps({
  info: {
    default: {
      attr: {},
      style: {},
      children: []
    },
  },
  level: {
    default: 1
  },
  path: {
    default: "",
  },
});
</script>