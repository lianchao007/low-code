/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-02-15 14:02:18
 * @LastEditors: lc
 * @LastEditTime: 2022-08-03 10:00:24
 */
import axios from './index.js'

const api = {
  // 登录
  login(params) {
    return axios.post(`/api/v1/login`, params);
  },
  // 退出登录
  logout() {
    return axios.get(`/api/v1/logout`);
  },
  // 用户信息
  userInfo() {
    return axios.get(`/api/v1/userinfo`);
  },
  // 用户信息
  setUserInfo(params) {
    return axios.post(`/api/v1/userinfo`, params);
  },
  universal: {
    // 分享树
    getShareTree(params) {
      return axios.get(`/api/v1/cascade/share`, {
        params
      });
    },
    // 分享列表
    shareList(params) {
      return axios.get(`/api/v1/cascade/get_share_channels`, {
        params
      });
    },
    // 系统列表树
    lazyLoadTree(params) {
      return axios.get(`/api/v1/device/tree`, {
        params
      })
    },
    // 自定义列表树
    lazyCustomTree(params) {
      return axios.get(`/api/v1/device/custom`, {
        params
      })
    },
    // 获取视频推流地址
    getVideoPushUrl(params) {
      return axios.get(`/api/v1/stream/start`, {
        params
      });
    },
    // 前端获取服务端回调数据
    getStream(params) {
      return axios.get(`/api/v1/stream/stream_url`, {
        params
      });
    },
    //修改密码
    modification(params) {
      return axios.post(`/api/v1/password_modification`, params);
    },
  },
  equipment: {
    //获取设备信息
    getInfoDevice(params) {
      return axios.get(`/api/v1/device/device_list`, {
        params
      });
    },
    // 获取单个设备信息
    getInfoADevice(params) {
      return axios.get(`/api/v1/device/${params.id}/info`);
    },
    //编辑设备
    editorDevice(params) {
      return axios.put(`/api/v1/device/${params.id}/info`, Object.assign(params, {
        id: undefined
      }));
    },
    //删除设备信息
    deleteDevice(params) {
      return axios.delete(`/api/v1/device/${params.id}/info`);
    },
    //更新通道
    updateChannel(params) {
      return axios.get(`/api/v1/device/channelupdate`, {
        params
      });
    },
    // 视频树状侧边栏系统列表
    lazyLoadTree(params) {
      return axios.get(`/api/v1/device/tree`, {
        params
      })
    },
    // 视频树状侧边栏自定义列表
    lazyCustomTree(params) {
      return axios.get(`/api/v1/device/custom`, {
        params
      })
    },
    //查看通道
    getChannels(params) {
      return axios.get(`/api/v1/device/channel_list`, {
        params
      });
    },
    // 视频树状侧边栏系统列表
    systemTree(params) {
      return axios.get(`/api/v1/device/tree`, {
        params
      })
    },
    // 视频树状侧边栏自定义列表
    customTree(params) {
      return axios.get(`/api/v1/device/custom`, {
        params
      })
    },
    //udp选择
    setProtocol(params) {
      return axios.post(`/api/v1/device/channel_list`, params);
    },
    // 检测是否重复名字
    checkName(params) {
      return axios.get(`/api/v1/device/check_name`, {
        params
      });
    },
    // 获取节点
    getNode(params) {
      return axios.get(`/api/v1/device/edit_node`, {
        params
      });
    },
    // 编辑节点
    editNode(params) {
      return axios.post(`/api/v1/device/edit_node`, params);
    },
    deleteNode(params) {
      return axios.get(`/api/v1/device/delete_custom`, {
        params
      })
    },
    //查看节点信息
    getNodeInfo(params) {
      return axios.get(`/api/v1/device/${params.id}/node`);
    },
    // 获取选中节点下所有通道
    fetchChannels(params) {
      return axios.get(`/api/v1/device/fetch_channels`, {
        params
      });
    },
    // 视频树侧边栏自定义列表
    saveCustomTree(params) {
      return axios.post(`/api/v1/device/custom`,
        params
      )
    },
    // 云台控制
    PTZControl(params) {
      return axios.get(`/api/v1/stream/PTZ_control`, {
        params
      })
    },
    // 获取预设位
    fetchPreset(params) {
      return axios.get(`/api/v1/stream/fetch_preset`, {
        params
      })
    },
    // 操作预设位
    controlPreset(params) {
      return axios.get(`/api/v1/stream/control_preset`, {
        params
      })
    },
  },
  // 国际级联
  cascade: {
    //获取联级列表
    getCascadeList(params) {
      return axios.get(`/api/v1/cascade/cascade`, {
        params
      });
    },
    //编辑联级列表
    editCascade(params) {
      return axios.post(`/api/v1/cascade/cascade`, params);
    },
    //删除上级平台
    deleteCascade(params) {
      return axios.post(`/api/v1/cascade/delete_cascade`, params);
    },
    // 查询级联并发数限制和优先级
    getLoadLimit(params) {
      return axios.get(`/api/v1/cascade/load_limit`, {
        params
      });
    },
    // 设置并发优先级
    setLoadLimit(params) {
      return axios.post(`/api/v1/cascade/load_limit`, params);
    },
    // 查看平台最大并发数设置
    getSystemLoadLimit() {
      return axios.get(`/api/v1/system/load_limit`);
    },
    // 编辑平台最大并发数设置
    setSystemLoadLimit(params) {
      return axios.post(`/api/v1/system/load_limit`, params);
    },
    // 视频信息
    videoInfo(params) {
      return axios.get(`/api/v1/cascade/cascade_statistics`, {
        params
      });
    },
    // 新增级联
    addShareTree(params) {
      return axios.post(`/api/v1/cascade/share`, params);
    },
    // 删除级联
    delShareTree(params) {
      return axios.post(`/api/v1/cascade/delete_share`, params);
    },
  },
  // 基础信息配置
  baseInfo: {
    //获取服务器信息
    getInfoServer() {
      return axios.get(`/api/v1/system/signaling_config`);
    },
    //设置服务器信息
    setInfoServer(params) {
      return axios.post(`/api/v1/system/signaling_config`, params);
    },
  },
  // 系统管理
  systemManage: {
    //用户信息列表
    accountList(params) {
      return axios.get(`/api/v1/user_list`, {
        params
      });
    },
    //编辑用户信息
    editAccount(params) {
      return axios.post(`/api/v1/user_edit`, params);
    },
    //新增用户信息
    addAccount(params) {
      return axios.post(`/api/v1/user_create`, params);
    },
    //删除用户信息
    delAccount(params) {
      return axios.post(`/api/v1/user_delete`, params);
    },
    //启用禁用用户信息
    changeState(params) {
      return axios.post(`/api/v1/user_list`, params);
    },
    //操作日志列表
    logsList(params) {
      return axios.get(`/api/v1/system/logs_list`, {
        params
      });
    },
  },
  // 字典管理
  dictionaryManage: {
    // 获取字典信息列表
    getCustomCode(params) {
      return axios.get(`/api/v1/system/custom_code`, {
        params
      });
    },
    // 新增字典信息
    addCustomCode(params) {
      return axios.post(`/api/v1/system/custom_code`, params);
    },
    // 获取单个字典信息
    getCustomCodeOne(params) {
      return axios.get(`/api/v1/system/${params.id}/custom_code`, {
        params
      });
    },
    // 设置字典信息
    setCustomCode(params) {
      return axios.put(`/api/v1/system/${params.id}/custom_code`, params);
    },
    // 删除字典信息
    delCustomCode(params) {
      return axios.delete(`/api/v1/system/${params.id}/custom_code`);
    },
  },
  statisticalAnalysis: {
    conditionMonitoring(params) {
      return axios.get(`/api/v1/statistics/condition_monitoring`, {
        params
      });
    },
    sessionInfo(params) {
      return axios.get(`/api/v1/statistics/session_info`, {
        params
      });
    },
    closeSession(params) {
      return axios.get(`/api/v1/statistics/kick_session`, {
        params
      });
    },
    // 数据监测
    dataMonitoring(params) {
      return axios.get(`/api/v1/statistics/data_monitoring`, {
        params
      });
    },
    // 服务器监测
    serverPerformance(params) {
      return axios.get(`/api/v1/statistics/server_performance`, {
        params
      });
    },
  }
}


export default api