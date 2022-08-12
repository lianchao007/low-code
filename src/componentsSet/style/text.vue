<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-12 15:21:21
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 15:46:23
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-12 13:40:18
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 14:26:57
-->
<template>
  <el-form-item label="文本内容">
    <el-input v-model="attr.text" placeholder="文本内容" />
  </el-form-item>
  <el-collapse v-model="activeStyle" accordion>
    <el-collapse-item title="布局" name="布局">
      <el-form-item label="布局模式">
        <el-radio-group v-model="attr.display">
          <el-tooltip content="内联布局 inline" placement="top">
            <el-radio-button label="inline">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="弹性布局 flex" placement="top">
            <el-radio-button label="flex">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="块级布局 block" placement="top">
            <el-radio-button label="block">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="内联块布局 inline-block" placement="top">
            <el-radio-button label="inline-block">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="隐藏 none" placement="top">
            <el-radio-button label="none">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
        </el-radio-group>
      </el-form-item>
      <div class="layout-box-container">
        <div class="margin-top-div">
          <el-input v-model.number="attr.margin[0]" placeholder="0" />
        </div>
        <div class="margin-right-div">
          <el-input v-model.number="attr.margin[1]" placeholder="0" />
        </div>
        <div class="margin-bottom-div">
          <span class="layout-box-tips">MARGIN</span>
          <el-input v-model.number="attr.margin[2]" placeholder="0" />
        </div>
        <div class="margin-left-div">
          <el-input v-model.number="attr.margin[3]" placeholder="0" />
        </div>
        <div class="padding-top-div">
          <el-input v-model.number="attr.padding[0]" placeholder="0" />
        </div>
        <div class="padding-right-div">
          <el-input v-model.number="attr.padding[1]" placeholder="0" />
        </div>
        <div class="padding-bottom-div">
          <span class="layout-box-tips">PADDING</span>
          <el-input v-model.number="attr.padding[2]" placeholder="0" />
        </div>
        <div class="padding-left-div">
          <el-input v-model.number="attr.padding[3]" placeholder="0" />
        </div>
      </div>
      <el-form-item label="" label-width="0">
        <el-input
          v-model="attr.width"
          style="width: calc(50% - 10px); margin: 0 5px"
          class="t_input"
        >
          <template #prefix> 宽度: </template>
          <template #append>
            <el-select
              v-model="attr.widthUnit"
              style="width: 40px"
              placeholder=" "
            >
              <el-option label="px" value="px" />
              <el-option label="%" value="%" />
              <el-option label="vw" value="vw" />
              <el-option label="" value="" />
            </el-select>
          </template>
        </el-input>
        <el-input
          v-model="attr.height"
          style="width: calc(50% - 10px); margin: 0 5px"
          class="t_input"
        >
          <template #prefix> 高度: </template>
          <template #append>
            <el-select
              v-model="attr.heightUnit"
              style="width: 40px"
              placeholder=" "
            >
              <el-option label="px" value="px" />
              <el-option label="%" value="%" />
              <el-option label="vh" value="vh" />
              <el-option label="" value="" />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
    </el-collapse-item>
    <el-collapse-item title="背景" name="背景">
      <el-form-item label="背景类型">
        <el-radio-group v-model="attr.backgroundType">
          <el-radio-button :label="0">颜色填充</el-radio-button>
          <el-radio-button :label="1">背景图片</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <template v-if="attr.backgroundType">
        <el-form-item label="图片地址">
          <el-input v-model="attr.backgroundImage" placeholder="输入图片url">
            <template #prefix>
              <el-icon class="el-input__icon"><PictureFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="图片重复">
          <el-select
            v-model="attr.backgroundRepeat"
            placeholder="图片重复"
            clearable
          >
            <el-option label="重复" value="repeat" />
            <el-option label="水平重复" value="repeat-x" />
            <el-option label="垂直重复" value="repeat-y" />
            <el-option label="不重复" value="no-repeat" />
            <el-option label="继承父元素" value="inherit" />
          </el-select>
        </el-form-item>
        <el-form-item label="图片大小">
          <el-select
            v-model="attr.backgroundSize"
            placeholder="图片大小"
            clearable
          >
            <el-option label="cover" value="cover" />
            <el-option label="contain" value="contain" />
            <el-option label="自定义" value="customize" />
          </el-select>
        </el-form-item>
        <el-form-item
          label=""
          v-if="attr.backgroundSize === 'customize'"
          label-width="0"
        >
          <el-input
            v-model="attr.backgroundWidth"
            style="width: calc(50% - 10px); margin: 0 5px"
            class="t_input"
          >
            <template #prefix> 宽度: </template>
          </el-input>
          <el-input
            v-model="attr.backgroundHeight"
            style="width: calc(50% - 10px); margin: 0 5px"
            class="t_input"
          >
            <template #prefix> 高度: </template>
          </el-input>
        </el-form-item>
      </template>
      <el-form-item label="背景颜色" v-else>
        <el-color-picker v-model="attr.backgroundColor" show-alpha />
      </el-form-item>
    </el-collapse-item>
    <el-collapse-item title="文字" name="文字">
      <el-form-item label="" label-width="0">
        <el-input
          v-model.number="attr.fontSize"
          style="width: calc(50% - 10px); margin: 0 5px"
          class="t_input"
        >
          <template #prefix> 字号: </template>
          <template #append> px </template>
        </el-input>
        <el-input
          v-model.number="attr.lineHeight"
          style="width: calc(50% - 10px); margin: 0 5px"
          class="t_input"
        >
          <template #prefix> 行高: </template>
          <template #append> px </template>
        </el-input>
      </el-form-item>
      <el-form-item label="字体样式">
        <el-checkbox-group v-model="attr.textStyle">
          <el-tooltip content="加粗" placement="top">
            <el-checkbox-button label="bold">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon>
            </el-checkbox-button>
          </el-tooltip>
          <el-tooltip content="斜体" placement="top">
            <el-checkbox-button label="italic">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon>
            </el-checkbox-button>
          </el-tooltip>
          <el-tooltip content="下划线" placement="top">
            <el-checkbox-button label="underline">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon>
            </el-checkbox-button>
          </el-tooltip>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="文字颜色">
        <el-color-picker v-model="attr.color" show-alpha />
      </el-form-item>
      <el-form-item label="对齐">
        <el-radio-group v-model="attr.textAlign">
          <el-tooltip content="左对齐 left" placement="top">
            <el-radio-button label="left">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="居中 center" placement="top">
            <el-radio-button label="center">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="右对齐 right" placement="top">
            <el-radio-button label="right">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
        </el-radio-group>
      </el-form-item>
    </el-collapse-item>
    <el-collapse-item title="位置" name="位置">
      <el-form-item label="定位类型">
        <el-select v-model="attr.position" placeholder="定位类型" clearable>
          <el-option label="static" value="static" />
          <el-option label="relative" value="relative" />
          <el-option label="absolute" value="absolute" />
          <!-- <el-option label="fixed" value="fixed" /> -->
          <el-option label="sticky" value="sticky" />
        </el-select>
      </el-form-item>
      <div class="position-box-container">
        <div class="position-top-div">
          <el-input v-model.number="attr.top" placeholder="auto" />
        </div>
        <div class="position-right-div">
          <el-input v-model.number="attr.right" placeholder="auto" />
        </div>
        <div class="position-bottom-div">
          <el-input v-model.number="attr.bottom" placeholder="auto" />
        </div>
        <div class="position-left-div">
          <el-input v-model.number="attr.left" placeholder="auto" />
        </div>
      </div>
      <el-form-item label="层叠顺序">
        <el-input v-model.number="attr.ZIndex" placeholder="层叠顺序" />
      </el-form-item>
      <el-form-item label="浮动方向">
        <el-radio-group v-model="attr.float">
          <el-tooltip content="不浮动 none" placement="top">
            <el-radio-button label="none">
              <el-icon class="el-input__icon"><CloseBold /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="左浮动 left" placement="top">
            <el-radio-button label="left">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="有浮动 right" placement="top">
            <el-radio-button label="right">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="清除">
        <el-radio-group v-model="attr.clear">
          <el-tooltip content="不清除 none" placement="top">
            <el-radio-button label="none">
              <el-icon class="el-input__icon"><CloseBold /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="左清除 left" placement="top">
            <el-radio-button label="left">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="右清除 right" placement="top">
            <el-radio-button label="right">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="两边清除 both" placement="top">
            <el-radio-button label="both">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
        </el-radio-group>
      </el-form-item>
    </el-collapse-item>
    <el-collapse-item title="边框" name="边框">
      <el-form-item label="圆角">
        <el-radio-group v-model="attr.radiusType">
          <el-tooltip content="固定圆角" placement="top">
            <el-radio-button label="merge">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
          <el-tooltip content="分别定义" placement="top">
            <el-radio-button label="apart">
              <el-icon class="el-input__icon"><PictureFilled /></el-icon
            ></el-radio-button>
          </el-tooltip>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="" label-width="0" v-if="attr.radiusType == 'merge'">
        <el-input
          v-model="attr.borderRadius"
          style="width: 80%; margin: 0 auto"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon-yuanjiao"></i>
          </template>
          <template #append>
            <el-select
              v-model="attr.borderRadiusUnit"
              style="width: 40px"
              placeholder=" "
            >
              <el-option label="px" value="px" />
              <el-option label="%" value="%" />
              <el-option label="vh" value="vh" />
              <el-option label="" value="" />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="" label-width="0" v-if="attr.radiusType == 'apart'">
        <el-input
          v-model="attr.borderRadiusApart[0]"
          style="width: calc(50% - 10px); margin: 0 5px 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon-radius-upleft"></i>
          </template>
          <template #append>
            <el-select
              v-model="attr.borderRadiusUnitApart[0]"
              style="width: 40px"
              placeholder=" "
            >
              <el-option label="px" value="px" />
              <el-option label="%" value="%" />
              <el-option label="vh" value="vh" />
              <el-option label="" value="" />
            </el-select>
          </template>
        </el-input>
        <el-input
          v-model="attr.borderRadiusApart[1]"
          style="width: calc(50% - 10px); margin: 0 5px 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon-radius-upright"></i>
          </template>
          <template #append>
            <el-select
              v-model="attr.borderRadiusUnitApart[1]"
              style="width: 40px"
              placeholder=" "
            >
              <el-option label="px" value="px" />
              <el-option label="%" value="%" />
              <el-option label="vh" value="vh" />
              <el-option label="" value="" />
            </el-select>
          </template>
        </el-input>
        <el-input
          v-model="attr.borderRadiusApart[2]"
          style="width: calc(50% - 10px); margin: 0 5px 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon-radius-bottomright"></i>
          </template>
          <template #append>
            <el-select
              v-model="attr.borderRadiusUnitApart[2]"
              style="width: 40px"
              placeholder=" "
            >
              <el-option label="px" value="px" />
              <el-option label="%" value="%" />
              <el-option label="vh" value="vh" />
              <el-option label="" value="" />
            </el-select>
          </template>
        </el-input>
        <el-input
          v-model="attr.borderRadiusApart[3]"
          style="width: calc(50% - 10px); margin: 0 5px 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon-radius-bottomleft"></i>
          </template>
          <template #append>
            <el-select
              v-model="attr.borderRadiusUnitApart[3]"
              style="width: 40px"
              placeholder=" "
            >
              <el-option label="px" value="px" />
              <el-option label="%" value="%" />
              <el-option label="vh" value="vh" />
              <el-option label="" value="" />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="边框"> </el-form-item>
      <el-form-item label-width="0">
        <el-input
          v-model="attr.borderWidth"
          style="width: 120px; margin: 0 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon--quanbubiankuang"></i>
          </template>
          <template #append> px </template>
        </el-input>
        <el-color-picker v-model="attr.borderColor" show-alpha />
        <el-select
          v-model="attr.borderStyle"
          placeholder="边框类型"
          clearable
          style="width: 100px; margin: 0 5px"
        >
          <el-option label="solid" value="solid" />
          <el-option label="dashed" value="dashed" />
          <el-option label="dotted" value="dotted" />
        </el-select>
      </el-form-item>
      <el-form-item label-width="0">
        <el-input
          v-model="attr.borderTopWidth"
          style="width: 120px; margin: 0 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon--shangbiankuang"></i>
          </template>
          <template #append> px </template>
        </el-input>
        <el-color-picker v-model="attr.borderTopColor" show-alpha />
        <el-select
          v-model="attr.borderTopStyle"
          placeholder="边框类型"
          clearable
          style="width: 100px; margin: 0 5px"
        >
          <el-option label="solid" value="solid" />
          <el-option label="dashed" value="dashed" />
          <el-option label="dotted" value="dotted" />
        </el-select>
      </el-form-item>
      <el-form-item label-width="0">
        <el-input
          v-model="attr.borderRightWidth"
          style="width: 120px; margin: 0 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon--youbiankuang"></i>
          </template>
          <template #append> px </template>
        </el-input>
        <el-color-picker v-model="attr.borderRightColor" show-alpha />
        <el-select
          v-model="attr.borderRightStyle"
          placeholder="边框类型"
          clearable
          style="width: 100px; margin: 0 5px"
        >
          <el-option label="solid" value="solid" />
          <el-option label="dashed" value="dashed" />
          <el-option label="dotted" value="dotted" />
        </el-select>
      </el-form-item>
      <el-form-item label-width="0">
        <el-input
          v-model="attr.borderBottomWidth"
          style="width: 120px; margin: 0 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon--xiabiankuang"></i>
          </template>
          <template #append> px </template>
        </el-input>
        <el-color-picker v-model="attr.borderBottomColor" show-alpha />
        <el-select
          v-model="attr.borderBottomStyle"
          placeholder="边框类型"
          clearable
          style="width: 100px; margin: 0 5px"
        >
          <el-option label="solid" value="solid" />
          <el-option label="dashed" value="dashed" />
          <el-option label="dotted" value="dotted" />
        </el-select>
      </el-form-item>
      <el-form-item label-width="0">
        <el-input
          v-model="attr.borderLeftWidth"
          style="width: 120px; margin: 0 5px"
          class="t_input"
        >
          <template #prefix>
            <i class="iconfont icon--zuobiankuang"></i>
          </template>
          <template #append> px </template>
        </el-input>
        <el-color-picker v-model="attr.borderLeftColor" show-alpha />
        <el-select
          v-model="attr.borderLeftStyle"
          placeholder="边框类型"
          clearable
          style="width: 100px; margin: 0 5px"
        >
          <el-option label="solid" value="solid" />
          <el-option label="dashed" value="dashed" />
          <el-option label="dotted" value="dotted" />
        </el-select>
      </el-form-item>
    </el-collapse-item>
  </el-collapse>
