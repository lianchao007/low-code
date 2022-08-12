<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-08 15:36:00
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 15:50:47
-->
<template>
  <section class="setting_container">
    <header class="setting_header">
      <span></span>
      <div class="setting_header_center">
        <ul @click="setScreenType">
          <li
            class="iconfont icon-shouji"
            data-val="1"
            data-width="375"
            :class="{ active: screenType == 1 }"
            title="手机"
          ></li>
          <li
            class="iconfont icon-a-23Cpingban"
            data-val="2"
            data-width="768"
            :class="{ active: screenType == 2 }"
            title="平板"
          ></li>
          <li
            class="iconfont icon-daping"
            data-val="3"
            data-width="1285"
            :class="{ active: screenType == 3 }"
            title="电脑"
          ></li>
        </ul>
        <el-input
          v-model.number="screenW"
          placeholder="屏幕宽度"
          style="width: 120px"
        >
          <template #append>px</template>
        </el-input>
      </div>
      <div></div>
    </header>
    <main class="setting_main">
      <div class="setting_main_left" @click.stop>
        <div class="setting_main_menu">
          <el-tooltip
            effect="dark"
            content="Right prompts info"
            placement="right"
          >
            <i
              class="iconfont icon-dagangguanli_moren"
              @click="toggleSecondMenu(1)"
              :class="{ active: secondMenuConfig.active == 1 }"
            ></i>
          </el-tooltip>
          <el-tooltip
            effect="dark"
            content="Right prompts info"
            placement="right"
          >
            <i
              class="iconfont icon-yuanshuju-zujianku"
              @click="toggleSecondMenu(2)"
              :class="{ active: secondMenuConfig.active == 2 }"
            ></i>
          </el-tooltip>
        </div>
      </div>
      <div
        class="setting_main_menu_second"
        v-if="secondMenuConfig.active"
        :class="{ fixed: secondMenuConfig.fixed }"
        @click.stop
      >
        <div class="setting_main_menu_second_header">
          <div class="second_header_title">组件库</div>
          <div class="second_header_operate">
            <i
              class="iconfont"
              :class="[secondMenuConfig.fixed ? 'icon-suozi' : 'icon-suo']"
              @click="secondMenuConfig.fixed = !secondMenuConfig.fixed"
            ></i>
            <i
              class="iconfont icon-guanbi"
              @click="secondMenuConfig.active = 0"
            ></i>
          </div>
        </div>
        <div class="setting_main_menu_second_main">
          <components ref="comList"></components>
        </div>
      </div>
      <div class="setting_main_center">
        <div class="setting_main_center_box">
          <div
            :data-level="1"
            class="setting_main_container"
            @mouseup.stop="insertCom"
            @mousemove="throughEle"
            @mouseleave="leavePage"
            @click.stop="selEle"
            ref="setting_main_container"
          >
            <component
              :is="com.com"
              v-for="(com, idx) in outlineTree"
              :key="idx"
              :info="com"
              @putCom="putCom"
              :level="2"
              :path="idx"
            ></component>
            <div
              class="hover_ele"
              :style="hoverEle.style"
              v-if="hoverEle"
            ></div>
            <div
              class="select_ele"
              :style="selectEle.style"
              v-if="selectEle"
            ></div>
          </div>
        </div>
      </div>
      <div class="setting_main_right">
        <component
          :is="settingBox.setCom"
          v-if="settingBox"
          :attr="settingBox.attr"
        ></component>
      </div>
    </main>
  </section>
