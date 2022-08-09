<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-08 15:54:17
 * @LastEditors: lc
 * @LastEditTime: 2022-08-08 17:15:34
-->
<template>
    <div :style="{
        fontSize: style.fontSize + 'px',
        color: style.color,
    }">text</div>
</template>
<script setup>
const props = defineProps({
  style: {
    default: () => {
        return {}
    }
  },
});
</script>