<!--管理中心-员工管理-角色设置-->

<template>
  <div class="manageBoxList">
    <div class="listsTitle">
      <div class="listsTitleName">
        角色设置
      </div>
      <div class="listsTitleRight">
        <!-- <div class="listsTitleSearch">

        </div> -->
        <div class="listsTitleSearchExporrt">
          新增角色
        </div>
      </div>
    </div>
    <div class="listsTitleMent">
    </div>
    <div class="listsMain">
      <ul>
        <li class="listsMainFirst">
          <div>
            名称
          </div>
          <div>
            描述
          </div>
          <div>
            操作
          </div>
        </li>
        <li class="listsMainDataLi" v-for="(item,index) in dataLists" :key="index">
          <div>
            名称
          </div>
          <div>
            员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数员工数
          </div>
          <div>
            <div>
              编辑
            </div>
            <div>
              查看
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
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
        { name: "1" }
      ] // 数据列表
    };
  },
  // 过滤
  filters: {},
  // 模块新建时
  created: function() {},
  // 计算属性
  mounted() {},
  // 事件处理
  methods: {},
  // 监视
  watch: {}
};
</script>
<style scoped>
.manageBoxList {
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - 64px);
  background-color: rgb(38, 40, 63);
}

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

.listsMainDataLi div:nth-child(1),
.listsMainFirst div:nth-child(1) {
  width: 15%;
  text-align: center;
}

.listsMainDataLi div:nth-child(2),
.listsMainFirst div:nth-child(2) {
  width: 70%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 15px;
}

.listsMainDataLi div:nth-child(3),
.listsMainFirst div:nth-child(3) {
  width: 15%;
  text-align: left;
}

.listsMainDataLi div:nth-child(3) {
  display: flex;
  align-items: center;
}
.listsMainDataLi div:nth-child(3) div {
  min-width: 50px;
  height: 52px;
  cursor: pointer;
  text-align: left;
}
.listsMainDataLi div {
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  height: 52px;
  line-height: 52px;
}

.listsMainDataLi {
  height: 52px;
  background: rgba(63, 62, 100, 1);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(192, 220, 255, 1);
}

.listsMainFirst div {
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
  overflow: hidden;
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
.listsTitleMentcondition input {
  width: 165px;
  height: 32px;
  background: rgba(91, 89, 120, 1);
  border-radius: 4px;
  font-size: #666;
  border: 1px solid #9c9c9c;
  padding-left: 5px;
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
  height: 22px;
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
.listsTitleSearchExporrt {
  min-width: 120px;
  height: 36px;
  background: rgba(137, 136, 190, 1);
  border-radius: 4px;
  font-size: 16px;
  line-height: 36px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
/* 头部 */
</style>