<template>
  <div class="listsModel">
    <div class="listsTitle">
      <div class="listsTitleName">
        待处理工单
      </div>
      <div class="listsTitleRight">
        <div class="listsTitleSearch">
          <div class="listsTitleSearchImg">
            <img src="static/img/工单管理.png" alt="">
          </div>
          <div class="listsTitleSearchInput">
            <input type="text" placeholder="搜索工单内容/编号/受理人员">
          </div>
        </div>
        <div class="listsTitleSearchExporrt">

        </div>
      </div>
    </div>
    <div class="listsTitleMent">
      <div class="listsTitleMentcondition">
        <div class="listsTitleMentconditionList">
          <div class="listsTitleMentconditionListL">
            类型：
          </div>
          <div class="listsTitleMentconditionListR">
              <select v-model="posttype">
                <option v-for="(type,index) in posttypes" v-bind:value="index" :key="index">{{type.desc}}</option>
              </select>
          </div>
        </div>
        <div class="listsTitleMentconditionList">
          <div class="listsTitleMentconditionListL">
            类型：
          </div>
          <div class="listsTitleMentconditionListR">
              <select v-model="posttype">
                <option v-for="(type,index) in posttypes" v-bind:value="index" :key="index">{{type.desc}}</option>
              </select>
          </div>
        </div>
        <div class="listsTitleMentconditionList">
          <div class="listsTitleMentconditionListL">
            类型：
          </div>
          <div class="listsTitleMentconditionListR">
              <select v-model="posttype">
                <option v-for="(type,index) in posttypes" v-bind:value="index" :key="index">{{type.desc}}</option>
              </select>
          </div>
        </div>
      </div>
      <div class="listsTitleMentBut">
        <div class="listsTitleMentButL">
          搜索
        </div>
        <div class="listsTitleMentButR">
          取消
        </div>
      </div>
    </div>
    <div class="listsMain">
      <ul>
        <li class="listsMainFirst">
          <div>
            编号
          </div>
          <div>
            内容
          </div>
          <div>
            优先级
          </div>
          <div>
            类型
          </div>
          <div>
            客户
          </div>
          <div>
            时间
          </div>
          <div>
            受理客服
          </div>
          <div>
            操作
          </div>
        </li>
        <li class="listsMainDataLi" @click="listsClick(index)" @mouseenter="moreOver(index)" @mouseleave="moreOut(index)" v-for="(item,index) in dataLists" :key="index">
          <div>
            编号
          </div>
          <div class="listsMainDataLiTost">
            内容内容内容内容内容内容内容内容内
          </div>
          <div>
            优先级
          </div>
          <div>
            类型
          </div>
          <div>
            客户
          </div>
          <div>
            时间
          </div>
          <div>
            受理客服
          </div>
          <div>
            操作
          </div>
           <div class="listsMainDataLiTostBox" :style="{'top':isTop}" v-show="operationMoreShow == index">
             <div class="listsMainDataLiTostBoxTre" v-show="listsMainDataLiTostBoxTreBox">
               <div class="listsMainDataLiTostBoxTreBox">

               </div>
             </div>
             <div class="listsMainDataLiTostBoxMaim">
               <div class="listsMainDataLiTostBoxMaimTop">
                 <div class="listsMainDataLiTostBoxMaimTopLeft">
                   待处理
                 </div>
                 <div class="listsMainDataLiTostBoxMaimTopRight">
                   <div>
                     优先级：
                   </div>
                   <div>
                     一级
                   </div>
                 </div>
               </div>
               <div class="listsMainDataLiTostBoxMaimCenter">
                 <div class="listsMainDataLiTostBoxMaimCenterLeft">
                   问题反馈
                 </div>
                 <div class="listsMainDataLiTostBoxMaimCenterRight">
                   通讯录
                 </div>
               </div>
               <div class="listsMainDataLiTostBoxMaimBot">
                 通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录通讯录
               </div>
             </div>
             <div class="listsMainDataLiTostBoxBotTre" v-show="!listsMainDataLiTostBoxTreBox">
               <div class="listsMainDataLiTostBoxTreBotBox">

               </div>
             </div>
           </div>
        </li>
      </ul>
    </div>
    <div class="listsMainPage">
      <div class="listsMainPageLeft">

      </div>
      <div class="listsMainPageRight">
          <el-pagination @current-change="handleCurrentChange" :page-size="pageSizeNum"
            :current-page="currentPage" layout="total, prev, pager, next" :total="totalNum">
          </el-pagination>
      </div>
    </div>
    <!-- 删除 -->
    <v-delModel v-show="isDelModelShow"></v-delModel>
  </div>
