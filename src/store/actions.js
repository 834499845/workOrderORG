import Vue from 'vue'
require("../../API/config")
import getLogin from "../assets/login"
import news from "../assets/news"
export default {
  // 登录
  login({}, postdata) {
    return getLogin(global.loginpath, postdata)
  },
  // **************************************新闻模块*******************************
  // 账户管理-列表
  getnewsuserControllerselectPage({}, postdata) {
    return news.newsuserControllerselectPage(global.newsuserControllerselectPagePath, postdata)
  },
  // 账户管理-新增
  getnewsuserControllersave({}, postdata) {
    return news.newsuserControllersave(global.newsuserControllersavePath, postdata)
  },
  // 账户管理-修改
  getnewsuserControllerupdate({}, postdata) {
    return news.newsuserControllerupdate(global.newsuserControllerupdatePath, postdata)
  },
  // 账户管理-删除
  getnewsuserControllerdelete({}, postdata) {
    return news.newsuserControllerdelete(global.newsuserControllerdeletePath, postdata)
  },
  // 热搜管理-列表
  gethotSearchList({}, postdata) {
    return news.hotSearchList(global.hotSearchListPath, postdata)
  },
  // 热搜管理-添加
  getaddhotWords({}, postdata) {
    return news.addhotWords(global.addhotWordsPath, postdata)
  },
  // 热搜管理-删除
  getdelhotWord({}, postdata) {
    return news.delhotWord(global.delhotWordPath, postdata)
  },
  // 热搜管理-修改
  getedithotWord({}, postdata) {
    return news.edithotWord(global.edithotWordPath, postdata)
  },
  // 热搜管理-批量操作删除或显示
  getrsbatchOp({}, postdata) {
    return news.rsbatchOp(global.rsbatchOpPath, postdata)
  },
  // 热搜管理-排序
  getsorthotWord({}, postdata) {
    return news.sorthotWord(global.sorthotWordPath, postdata)
  },
  // 分类管理-列表
  getflList({}, postdata) {
    return news.flList(global.flListPath, postdata)
  },
  // 分类管理-删除
  getdelclassify({}, postdata) {
    return news.delclassify(global.delclassifyPath, postdata)
  },
  // 分类管理-修改
  geteditclassify({}, postdata) {
    return news.editclassify(global.editclassifyPath, postdata)
  },
  // 分类管理-新增
  getaddclassify({}, postdata) {
    return news.addclassify(global.addclassifyPath, postdata)
  },
  // 分类管理-批量操作
  getflbatchOp({}, postdata) {
    return news.flbatchOp(global.flbatchOpPath, postdata)
  },
  // 分类管理-排序
  getsortclassify({}, postdata) {
    return news.sortclassify(global.sortclassifyPath, postdata)
  },
  // 新闻管理-列表
  getnewsList({}, postdata) {
    return news.newsList(global.newsListPath, postdata)
  },
  // 新闻管理-删除
  getdelnews({}, postdata) {
    return news.delnews(global.delnewsPath, postdata)
  },
  // 新闻管理-上传图片
  uploadFile({}, postdata) {
    return news.uploadFile(global.uploadFilePath, postdata)
  },
  // 新闻管理-添加
  getpublish({}, postdata) {
    return news.publish(global.publishPath, postdata)
  },
  // 新闻管理-更新
  geteditPublish({}, postdata) {
    return news.editPublish(global.editPublishPath, postdata)
  },
  // 新闻管理-批量删除
  getnewsbatchOp({}, postdata) {
    return news.newsbatchOp(global.newsbatchOpPath, postdata)
  },
  // 新闻管理-查询所有分类
  getcxflList({}, postdata) {
    return news.cxflList(global.cxflListPath, postdata)
  }
}
