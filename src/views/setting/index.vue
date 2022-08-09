<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-08 15:36:00
 * @LastEditors: lc
 * @LastEditTime: 2022-08-08 17:16:49
-->
<template>
  <section class="setting_container">
    <header class="setting_header"></header>
    <main class="setting_main" @drop="drop" @dragover="dragover">
      <div
        v-for="item in pageComList"
        :style="{
          left: item.style.left + 'px',
          top: item.style.top + 'px',
          width: item.style.width + 'px',
          height: item.style.height + 'px',
          position: item.style.position,
          background: item.style.background
        }"
        :key="item.id"
        :draggable="true"
        @dragstart="dragStart($event, item)"
      >
        <component :is="item.com" :style="item.style"></component>
      </div>
    </main>
  </section>
  <div class="com_list">
    <div
      v-for="item in comList"
      :key="item.name"
      class="com_item"
      :draggable="true"
      @dragstart="dragStart($event, item)"
    >
      <component :is="item.com"></component>
    </div>
  </div>
</template>
<script setup>
import MyText from "components/text.vue";
import { ref, reactive, markRaw, inject, nextTick, onBeforeUnmount } from "vue";
let count = 0;
const comList = [
  {
    name: "text",
    com: markRaw(MyText),
    style: {
      width: "",
      height: "",
      fontSize: 14,
      color: "#ff0000",
      position: "absolute",
      background: 'pink',
    },
  },
];
let dragingCom = null;
const pageComList = reactive([]);
const dragStart = (event, data) => {
  dragingCom = data;
};
const drop = (event) => {
  console.log(event);
  let com = { ...dragingCom };
  if (com.id) {
    com.style.left = event.layerX;
    com.style.top = event.layerY;
  } else {
    com.style = { ...com.style };
    com.style.left = event.layerX;
    com.style.top = event.layerY;
    com.id = com.name + "_" + count;
    count++;
    pageComList.push(com);
  }
  dragingCom = null;
};
const dragover = () => {
  console.log("dragover");
  event.preventDefault();
};
</script>
<style lang="scss">
.setting_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .setting_header {
    height: 50px;
    background: #464553;
  }
  .setting_main {
    flex: 1;
    overflow: hidden;
    position: relative;
  }
}
.com_list {
  position: fixed;
  width: 250px;
  height: calc(100% - 70px);
  padding: 10px 5px;
  top: 60px;
  left: 10px;
  margin: auto;
  box-sizing: border-box;
  background: #165485;
  .com_item {
    width: 110px;
    height: 60px;
    margin: 5px;
    background: pink;
    float: left;
    user-select: none;
  }
}
</style>