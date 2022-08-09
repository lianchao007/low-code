/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-02-15 09:17:30
 * @LastEditors: lc
 * @LastEditTime: 2022-08-02 17:02:24
 */
import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import App from './App.vue'
import ElementPlus from 'element-plus'
import "assets/css/common.scss";
import 'element-plus/dist/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
const app = createApp(App)
app.use(router).use(store).use(ElementPlus, { locale }).mount('#app')

app.component('ElDialog').props.closeOnClickModal.default = false // 点击蒙版不关闭
app.component('ElDialog').props.destroyOnClose.default = true // 关闭时销毁弹窗内容
app.component('ElDialog').props.draggable.default = true // 弹窗可以移动
app.component('ElTable').TableColumn.props.resizable.default = false // 表格列宽不允许用户调整
