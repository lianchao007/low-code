<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-12 14:45:54
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 15:20:54
-->

<template>
  <div style="height: 100%; display: flex; flex-direction: column">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>页面</el-breadcrumb-item>
      <el-breadcrumb-item>容器</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="attr" :label-width="80" size="small">
      <el-tabs v-model="activeName">
        <el-tab-pane label="属性" name="属性">User</el-tab-pane>
        <el-tab-pane label="样式" name="样式">
          <style-com :attr="attr"></style-com>
        </el-tab-pane>
        <el-tab-pane label="事件" name="事件">Role</el-tab-pane>
        <el-tab-pane label="高级" name="高级">Task</el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>
<script setup>
import StyleCom from 'componentsSet/style/text.vue'
import { ref } from "vue";
import { ArrowRight  } from "@element-plus/icons-vue";
const props = defineProps({
  attr: {
    default: {},
  },
});
const activeName = ref("样式");
console.log(props.attr);
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  padding: 0 16px;
  line-height: 29px;
  border-bottom: 1px solid rgba(31, 56, 88, 0.1);
}
.el-tabs {
  flex: 1;
  display: flex;
  flex-direction: column;
}
:deep(.el-tabs__content) {
  flex: 1;
  overflow: auto;
}
:deep(.el-tabs__item.is-top) {
  padding: 0 20px !important;
}
</style>