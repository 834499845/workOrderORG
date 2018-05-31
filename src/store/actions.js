import Vue from 'vue'
require("../../API/config")
import getLogin from "../assets/login"
import work from "../assets/work"
export default {
  // 登录
  login({ }, postdata) {
    return getLogin(global.loginpath, postdata)
  },
  // 
  getcxflList({ }, postdata) {
    return work.cxflList(global.cxflListPath, postdata)
  }
}
