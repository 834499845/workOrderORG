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
          <div class="mainLeftTop">
            <div class="mainLeftTitle">
              <div>
                意见建议
              </div>
              <div>
                2018/03/10 12:35
              </div>
            </div>
            <div class="mainLeftMain">
              <div class="mainLeftMainList">
                <div class="mainLeftMainListLeft">
                  应用名：
                </div>
                <div class="mainLeftMainListRight">
                  伯通办公
                </div>
              </div>
              <div class="mainLeftMainList">
                <div class="mainLeftMainListLeft">
                  问题描述：
                </div>
                <div class="mainLeftMainListRight">
                  伯通办公
                </div>
              </div>
              <div class="mainLeftMainListImg">
                <div class="mainLeftMainListLeft">

                </div>
                <div class="mainLeftMainListImgRight">
                  <ul>
                    <li v-for="(item,index) in mainLeftMainListImgRightImgs" :key="index">
                      <img src="/static/img/正确.png" alt="">
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mainLeftMainList">
                <div class="mainLeftMainListLeft mainLeftMainListLeftOP">
                  其他信息>
                </div>
                <div class="mainLeftMainListRight">

                </div>
              </div>
            </div>
          </div>
          <div class="mainLeftBot">
            <div class="mainLeftBotTitle">
              <div :class="{'mainLeftBotTitleSelect':ismainLeftBotTitleSelect == 1}" @click="mainLeftBotTitleClick(1)">
                回复详情
              </div>
              <div :class="{'mainLeftBotTitleSelect':ismainLeftBotTitleSelect == 2}" @click="mainLeftBotTitleClick(2)">
                记录详情
              </div>
            </div>
            <div class="mainLeftBotMain">
              <ul>
                <li class="mainLeftBotMainLi" v-for="(item,index) in commentsLists" :key="index">
                  <div class="mainLeftBotMainLiTop">
                    <div class="mainLeftBotMainLiTopLeft">
                      <img src="/static/img/伯通.png" alt="">
                      <span>客服小明</span>
                      <span>已处理</span>
                    </div>
                    <div class="mainLeftBotMainLiTopRight">
                      2018/03/18 15:00
                    </div>
                  </div>
                  <div class="mainLeftBotMainLiBot">
                    <div class="mainLeftBotMainLiBotLeft">
                      客服回复：
                    </div>
                    <div class="mainLeftBotMainLiBotRight">
                      客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
            <div class="mainRightMainTop">
              <div class="mainRightMainTopList">
                <div class="mainRightMainTopListLeft">
                  编号：
                </div>
                <div class="mainRightMainTopListRight">
                  04516476545564
                </div>
              </div>
              <div class="mainRightMainTopList">
                <div class="mainRightMainTopListLeft">
                  状态：
                </div>
                <div class="mainRightMainTopListRight">
                  04516476545564
                </div>
              </div>
              <div class="mainRightMainTopList">
                <div class="mainRightMainTopListLeft">
                  优先级：
                </div>
                <div class="mainRightMainTopListRight">
                  <select v-model="posttype">
                    <option v-for="(type,index) in posttypes" v-bind:value="index" :key="index">{{type.desc}}</option>
                  </select>
                </div>
              </div>
              <div class="mainRightMainTopList">
                <div class="mainRightMainTopListLeft">
                  创建人：
                </div>
                <div class="mainRightMainTopListRight">
                  04516476545564
                </div>
              </div>
              <div class="mainRightMainTopList">
                <div class="mainRightMainTopListLeft">
                  创建时间：
                </div>
                <div class="mainRightMainTopListRight">
                  04516476545564
                </div>
              </div>
            </div>
            <div class="mainRightMainCenter">
              <div>
                回复：
              </div>
              <div>
                <textarea placeholder="请输入"></textarea>
              </div>
            </div>
            <div class="mainRightMainBut">
              <div>
                取消
              </div>
              <div>
                提交
              </div>
            </div>
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
    return {
      ismainLeftBotTitleSelect: 1, // 评论切换
      commentsLists: [
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" }
      ], // 评论
      posttype: 0, // 筛选中
      posttypes: [{ desc: 1 }, { desc: 2 }], // 筛选数据列表
      mainLeftMainListImgRightImgs: ["1", "2", "2", "2", "2", "2"]
    };
  },
  created: function() {},
  mounted: function() {
    var self = this;
  },
  watch: {},
  methods: {
    // 评论切换
    mainLeftBotTitleClick(index) {
      this.ismainLeftBotTitleSelect = index;
    }
  }
};
</script>
<style scoped>
.mainRightMainBut div:nth-child(1) {
  width: 68px;
  height: 30px;
  background: rgba(191, 191, 191, 1);
  border-radius: 4px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  margin-right: 24px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
}

.mainRightMainBut div:nth-child(2) {
  width: 68px;
  height: 30px;
  background: rgba(137, 136, 190, 1);
  border-radius: 4px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  margin-left: 24px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
}

