<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-12 14:44:40
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 15:18:07
-->

<template>
  <span
    class="my-text"
    :style="style"
    @mouseup.stop="insertCom"
    :data-level="level"
    :data-path="path"
  >
    {{ info.attr.text || "text" }}
  </span>
</template>
<script setup>
import { initStyles } from "utils/comUtils.js";
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
  return initStyles(props.info);
});
</script>
<style lang="scss" scoped>
.my-text {
  box-sizing: border-box;
}
</style>