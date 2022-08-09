/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-02-15 10:57:27
 * @LastEditors: lc
 * @LastEditTime: 2022-02-23 16:02:59
 */
import {
  createStore
} from 'vuex'

const store = createStore({
  state() {
    return {
      companyName: '润万GB28281视频管理平台',
      copyright: 'Copyright © 广州国交润万交通信息有限公司 版本号：v0.1',
      UserName: '',
      Name: '',
      userId: ''
    }
  },

  mutations: {
    // 设置登录信息
    setUserName: (state, data) => {
      state.UserName = data
    },
    // 设置登录信息
    setName: (state, data) => {
      state.Name = data
    },
    // 设置登录信息
    setUserId: (state, data) => {
      state.userId = data
    },
  }
})
export default store