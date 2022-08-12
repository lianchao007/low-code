<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-09 15:21:56
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 16:09:04
-->
<template>
  <div class="">
    <div style="padding: 10px 16px">
      <el-input
        v-model="searchVal"
        class="w-50 m-2"
        placeholder="Pick a date"
        :suffix-icon="Search"
      />
    </div>
    <el-collapse v-model="activeNames">
      <el-collapse-item
        :title="mod.name"
        :name="mod.name"
        v-for="mod in comList"
        :key="mod.name"
      >
        <dl
          v-for="com in mod.components"
          class="com_box"
          @mousedown="startMove($event, com)"
        >
          <dt>
            <img src="" alt="" />
          </dt>
          <dd>
            {{ com.name }}
          </dd>
        </dl>
      </el-collapse-item>
    </el-collapse>
  </div>
  <div
    class="moving_com"
    v-if="movingCom"
    :style="{
      left: movingCom.left,
      top: movingCom.top,
    }"
  >
    {{ movingCom.name }}
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  onBeforeUnmount,
  onMounted,
  toRefs,
  markRaw,
} from "vue";
import { Search } from "@element-plus/icons-vue";
import { componentList } from "assets/js/baseData.js";
import { cloneDeep } from "lodash";
const emit = defineEmits(["putCom"]);
const searchVal = ref("");
const timer = ref(null);
const activeNames = ref(["通用"]);
const movingCom = ref(null);
const comList = reactive(componentList);

const startMove = (event, com) => {
  clearTimeout(timer);
  timer.value = setTimeout(() => {
    movingCom.value = { ...com };
    movingCom.value.attr = cloneDeep(movingCom.value.attr);
    movingCom.value.left = event.pageX + "px";
    movingCom.value.top = event.pageY + "px";
    console.log(movingCom.value);
  });
};
const moving = (event) => {
  if (movingCom.value) {
    movingCom.value.left = event.pageX + "px";
    movingCom.value.top = event.pageY + "px";
  }
};
const endMove = (event) => {
  movingCom.value = null;
};
onMounted(() => {
  document.addEventListener("mousemove", moving);
});
onBeforeUnmount(() => {
  document.removeEventListener("mousemove", moving);
});
defineExpose({ movingCom });
</script>
<style lang="scss" scoped>
:deep(.el-collapse-item__header) {
  padding-left: 20px;
  &.is-active {
    border-bottom-color: var(--el-collapse-border-color);
  }
}
:deep(.el-collapse-item__content) {
  overflow: auto;
}
.com_box {
  float: left;
  width: 100px;
  height: 114px;
  padding: 14px;
  box-sizing: border-box;
  border-right: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 15%);
    border-color: transparent;
  }
  dt {
    width: 71px;
    height: 56px;
    margin-bottom: 14px;
    img {
      height: 56px;
      margin: 0 auto;
      display: block;
    }
  }
  dd {
    line-height: 14px;
    text-align: center;
    overflow: hidden;
  }
}
.moving_com {
  position: fixed;
  background: #aaa;
  pointer-events: none;
}
</style>