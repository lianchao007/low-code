/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-02-15 10:21:24
 * @LastEditors: lc
 * @LastEditTime: 2022-08-08 15:37:49
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from "vue-router";

const routes = [
  {
    path: '/setting',
    name: 'setting',
    meta: {
      cName: '配置',
    },
    component: () => import("../views/setting/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  let symbols = Object.getOwnPropertySymbols(window.axiosCancel)
  for(let i = 0; i < symbols.length; i++) {
    window.axiosCancel[symbols[i]]('取消请求')
    delete window.axiosCancel[symbols[i]]
  }
  next()
})

export default router;