</template>
<script setup>
import components from "components/menu/components.vue";
import {
  ref,
  reactive,
  markRaw,
  inject,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  toRef
} from "vue";
import { ElButton, ElLink } from "element-plus";
import MyButton from "components/universal/my-button.vue";
import MyBox from "components/base/my-box.vue";
import SetBox from "componentsSet/base/set-box.vue";
import SetButton from "componentsSet/universal/set-button.vue";
import { findProp } from "@vue/compiler-core";
const screenW = ref(1285);
const screenType = ref(3);
const comList = ref();
const setting_main_container = ref();
const hoverEle = ref(null);
const selectEle = ref(null);
const settingBox = ref(null);
let observer = null;
let observer2 = null;
// 二级菜单参数
const secondMenuConfig = reactive({
  fixed: true,
  active: 1,
});
// 大纲树
const outlineTree = reactive([
  {
    com: markRaw(MyBox),
    attr: {
      display: "block",
      width: "100",
      height: "300",
      widthUnit: "%",
      heightUnit: "px",
      backgroundType: 0,
      backgroundImage:
        "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
      backgroundColor: "",
      backgroundRepeat: "",
      backgroundSize: "",
      backgroundWidth: "",
      backgroundHeight: "",
      padding: [0, 0, 0, 0],
      margin: [0, 0, 0, 100],
      borderWidth: '',
      borderColor: '',
      borderStyle: '',
      borderTopWidth: '',
      borderRightWidth: '',
      borderBottomWidth: '',
      borderLeftWidth: '',
      borderTopColor: '',
      borderRightColor: "",
      borderBottomColor: "",
      borderLeftColor: "",
      borderTopStyle: '',
      borderRightStyle: '',
      borderBottomStyle: '',
      borderLeftStyle: '',
      radiusType: 'merge',
      borderRadius: '',
      borderRadiusUnit: 'px',
      borderRadiusApart: [0,0,0,0],
      borderRadiusUnitApart: ['px', 'px', 'px', 'px'],
      ZIndex: '',
      position: '',
      float: 'none',
      clear: 'none'
    },
    children: [],
    setCom: markRaw(SetBox),
  },
  // {
  //   com: markRaw(MyBox),
  //   attr: {
  //     style: {
  //       background: "pink",
  //     },
  //   },
  //   setCom: markRaw(SetBox),
  //   children: reactive([
  //     {
  //       com: markRaw(MyBox),
  //       setCom: markRaw(SetBox),
  //       attr: {
  //         style: {
  //           height: "50%",
  //           background: "yellow",
  //         },
  //       },
  //       children: [
  //         {
  //           com: markRaw(MyButton),
  //           attr: {},
  //           setCom: markRaw(SetButton),
  //         },
  //       ],
  //     },
  //   ]),
  // },
]);
const setScreenType = (event) => {
  if (event.target.dataset.val) {
    screenType.value = event.target.dataset.val;
    screenW.value = event.target.dataset.width;
  }
};
// 切换二级菜单
const toggleSecondMenu = (active) => {
  secondMenuConfig.active = secondMenuConfig.active == active ? 0 : active;
};
const closeSecondMenu = () => {
  if (!secondMenuConfig.fixed) {
    secondMenuConfig.active = 0;
  }
};
// 固定二级菜单
const toggleSecondMenuFixed = () => {
  secondMenuConfig.fixed = !secondMenuConfig.fixed;
};
// 放置组件
const putCom = (target) => {
  if (comList.value && comList.value.movingCom && target) {
    console.log(comList.value.movingCom.attr)
    target.push({
      com: markRaw(comList.value.movingCom.component),
      setCom: markRaw(comList.value.movingCom.setCom),
      attr: comList.value.movingCom.attr,
      children: [],
    });
  }
  endMove();
};
// 放置在页面上的组件
const insertCom = (event) => {
  putCom(outlineTree);
};
// 放置结束
const endMove = (event) => {
  if (comList.value) {
    comList.value.movingCom = null;
  }
};
// 经过元素
const throughEle = (event) => {
  let re = getthroughEle(event.path);
  if (re) {
    hoverEle.value = {
      re: re,
      style: {
        height:
          (re.dataset.level == 1 ? re.scrollHeight : re.offsetHeight) + "px",
        width: (re.dataset.level == 1 ? re.scrollWidth : re.offsetWidth) + "px",
        left: re.offsetLeft + "px",
        top: re.offsetTop + "px",
      },
    };
  }
};
const selEle = (event) => {
  let re = getthroughEle(event.path);
  if (re) {
    selectEle.value = {
      re: re,
      style: {
        height:
          (re.dataset.level == 1 ? re.scrollHeight : re.offsetHeight) + "px",
        width: (re.dataset.level == 1 ? re.scrollWidth : re.offsetWidth) + "px",
        left: re.offsetLeft + "px",
        top: re.offsetTop + "px",
      },
    };
    let node = getTreeNode(re.dataset.path);
  }
};
watch(selectEle, (val) => {
  if (val) {
    let node = getTreeNode(val.re.dataset.path);
    settingBox.value = node;
  } else {
    settingBox.value = null;
  }
});
const getTreeNode = (p) => {
  if (p) {
    let path = p.split("-");
    let temp = outlineTree[path[0]];
    for (let i = 1; i < path.length; i++) {
      temp = temp.children[path[i]];
    }
    return temp;
  } else {
    return outlineTree;
  }
};
const reloadAssEle = () => {
  if (hoverEle.value) {
    let re = hoverEle.value.re;
    hoverEle.value.style = {
      height: (re.dataset.level == 1 ? re.scrollHeight : re.offsetHeight) + "px",
      width: (re.dataset.level == 1 ? re.scrollWidth : re.offsetWidth) + "px",
      left: re.offsetLeft + "px",
      top: re.offsetTop + "px",
    };
  }
  if (selectEle.value) {
    let re = selectEle.value.re;
    selectEle.value.style = {
      height: (re.dataset.level == 1 ? re.scrollHeight : re.offsetHeight) + "px",
      width: (re.dataset.level == 1 ? re.scrollWidth : re.offsetWidth) + "px",
      left: re.offsetLeft + "px",
      top: re.offsetTop + "px",
    };
  }
};
const leavePage = () => {
  hoverEle.value = null;
};
const getthroughEle = (path) => {
  for (let i = 0; i < path.length; i++) {
    if (path[i].dataset.level) {
      return path[i];
    }
  }
};
onMounted(() => {
  document.addEventListener("mouseup", endMove);
  document.addEventListener("click", closeSecondMenu);
  // 监听元素大小变化
  observer = new ResizeObserver((entries) => {
    reloadAssEle();
  });
  observer.observe(setting_main_container.value);

  observer2 = new MutationObserver((mutationList) => {
    reloadAssEle();
  });
  observer2.observe(setting_main_container.value, {
    childList: true,
    attributes: true,
    subtree: true,
  });
});
onBeforeUnmount(() => {
  document.removeEventListener("mouseup", endMove);
  document.removeEventListener("click", closeSecondMenu);
  observer && observer.disconnect();
  observer2 && observer2.disconnect();
});
</script>
<style lang="scss" scoped>
.setting_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .setting_header {
    height: 48px;
    line-height: 48px;
    margin-bottom: 2px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    .setting_header_center {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        align-items: center;
        margin-right: 20px;
      }
      li {
        padding: 6px;
        margin: 0 4px;
        border-radius: 3px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        cursor: pointer;
      }
      li:hover,
      li.active {
        background: #f2f2f2;
      }
      .iconfont {
        font-size: 20px;
      }
    }
  }
  .setting_main {
    flex: 1;
    overflow: hidden;
    display: flex;
    position: relative;
    .setting_main_left {
      width: 48px;
      background: #fff;
      position: relative;
    }
    .setting_main_center {
      flex: 1;
      padding: 16px;
      overflow: hidden;
    }
    .setting_main_center_box {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    .setting_main_right {
      width: 300px;
      height: 100%;
      background: #fff;
    }
    .setting_main_menu {
      display: flex;
      flex-direction: column;
      .iconfont {
        font-size: 24px;
        width: 48px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        cursor: pointer;
        &.active {
          color: #0079f2;
        }
      }
    }
    .setting_main_menu_second {
      width: 300px;
      height: 100%;
      position: absolute;
      left: 48px;
      top: 0;
      margin-left: 1px;
      background: #fff;
      display: flex;
      flex-direction: column;
      box-shadow: 4px 6px 6px 0 rgb(31 50 88 / 8%);
      z-index: 10;
      &.fixed {
        position: static;
      }
      .setting_main_menu_second_header {
        height: 48px;
        padding: 0 15px;
        display: flex;
        line-height: 48px;
        .second_header_title {
          flex: 1;
        }
        .second_header_operate {
          display: flex;
          align-items: center;
        }
        .iconfont {
          width: 20px;
          height: 20px;
          line-height: 20px;
          margin: 3px;
          cursor: pointer;
          text-align: center;
        }
      }
      .setting_main_menu_second_main {
        flex: 1;
      }
    }
    .setting_main_container {
      width: 100%;
      height: 100%;
      background: #fff;
      overflow: auto;
      position: relative;
    }
  }
}
:deep(.el-input-group__append) {
  padding: 0 10px;
}
.hover_ele {
  position: absolute;
  box-sizing: border-box;
  border: 1px dashed #006cff;
  pointer-events: none;
  z-index: 1;
}
.select_ele {
  position: absolute;
  box-sizing: border-box;
  border: 2px solid #006cff;
  pointer-events: none;
  z-index: 2;
}
</style>