<!--工单管理-->
<template>
  <div class="workBox">
    <div class="sidebar">
      <div class="sidebar-top">
        <div class="sidebar-topImg">
          <img :src="sidebarTopImg" alt="">
        </div>
        <div class="sidebar-topName" @click="sidebarTopClick">
          {{sidebarTopName}}
        </div>
        <div class="sidebar-topSelect">
          <img src="/static/img/黄色下拉.png" alt="">
        </div>
        <div class="sidebar-topBox" v-show="isSidebarTopBox">
          <ul>
            <li class="sidebar-topBoxLi" v-for="(item,index) in sederBoxLists" @click="sederBoxListsClick(index)" :key="index">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-bot">
        <ul>
          <li :class="{'sidebar-botLi':true,'sidebar-selecyBotLi':isSidebarSelecyBotLi == index}" @click="selectListsClick(index)" v-for="(item,index) in selectLists" :key="index">
            <div class="sidebar-botLiImg">
              <img :src="item.img" alt="">
            </div>
            <div class="sidebar-botLiName">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <router-view keep-alive></router-view>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isSidebarTopBox: false, // 选择应用弹框
      sidebarTopName: "伯图全景",
      sidebarTopImg: "/static/img/logo.png",
      sederBoxLists: [
        { name: "伯图全景", img: "/static/img/logo.png" },
        { name: "伯通办公", img: "/static/img/伯通.png" }
      ],
      isSidebarSelecyBotLi: 0,
      selectLists: [
        { name: "待处理工单", img: "/static/img/待处理.png" },
        { name: "处理中工单", img: "/static/img/处理中.png" },
        { name: "已处理工单", img: "/static/img/已处理.png" },
        { name: "已解决工单", img: "/static/img/已解决.png" },
        { name: "未解决工单", img: "/static/img/未解决.png" }
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
    // 选择应用
    sederBoxListsClick(index) {
      this.sidebarTopName = this.sederBoxLists[index].name;
      this.sidebarTopImg = this.sederBoxLists[index].img;
      this.isSidebarTopBox = false;
    },
    sidebarTopClick() {
      this.isSidebarTopBox = true;
    },
    // 侧栏选择
    selectListsClick(index) {
      this.isSidebarSelecyBotLi = index;
    }
  },
  // 监视
  watch: {}
};
</script>
<style scoped>
.sidebar-botLiImg {
  width: 16px;
  height: 16px;
  margin-left: 64px;
}
.sidebar-botLiImg img {
  width: 100%;
}
.sidebar-botLiName {
  min-width: 88px;
  height: 24px;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
  margin-left: 18px;
}
.sidebar-selecyBotLi {
  background: rgba(56, 56, 79, 1) !important;
}
.sidebar-botLi {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.sidebar-bot {
  margin-top: 16px;
}
.sidebar-topBoxLi {
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  text-align: center;
  line-height: 48px;
  color: black;
  margin-top: 5px;
}
.sidebar-topBoxLi:hover {
  background-color: #ccc;
}
.sidebar-topBox {
  position: absolute;
  top: 48px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 100000000000;
  height: 450px;
}
.sidebar-top {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  cursor: pointer;
  user-select: none;
  position: relative;
}
.sidebar-topImg {
  width: 20px;
  height: 20px;
  margin-left: 40px;
}
.sidebar-topImg img {
  width: 100%;
}
.sidebar-topName {
  min-width: 71px;
  margin-left: 16px;
  height: 24px;
  font-size: 18px;
  color: rgba(215, 190, 98, 1);
  line-height: 24px;
}
.sidebar-topSelect {
  width: 14px;
  margin-left: 13px;
}
.sidebar-topSelect img {
  width: 100%;
}

.workBox {
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

/*子页面*/
.mainVierw {
  width: calc(100% - 48px - 40px);
  height: 100%;
  margin-left: 48px;
  overflow: hidden;
}
.main {
  width: calc(100% - 216px);
  overflow: hidden;
  background-color: rgb(38, 40, 63);
}
</style>