</template>
<script>
import delModel from "./delModel";
export default {
  components: {
    "v-delModel": delModel
  },
  props: {},
  data() {
    return {
      isTop: "40px",
      listsMainDataLiTostBoxTreBox: true,
      operationMoreShow: 9999999999,
      isDelModelShow: false, // 删除弹框
      currentPage: 1, // 页码
      totalNum: 100, // 总数
      pageSizeNum: 10, // 每页个数
      posttype: 0, // 筛选中
      posttypes: [{ desc: 1 }, { desc: 2 }], // 筛选数据列表
      dataLists: [
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" }
      ] // 数据列表
    };
  },
  created: function() {},
  mounted: function() {
    var self = this;
  },
  watch: {},
  methods: {
    // 点击详情
    listsClick(index) {
      console.log(index);
      this.$router.push({
        path: "/work/work/processedWorkDetails"
      });
    },
    // 滑动详情
    moreOver(index) {
      this.operationMoreShow = index;
      if (index > 6) {
        this.isTop = "-150px";
        this.listsMainDataLiTostBoxTreBox = false;
      } else {
        this.isTop = "40px";
        this.listsMainDataLiTostBoxTreBox = true;
      }
    },
    moreOut(index) {
      this.operationMoreShow = 9999999999;
    },
    // 分页-当前页
    handleCurrentChange(val) {
      var self = this;
      self.currentPage = val;
      self.listFun();
    }
  }
};
</script>
<style scoped>
/* 分页 */
.listsMainPageRight {
  height: 30px;
  margin-right: 25px;
}
.listsMainPageLeft {
  width: 1px;
}
.listsMainPage {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
}
/* 分页 */
/* 列表 */

.listsMainDataLi > div:nth-child(1),
.listsMainFirst > div:nth-child(1) {
  width: 10%;
  text-align: center;
}
.listsMainDataLi > div:nth-child(2),
.listsMainFirst > div:nth-child(2) {
  width: 25%;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 15px;
  overflow-x: hidden;
  overflow-y: hidden;
}
.listsMainDataLi > div:nth-child(3),
.listsMainFirst > div:nth-child(3) {
  width: 10%;
  text-align: left;
}
.listsMainDataLi > div:nth-child(4),
.listsMainFirst > div:nth-child(4) {
  width: 13%;
  text-align: left;
}
.listsMainDataLi > div:nth-child(5),
.listsMainFirst > div:nth-child(5) {
  width: 12%;
  text-align: left;
}
.listsMainDataLi > div:nth-child(6),
.listsMainFirst > div:nth-child(6) {
  width: 13%;
  text-align: left;
}
.listsMainDataLi > div:nth-child(7),
.listsMainFirst > div:nth-child(7) {
  width: 12%;
  text-align: left;
}
.listsMainDataLi > div:nth-child(8),
.listsMainFirst > div:nth-child(8) {
  width: 5%;
  text-align: left;
}

