import Vue from 'vue'
require("../../API/config")
import getLogin from "../assets/login"
import work from "../assets/work"
export default {
  // 获取工单列表
  getfeedBackpagelistPath({ }, postdata) {
    return work.feedBackpagelistPath(global.feedBackpagelistPath, postdata)
  },
  // 获取各种状态下的工单数量
  getfeedBackstatuscountPath({ }, postdata) {
    return work.feedBackstatuscountPath(global.feedBackstatuscountPath, postdata)
  },
  // 删除工单
  getfeedBackPath({ }, postdata) {
    return work.feedBackPath(global.feedBackPath, postdata)
  },
  // 分页获取操作日志列表
  getoperateLogpageListPath({ }, postdata) {
    return work.operateLogpageListPath(global.operateLogpageListPath, postdata)
  },
  // 添加用户
  getusersavePath({ }, postdata) {
    return work.usersavePath(global.usersavePath, postdata)
  },
  // 编辑用户
  getusereditPath({ }, postdata) {
    return work.usereditPath(global.usereditPath, postdata)
  },
  // 获取用户详情
  getuserdetailsPath({ }, postdata) {
    return work.userdetailsPath(global.userdetailsPath, postdata)
  },
  // 删除用户信息
  getuserdeletePath({ }, postdata) {
    return work.userdeletePath(global.userdeletePath, postdata)
  },
  // 获取所有用户
  getuserlistPath({ }, postdata) {
    return work.userlistPath(global.userlistPath, postdata)
  },
  // 分页获取用户列表信息
  getuserpageListPath({ }, postdata) {
    return work.userpageListPath(global.userpageListPath, postdata)
  },
  // 用户登录
  getuserloginPath({ }, postdata) {
    return work.userloginPath(global.userloginPath, postdata)
  },
  // 分页获取分组列表信息
  getgrouppageListPath({ }, postdata) {
    return work.grouppageListPath(global.grouppageListPath, postdata)
  },
  // 保存分组信息
  getgroupsavePath({ }, postdata) {
    return work.groupsavePath(global.groupsavePath, postdata)
  },
  // 获取分组详情信息
  getgroupdetailsPath({ }, postdata) {
    return work.groupdetailsPath(global.groupdetailsPath, postdata)
  },
  // 编辑分组信息
  getgroupeditPath({ }, postdata) {
    return work.groupeditPath(global.groupeditPath, postdata)
  },
  // 删除分组信息
  getgroupdeletePath({ }, postdata) {
    return work.groupdeletePath(global.groupdeletePath, postdata)
  },
  // 获取所有分组列表信息
  getgrouplistPath({ }, postdata) {
    return work.grouplistPath(global.grouplistPath, postdata)
  },
  // 保存角色信息（待完善权限部分）
  getrolesavePath({ }, postdata) {
    return work.rolesavePath(global.rolesavePath, postdata)
  },
  // 编辑角色信息
  getroleeditPath({ }, postdata) {
    return work.roleeditPath(global.roleeditPath, postdata)
  },
  // 获取角色信息
  getroledetailsPath({ }, postdata) {
    return work.roledetailsPath(global.roledetailsPath, postdata)
  },
  // 分页获取角色列表信息
  getrolepageListPath({ }, postdata) {
    return work.rolepageListPath(global.rolepageListPath, postdata)
  },
  // 获取所有角色信息
  getrolelistPath({ }, postdata) {
    return work.rolelistPath(global.rolelistPath, postdata)
  },
  // 保存应用信息
  getappsavePath({ }, postdata) {
    return work.appsavePath(global.appsavePath, postdata)
  },
  // 编辑应用信息
  getappeditPath({ }, postdata) {
    return work.appeditPath(global.appeditPath, postdata)
  },
  // 应用排序
  getappsortPath({ }, postdata) {
    return work.appsortPath(global.appsortPath, postdata)
  },
  // 应用删除
  getappdeletePath({ }, postdata) {
    return work.appdeletePath(global.appdeletePath, postdata)
  },
  // 获取应用详情
  getappdetailsPath({ }, postdata) {
    return work.appdetailsPath(global.appdetailsPath, postdata)
  },
  // 分页获取应用信息
  getapppageListPath({ }, postdata) {
    return work.apppageListPath(global.apppageListPath, postdata)
  },
  // 获取所有应用
  getappeditPath({ }, postdata) {
    return work.appeditPath(global.appeditPath, postdata)
  },
}
