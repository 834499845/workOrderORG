<template>
  <div class="workDetails">
    <div class="workDetailsView">
      <div class="workDetailsTitle">
        <div class="workDetailsTitleLeft">
          <img src="/static/img/正确.png" alt="">
          <span>查看工单</span>
        </div>
        <div class="workDetailsTitleRight">
            单号：000000000000
        </div>
      </div>
      <div class="workDetailsMain">
        <div class="mainLeft">
          <div class="mainLeftTitle">
            <div>
              意见建议
            </div>
            <div>
              2018/03/10 12:35
            </div>
          </div>
          <div class="mainLeftMain">

          </div>
        </div>
        <div class="mainRight">
          <div class="mainLeftTitle">
            <div>
              属性
            </div>
            <div></div>
          </div>
          <div class="mainRightMain">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created: function() {},
  mounted: function() {
    var self = this;
  },
  watch: {},
  methods: {}
};
</script>
<style scoped>
.mainLeftMain {
  background: rgba(63, 62, 100, 1);
  min-height: 625px;
}
.mainRightMain {
  background: rgba(63, 62, 100, 1);
}
.mainLeftTitle > div:nth-child(2) {
  font-size: 12px;
  color: rgba(230, 241, 255, 1);
  margin-right: 24px;
}
.mainLeftTitle > div:nth-child(1) {
  font-size: 16px;
  color: rgba(230, 241, 255, 1);
  margin-left: 24px;
}
.mainLeftTitle {
  width: 100%;
  height: 48px;
  background: rgba(47, 46, 75, 1);
  border-radius: 4px 4px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mainLeft {
  width: calc(67% - 16px);
  min-height: 673px;
  background: rgba(63, 62, 100, 1);
  box-shadow: 0px 2px 10px 0px rgba(28, 27, 55, 1);
  border-radius: 4px;
  overflow: hidden;
}
.mainRight {
  width: calc(33% - 16px);
  min-height: 673px;
  background: rgba(63, 62, 100, 1);
  box-shadow: 0px 2px 10px 0px rgba(28, 27, 55, 1);
  border-radius: 4px;
  overflow: hidden;
}
.workDetailsMain {
  min-height: 673px;
  width: 100%;
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
}
/* 头部 */
.workDetailsTitleRight {
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
}
.workDetailsTitleLeft {
  display: flex;
  align-items: center;
}
.workDetailsTitleLeft span {
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  margin-left: 12px;
}
.workDetailsTitleLeft img {
  width: 20px;
  height: 20px;
}
.workDetailsTitle {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.workDetailsTitle::after {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: #1b1a2a;
  content: "";
}

/* 头部 */
.workDetails {
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - 64px);
  background-color: rgb(38, 40, 63);
}
.workDetailsView {
  width: calc(100% - 48px - 40px);
  height: 100%;
  margin-left: 48px;
  overflow: hidden;
  background-color: rgb(38, 40, 63);
  min-height: calc(100vh - 64px);
}
</style>