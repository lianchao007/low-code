<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-10 09:17:23
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 13:38:09
-->
<template>
  <div
    class="my-box"
    :style="style"
    @mouseup.stop="insertCom"
    :data-level="level"
    :data-path="path"
  >
    <component
      :is="com.com"
      v-for="(com, idx) in info.children"
      :key="idx"
      :info="com"
      @putCom="putCom"
      :level="level + 1"
      :path="path + '-' + idx"
    ></component>
  </div>
</template>
<script setup>
import { initStyles } from 'utils/comUtils.js'
import { computed } from "vue";
const emit = defineEmits(["putCom"]);
const props = defineProps({
  info: {
    default: {
      attr: {},
      children: [],
    },
  },
  level: {
    default: 1,
  },
  path: {
    default: "",
  },
});

const putCom = (target) => {
  emit("putCom", target);
};

const insertCom = (event) => {
  emit("putCom", props.info.children);
};
const style = computed(() => {
  return initStyles(props.info)
});
</script>
<style lang="scss" scoped>
.my-box {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
}
</style>