.mainRightMainBut {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.mainRightMainCenter > div:nth-child(2) textarea {
  width: 100%;
  height: 210px;
  border: 1px solid rgba(137, 136, 190, 0.3);
  background-color: rgba(137, 136, 190, 0);
  padding-top: 6px;
  padding-left: 4px;
  resize: none;
}

.mainRightMainCenter > div:nth-child(2) {
  margin-top: 12px;
  width: 100%;
  height: 216px;
}

.mainRightMainCenter > div:nth-child(1) {
  font-size: 14px;
  color: rgba(230, 241, 255, 1);
}

.mainRightMainCenter {
  height: 246px;
  width: 80%;
  margin-top: 38px;
}

.mainRightMainTopListLeft {
  width: 70px;
}

.mainRightMainTopListRight {
  margin-left: 24px;
}

.mainRightMainTopListRight select {
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

.mainRightMainTopList {
  font-size: 14px;
  color: rgba(230, 241, 255, 1);
  height: 32px;
  margin-top: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.mainRightMain {
  background: rgba(63, 62, 100, 1);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.mainRightMainTop {
  width: 80%;
  border-bottom: 1px dashed rgba(137, 136, 190, 0.3);
  height: 245px;
  overflow: hidden;
}

.mainLeftMainListImgRight ul {
  display: flex;
  flex-wrap: wrap;
}

.mainLeftMainListImgRight li {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  margin-right: 30px;
  cursor: pointer;
}

.mainLeftMainListImgRight li img {
  width: 100%;
  height: 100%;
}

.mainLeftMainListImgRight {
  margin-left: 118px;
  min-height: 80px;
}

.mainLeftMainListImg {
  min-height: 80px;
  width: 100%;
  margin-top: 20px;
}

.mainLeftMainListLeftOP {
  cursor: pointer;
  margin-bottom: 15px;
}

.mainLeftMainListLeft {
  width: 74px;
  text-align: left;
  font-size: 14px;
  color: rgba(230, 241, 255, 1);
  margin-left: 24px;
}

.mainLeftMainListRight {
  font-size: 14px;
  color: rgba(230, 241, 255, 1);
  margin-left: 24px;
}

.mainLeftMainList {
  display: flex;
  height: 18px;
  align-items: center;
  margin-top: 24px;
}

.mainLeftMain {
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

.mainLeftTop {
  width: 100%;
  min-height: 297px;
  background: rgba(63, 62, 100, 1);
  box-shadow: 0px 2px 10px 0px rgba(28, 27, 55, 1);
  overflow: hidden;
}

.mainLeftBotMain {
  min-height: 296px;
  width: 100%;
}

.mainLeftBotMainLiTop {
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;
}

.mainLeftBotMainLiTopLeft {
  margin-left: 24px;
  display: flex;
  align-items: center;
}

.mainLeftBotMainLiTopLeft img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.mainLeftBotMainLiTopLeft span:nth-child(2) {
  font-size: 14px;
  color: rgba(230, 241, 255, 1);
  margin-left: 11px;
}

.mainLeftBotMainLiTopLeft span:nth-child(3) {
  font-size: 14px;
  color: rgba(230, 241, 255, 1);
  margin-left: 38px;
}

.mainLeftBotMainLiTopRight {
  margin-right: 24px;
  font-size: 12px;
  color: rgba(230, 241, 255, 1);
}

.mainLeftBotMainLiBot {
  display: flex;
  margin-top: 12px;
}

.mainLeftBotMainLiBotLeft {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(230, 241, 255, 1);
  width: 70px;
  margin-left: 72px;
}

.mainLeftBotMainLiBotRight {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(230, 241, 255, 1);
  width: 75%;
  margin-left: 10px;
}

.mainLeftBotMainLi {
  min-height: 100px;
  width: 100%;
  margin-bottom: 20px;
}

.mainLeftBotTitle > div:nth-child(1) {
  margin-left: 24px;
  cursor: pointer;
}
.mainLeftBotTitleSelect {
  color: rgba(127, 183, 255, 1) !important;
}
.mainLeftBotTitle > div:nth-child(2) {
  margin-left: 36px;
  cursor: pointer;
}

.mainLeftBotTitle {
  display: flex;
  width: 100%;
  height: 48px;
  background: rgba(47, 46, 75, 1);
  border-radius: 4px 4px 0px 0px;
  font-size: 16px;
  color: rgba(230, 241, 255, 1);
  align-items: center;
  border-radius: 4px 4px 0px 0px;
}

.mainLeftBot {
  width: 100%;
  min-height: 344px;
  background: rgba(63, 62, 100, 1);
  margin-top: 32px;
  box-shadow: 0px 2px 10px 0px rgba(28, 27, 55, 1);
  overflow: hidden;
}

.mainLeft {
  width: calc(67% - 16px);
  min-height: 297px;
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