</template>
<script setup>
import { PictureFilled, CloseBold } from "@element-plus/icons-vue";
import { ref } from "vue";
const props = defineProps({
  attr: {
    default: {},
  },
});
const activeStyle = ref(["背景", "布局"]);
</script>
<style lang="scss" scoped>
:deep(.el-collapse-item__header) {
  background: rgb(242, 243, 247);
  height: 36px;
  padding-left: 20px;
}
:deep(.el-collapse-item__content) {
  padding: 10px;
}
:deep(.el-form-item--small) {
  margin-bottom: 5px;
}
.t_input {
  :deep(.el-input__inner) {
    padding-left: 38px;
  }
  :deep(.el-input__prefix) {
    line-height: 24px;
  }
  :deep(.el-input-group__append) {
    .el-input__inner {
      padding: 10px;
    }
    .el-input__suffix {
      display: none;
    }
  }
}
.el-select {
  :deep(.el-input.is-focus .el-input__inner) {
    border-color: transparent !important;
  }
}
.layout-box-container {
  width: 100%;
  height: 150px;
  position: relative;
  margin-bottom: 10px;
  & > div {
    position: absolute;
    border: 20px solid transparent;
    box-sizing: border-box;
    .el-input {
      position: absolute;
      background: transparent;
      border: none;
      outline: none;
      height: 20px;
      width: 100%;
      text-align: center;
    }
    :deep(.el-input__inner) {
      text-align: center;
      background: transparent;
      border: none;
      height: 20px;
      padding: 0;
    }
  }
  .layout-box-tips {
    position: absolute;
    left: -5px;
    font-size: 12px;
    color: rgb(102, 102, 102);
    transform: scale(0.75);
  }
  .margin-top-div {
    border-top: 20px solid #d6e4ff;
    border-bottom: 0;
    top: 0;
    left: 2px;
    right: 2px;
    margin: auto;
    &:hover {
      border-top: 20px solid #bfd4fb;
    }
    .el-input {
      top: -20px;
    }
  }
  .margin-right-div {
    border-right: 20px solid #d6e4ff;
    border-left: 0;
    bottom: 2px;
    top: 2px;
    right: 0;
    margin: auto;
    &:hover {
      border-right: 20px solid #bfd4fb;
    }
    .el-input {
      width: 20px;
      top: 0px;
      bottom: 0px;
      left: 0;
      margin: auto;
    }
  }
  .margin-bottom-div {
    border-bottom: 20px solid #d6e4ff;
    border-top: 0;
    bottom: 0;
    left: 2px;
    right: 2px;
    margin: auto;
    &:hover {
      border-bottom: 20px solid #bfd4fb;
    }
    .el-input {
      bottom: -20px;
    }
  }
  .margin-left-div {
    border-left: 20px solid #d6e4ff;
    border-right: 0;
    bottom: 2px;
    top: 2px;
    left: 0;
    margin: auto;
    &:hover {
      border-left: 20px solid #bfd4fb;
    }
    .el-input {
      width: 20px;
      top: 0px;
      bottom: 0px;
      right: 0;
      margin: auto;
    }
  }
  .padding-top-div {
    border-top: 20px solid #d6e4ff;
    border-bottom: 0;
    top: 25px;
    left: 27px;
    right: 27px;
    margin: auto;
    &:hover {
      border-top: 20px solid #bfd4fb;
    }
    .el-input {
      top: -20px;
    }
  }
  .padding-right-div {
    border-right: 20px solid #d6e4ff;
    border-left: 0;
    bottom: 27px;
    top: 27px;
    right: 25px;
    margin: auto;
    &:hover {
      border-right: 20px solid #bfd4fb;
    }
    .el-input {
      width: 20px;
      top: 0px;
      bottom: 0px;
      left: 0;
      margin: auto;
    }
  }
  .padding-bottom-div {
    border-bottom: 20px solid #d6e4ff;
    border-top: 0;
    bottom: 25px;
    left: 27px;
    right: 27px;
    margin: auto;
    &:hover {
      border-bottom: 20px solid #bfd4fb;
    }
    .el-input {
      bottom: -20px;
    }
  }
  .padding-left-div {
    border-left: 20px solid #d6e4ff;
    border-right: 0;
    bottom: 27px;
    top: 27px;
    left: 25px;
    margin: auto;
    &:hover {
      border-left: 20px solid #bfd4fb;
    }
    .el-input {
      width: 20px;
      top: 0px;
      bottom: 0px;
      right: 0;
      margin: auto;
    }
  }
}
.position-box-container {
  width: 100%;
  height: 150px;
  position: relative;
  margin-bottom: 10px;
  & > div {
    position: absolute;
    border: 30px solid transparent;
    box-sizing: border-box;
    .el-input {
      position: absolute;
      background: transparent;
      border: none;
      outline: none;
      height: 30px;
      width: 100%;
      text-align: center;
    }
    :deep(.el-input__inner) {
      text-align: center;
      background: transparent;
      border: none;
      height: 30px;
      padding: 0;
    }
  }

  .position-top-div {
    border-top: 30px solid #d6e4ff;
    border-bottom: 0;
    top: 0;
    left: 2px;
    right: 2px;
    margin: auto;
    &:hover {
      border-top-color: #bfd4fb;
    }
    .el-input {
      top: -30px;
    }
  }
  .position-right-div {
    border-right: 30px solid #d6e4ff;
    border-left: 0;
    bottom: 2px;
    top: 2px;
    right: 0;
    margin: auto;
    &:hover {
      border-right-color: #bfd4fb;
    }
    .el-input {
      width: 30px;
      top: 0px;
      bottom: 0px;
      left: 0;
      margin: auto;
    }
  }
  .position-bottom-div {
    border-bottom: 30px solid #d6e4ff;
    border-top: 0;
    bottom: 0;
    left: 2px;
    right: 2px;
    margin: auto;
    &:hover {
      border-bottom-color: #bfd4fb;
    }
    .el-input {
      bottom: -30px;
    }
  }
  .position-left-div {
    border-left: 30px solid #d6e4ff;
    border-right: 0;
    bottom: 2px;
    top: 2px;
    left: 0;
    margin: auto;
    &:hover {
      border-left-color: #bfd4fb;
    }
    .el-input {
      width: 30px;
      top: 0px;
      bottom: 0px;
      right: 0;
      margin: auto;
    }
  }
}
</style>