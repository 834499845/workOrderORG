<!--新闻-->
<template>
  <div class="work">
    <!--导航-->
    <div class="nav">
      <div class="nav-left">
        <div class="nav-leftLogo">
          <img src="static/img/logo.png" alt="">
          <span>运璟产品管理系统</span>
        </div>
        <div class="nav-leftnav">
          <ul>
            <li :class="{'nav-leftnavLi':true,'navSelectleftnavLi':isNavSelectleftnavLi == index}" @click="navListsClick(index)" v-for="(item,index) in navLists" :key="index">
              <div class="nav-leftnavLiImg">
                <img v-if="isNavSelectleftnavLi != index" :src="item.imgH" alt="">
                <img v-else :src="item.imgG" alt="">
              </div>
              <div class="nav-leftnavLiName">
                {{item.name}}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-right">
        <div class="nav-rightImg">
          <img src="/static/img/logo.png" alt="">
        </div>
        <div class="nav-rightName">
          管理员管
        </div>
        <div class="nav-rightOp">
          <img src="/static/img/下拉.png" alt="">
        </div>
      </div>
    </div>
    <!--路由切换-->
    <div class="content">
      <router-view keep-alive></router-view>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      navLists: [
        {
          name: "工单管理",
          path: "work",
          imgH: "static/img/工单管理.png",
          imgG: "static/img/工单管理选中.png"
        },
        {
          name: "管理中心",
          path: "manage",
          imgH: "static/img/管理中心.png",
          imgG: "static/img/管理中心选中.png"
        }
      ], // 头部导航
      isNavSelectleftnavLi: 1 // 头部选中index
    };
  },
  // 过滤
  filters: {},
  // 模块新建时
  created: function() {
    var self = this;
  },
  // 计算属性
  mounted() {},
  // 事件处理
  methods: {
    // 头部导航
    navListsClick(index) {
      this.isNavSelectleftnavLi = index;
      this.$router.push({
        path: "/work/" + this.navLists[index].path
      });
    },
    // 退出登录
    exitClick() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
<style scoped>
/*导航部分*/
.nav-rightImg {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
.nav-rightImg img {
  width: 100%;
  height: 100%;
}
.nav-rightName {
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  margin-right: 10px;
}

.nav-rightOp {
  width: 13px;
  margin-right: 37px;
}
.nav-rightOp img {
  width: 100%;
}
.nav-right {
  min-width: 155px;
  height: 64px;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}
.nav-leftnavLiImg {
  width: 100%;
  width: 18px;
  height: 20px;
  margin-top: 12px;
}
.nav-leftnavLiImg img {
  width: 100%;
}
.nav-leftnavLiName {
  width: 100%;
  font-size: 12px;
  color: rgba(160, 166, 228, 1);
  margin-top: 5px;
}
.navSelectleftnavLi .nav-leftnavLiName {
  color: rgba(222, 197, 99, 1) !important;
}
.nav-leftnavLi {
  width: 50px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  overflow: hidden;
  cursor: pointer;
}
.nav-leftnav ul {
  display: flex;
}
.nav-leftnav {
  height: 64px;
  width: 500px;
  margin-left: 61px;
  overflow: hidden;
  overflow: hidden;
}
.nav {
  height: 64px;
  background: rgba(47, 46, 75, 1);
  box-shadow: 0px 2px 10px 0px rgba(31, 30, 53, 1);
  z-index: 100000000000000;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.nav-left {
  display: flex;
  width: 716px;
  align-items: center;
}
.nav-leftLogo {
  display: flex;
  align-items: center;
  width: 216px;
}
.nav-leftLogo img {
  width: 44px;
  height: 44px;
  margin-left: 24px;
}
.nav-leftLogo span {
  font-size: 14px;
  color: rgba(210, 229, 255, 1);
  margin-left: 16px;
}

.work {
  background-color: #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/*主体部分*/

.content {
  width: 100%;
  min-height: calc(100vh - 64px);
  overflow: hidden;
  background-color: #fff;
}

/*侧栏导航*/

.sidebar {
  width: 216px;
  background-color: rgb(27, 26, 42);
  overflow: hidden;
}

/*子页面*/

.main {
  width: calc(100% - 216px);
  overflow: hidden;
  background-color: rgb(38, 40, 63);
}
</style>