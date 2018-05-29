// 新闻模块
import Vue from 'vue'
const news = {
  // 账户管理-删除
  newsuserControllerdelete: function newsuserControllerdelete(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 账户管理-新增
  newsuserControllersave: function newsuserControllersave(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 账户管理-修改
  newsuserControllerupdate: function newsuserControllerupdate(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 账户管理-列表
  newsuserControllerselectPage: function newsuserControllerselectPage(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取热搜列表
  hotSearchList: function hotSearchList(ip, postdata) {
    // console.log(postdata)
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 添加热词
  addhotWords: function addhotWords(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 根据id删除热词
  delhotWord: function delhotWord(ip, postdata) {
    var ipstr = ip + '/' + postdata.id
    return Vue.http.get(ipstr, {}).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 修改热词
  edithotWord: function edithotWord(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取新闻管理列表
  newsList: function newsList(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 根据id删除新闻管理列表
  delnews: function delnews(ip, postdata) {
    var ipstr = ip + postdata.id
    return Vue.http.get(ipstr, {}).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 上传图片
  uploadFile: function uploadFile(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取分类管理列表
  flList: function flList(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 根据id删除分类管理列表
  delclassify: function delclassify(ip, postdata) {
    var ipstr = ip + '?id=' + postdata.id
    return Vue.http.get(ipstr, {}).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 修改分类列表
  editclassify: function editclassify(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 增加分类列表
  addclassify: function addclassify(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 新增新闻列表
  publish: function publish(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 更新新闻列表
  editPublish: function editPublish(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 获取评论管理列表
  commentList: function commentList(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 根据id删除评论管理列表
  delcommentManager: function delcommentManager(ip, postdata) {
    //  var ipstr = ip + postdata.id
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 新闻管理页面批量操作
  newsbatchOp: function newsbatchOp(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 热搜管理页面批量操作
  rsbatchOp: function rsbatchOp(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 评论管理页面批量操作
  plbatchOp: function plbatchOp(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 分类管理页面批量操作
  flbatchOp: function flbatchOp(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },

  // 热搜管理排序
  sorthotWord: function sorthotWord(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 分类管理排序
  sortclassify: function sortclassify(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 查询所有的分类
  cxflList: function cxflList(ip, postdata) {
    return Vue.http.get(ip, {}).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 查询评论内容详情
  commentdetailList: function commentdetailList(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  // 删除子评论
  delcommentdetailManager: function delcommentdetailManager(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      //   console.log(postdata)
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
}
export default news