.listsMainDataLi > div {
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  height: 52px;
  line-height: 52px;
}
.listsMainDataLi {
  min-height: 52px;
  background: rgba(63, 62, 100, 1);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(192, 220, 255, 1);
}
.listsMainDataLi {
  position: relative;
  cursor: pointer;
}
.listsMainDataLiTostBoxTreBotBox {
  width: 0;
  height: 0;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  margin-left: 35px;
  border-top: 16px solid rgba(137, 136, 190, 1);
}
.listsMainDataLiTostBoxBotTre {
  width: 100%;
  height: 14px;
}
.listsMainDataLiTostBoxTreBox {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 65px solid rgba(137, 136, 190, 1);
}
.listsMainDataLiTostBoxTre {
  width: 100%;
  height: 14px;
}
.listsMainDataLiTostBoxMaimTopLeft {
  width: 80px;
  height: 32px;
  background: rgba(91, 89, 120, 1);
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  margin-left: 16px;
}
.listsMainDataLiTostBoxMaimTopRight {
  display: flex;
  margin-left: 45px;
  align-items: center;
}
.listsMainDataLiTostBoxMaimCenter {
  width: 100%;
  display: flex;
  align-items: center;
  height: 20px;
}
.listsMainDataLiTostBoxMaimCenterLeft {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  margin-left: 16px;
  width: 80px;
}
.listsMainDataLiTostBoxMaimCenterRight {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  margin-left: 45px;
}

.listsMainDataLiTostBoxMaimBot {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  min-height: 20px;
  line-height: 22px;
  margin-top: 18px;
  width: 90%;
  margin-left: 16px;
}

.listsMainDataLiTostBoxMaimTop {
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
}
.listsMainDataLiTostBoxMaim {
  background: rgba(137, 136, 190, 1);
  min-height: 144px !important;
  border-radius: 4px;
  width: 100%;
  padding-bottom: 10px;
}

.listsMainDataLiTostBox {
  position: absolute;
  left: calc(100% - 878px);
  width: 578px;
  min-height: 162px !important;
  box-shadow: 0px 2px 9px 0px rgba(60, 59, 88, 1);
  border-radius: 4px 0px 0px 0px;
  z-index: 10000000000000000000;
}
.listsMainFirst > div {
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  height: 48px;
  line-height: 48px;
}
.listsMainFirst {
  height: 48px;
  background: rgba(47, 46, 75, 1);
  display: flex;
  align-items: center;
}
.listsMain {
  min-height: 578px;
  width: 100%;
  box-shadow: 0px 2px 10px 0px rgba(28, 27, 55, 1);
  border-radius: 4px;
  background: rgba(63, 62, 100, 1);
  /* overflow: hidden; */
}
/* 列表 */
/* 筛选 */
.listsTitleMentButR,
.listsTitleMentButL {
  width: 80px;
  height: 36px;
  background: rgba(63, 62, 100, 1);
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  line-height: 36px;
  color: rgba(255, 255, 255, 1);
  margin-right: 15px;
  cursor: pointer;
}
.listsTitleMentcondition {
  display: flex;
  align-items: center;
}
.listsTitleMentBut {
  display: flex;
  align-items: center;
}
.listsTitleMentconditionListL {
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
}
.listsTitleMentconditionListR {
  margin-left: 12px;
}

.listsTitleMentconditionList {
  display: flex;
  align-items: center;
  margin-right: 48px;
}
.listsTitleMentcondition select {
  width: 151px;
  height: 32px;
  background: rgba(91, 89, 120, 1);
  border-radius: 4px;
  font-size: #666;
  border: 1px solid #9c9c9c;
}
select::-ms-expand,
select::-webkit-expand {
  display: none;
}
.listsTitleMent {
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
}
/* 筛选 */
/* 头部 */
.listsTitleSearchInput {
  width: 150px;
  height: 20px;
}
.listsTitleSearchInput input {
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  height: 20px;
  background-color: rgba(63, 62, 100, 0);
}
.listsTitleSearchImg {
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.listsTitleSearchImg img {
  width: 12px;
  height: 16px;
}
.listsTitleName {
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  height: 75px;
  line-height: 75px;
}
.listsTitleSearch {
  display: flex;
  width: 216px;
  height: 36px;
  background: rgba(91, 89, 120, 1);
  border-radius: 4px;
  align-items: center;
  /* margin-right: 50px; */
}
.listsTitleRight {
  display: flex;
  height: 75px;
  align-items: center;
}
.listsTitle {
  height: 75px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.listsTitle::after {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: #7fb7ff;
  content: "";
}
/* 头部 */
.listsModel {
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - 64px);
  background-color: rgb(38, 40, 63);
}
</style>