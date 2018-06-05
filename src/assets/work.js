// 
import Vue from 'vue'
const news = {
  // 获取工单列表
  feedBackpagelistPath: function feedBackpagelistPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取各种状态下的工单数量
  feedBackstatuscountPath: function feedBackstatuscountPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 删除工单
  feedBackPath: function feedBackPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 分页获取操作日志列表
  operateLogpageListPath: function operateLogpageListPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 添加用户
  usersavePath: function usersavePath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 编辑用户
  usereditPath: function usereditPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取用户详情
  userdetailsPath: function userdetailsPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 删除用户信息
  userdeletePath: function userdeletePath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取所有用户
  userlistPath: function userlistPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 分页获取用户列表信息
  userpageListPath: function userpageListPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 用户登录
  userloginPath: function userloginPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 分页获取分组列表信息
  grouppageListPath: function grouppageListPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 保存分组信息
  groupsavePath: function groupsavePath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取分组详情信息
  groupdetailsPath: function groupdetailsPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 编辑分组信息
  groupeditPath: function groupeditPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 删除分组信息
  groupdeletePath: function groupdeletePath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取所有分组列表信息
  grouplistPath: function grouplistPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 保存角色信息（待完善权限部分）
  rolesavePath: function rolesavePath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 编辑角色信息
  roleeditPath: function roleeditPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取角色信息
  roledetailsPath: function roledetailsPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 分页获取角色列表信息
  rolepageListPath: function rolepageListPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取所有角色信息
  rolelistPath: function rolelistPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 保存应用信息
  appsavePath: function appsavePath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 编辑应用信息
  appeditPath: function appeditPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 应用排序
  appsortPath: function appsortPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 应用删除
  appdeletePath: function appdeletePath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取应用详情
  appdetailsPath: function appdetailsPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 分页获取应用信息
  apppageListPath: function apppageListPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取所有应用
  appeditPath: function appeditPath(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },

}
export default news
