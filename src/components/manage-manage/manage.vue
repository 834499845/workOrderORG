<!--管理中心-->
<template>
  <div class="manageBox">
    <div class="sidebar">
      <ul class="sidebarUl">
        <li v-for="(itemOne,ind) in siderLists" :key="ind" class="sidebarLi">
          <div :class="{liOne:true,liOneBg:isliOneBg == ind,liOneList:isLiOneList == ind}" @click="oneSideBarOneClick(ind)">
            <div>
              <img :src="itemOne.imgh" alt="">
            </div>
            <div>
              {{itemOne.name}}
            </div>
            <div>
              <img src="static/img/右箭头.png" alt="">
            </div>
          </div>
          <div v-show="twoShow == ind && itemOne.children.length > 0" class="liTwo">
            <ul>
              <li v-for="(itemTwo,index) in itemOne.children" :key="index" :class="{twoAfterSelect:istwoSelect == index}" @click="oneSideBarTwoClick(index)">
                <div :class="{twoSelect:istwoSelect == index}">
                </div>
                <div :class="{twoSelect:istwoSelect == index}">
                  {{itemTwo.name}}
                </div>
                <div>
                  <!-- 图片 -->
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view class="view" keep-alive></router-view>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      twoShow: 0,
      isliOneBg: 0,
      isLiOneList: 99999999,
      isliOneBgCopy: 0,
      istwoSelect: 0,
      istwoSelectCopy: 0,
      siderLists: [
        {
          name: "员工管理",
          children: [
            {
              name: "员工列表",
              path: "lists"
            },
            {
              name: "员工分组",
              path: "grouping"
            },
            {
              name: "角色设置",
              path: "setting"
            }
          ],
          path: "employee",
          imgh: "static/img/员工管理.png"
        },
        {
          name: "系统设置",
          children: [
            {
              name: "应用设置",
              path: "app"
            },
            {
              name: "规则设置",
              path: "rule"
            }
          ],
          path: "system",
          imgh: "static/img/系统设置.png"
        },
        {
          name: "操作记录",
          children: [],
          path: "log",
          imgh: "static/img/记录.png"
        }
      ]
    };
  },
  // 过滤
  filters: {},
  // 模块新建时
  created: function() {},
  // 计算属性
  mounted() {},
  // 事件处理
  methods: {
    // 一级目录跳转
    oneSideBarOneClick(index) {
      var self = this;
      this.istwoSelect = 0;
      this.isliOneBg = index;
      this.twoShow = index;
      if (this.siderLists[index].children.length > 0) {
        this.isLiOneList = 99999999;
        this.$router.push({
          path:
            "/work/manage/" +
            this.siderLists[index].path +
            "/" +
            this.siderLists[index].children[this.istwoSelect].path
        });
      } else {
        this.isLiOneList = index;
        this.$router.push({
          path: "/work/manage/" + this.siderLists[index].path
        });
      }
    },
    // 二级目录跳转
    oneSideBarTwoClick(index) {
      var self = this;
      this.istwoSelect = index;
      this.$router.push({
        path:
          "/work/manage/" +
          this.siderLists[self.isliOneBg].path +
          "/" +
          this.siderLists[self.isliOneBg].children[this.istwoSelect].path
      });
    }
  },
  // 监视
  watch: {}
};
</script>
<style scoped>
.manageBox {
  width: 100%;
  min-height: calc(100vh - 64px);
  background-color: #fff;
  display: flex;
  overflow: hidden;
}

/*侧栏导航*/

.sidebar {
  width: 216px;
  background-color: rgb(27, 26, 42);
  overflow: hidden;
}
.sidebarUl {
  margin-top: 24px;
}
.liOne {
  display: flex;
  overflow: hidden;
  height: 48px;
  cursor: pointer;
  color: #666;
  font-size: 16px;
  align-items: center;
  user-select: none;
  font-weight: 600;
  position: relative;
}
.liOne > div:nth-child(3) {
  width: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-left: 14px;
}

.liOne > div:nth-child(3) img {
  width: 16px;
  height: 16px;
}

.liOne > div:nth-child(3) {
  transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -o-transform: rotate(0deg);
}

.liOneBg > div:nth-child(3) {
  transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  -o-transform: rotate(270deg);
}
.liOneList {
  background: rgba(56, 56, 79, 1) !important;
}
.liOne > div:nth-child(1) {
  width: 18px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 41px;
}

.liOne > div:nth-child(1) img {
  width: 18px;
}

.liOne > div:nth-child(2) {
  min-width: 71px;
  height: 48px;
  line-height: 48px;
  color: #fff;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  font-weight: 100;
  margin-left: 16px;
}

.liTwo {
  width: 100%;
}

.liTwo > ul > li {
  width: 100%;
  height: 48px;
  line-height: 48px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
}

.liTwo > ul > li > div:nth-child(2) {
  width: 85px;
  text-align: right;
  font-size: 16px;
  color: #fff;
  overflow: hidden;
  margin-left: 16px;
}

.liTwo > ul > li > div:nth-child(1) {
  width: 18px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 41px;
}

.liTwo > ul > li > div:nth-child(1) img {
  width: 8px;
  height: 16px;
}

.liTwo .twoSelect {
  color: #fff !important;
}

.liTwo .twoAfterSelect {
  background: rgba(56, 56, 79, 1) !important;
}

/*子页面*/

.main {
  width: calc(100% - 216px);
  overflow: hidden;
  background-color: rgb(38, 40, 63);
}
</style>