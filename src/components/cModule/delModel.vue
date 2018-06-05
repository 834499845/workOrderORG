<template>
  <div class="deleteBox">
    <div class="deleteMain">
      <div class="deleteMainTop">
        {{tostVal}}
      </div>
      <div class="deleteMainBot">
        <div class="deleteMainBotLeft">
          取消
        </div>
        <div class="deleteMainBotRight">
          确定
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      tostVal: "确定删除该工单？"
    };
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
.deleteMainTop {
  height: 117px;
  line-height: 117px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: rgba(230, 241, 255, 1);
}
.deleteMainBotLeft {
  width: 68px;
  height: 30px;
  background: rgba(191, 191, 191, 1);
  border-radius: 2px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  margin-right: 24px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.deleteMainBotRight {
  width: 68px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  height: 30px;
  background: rgba(91, 89, 120, 1);
  border-radius: 2px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  margin-left: 24px;
}
.deleteMainBot {
  display: flex;
  justify-content: center;
  align-items: center;
}
.deleteMain {
  width: 429px;
  height: 203px;
  background: rgba(137, 136, 190, 1);
  box-shadow: 0px 0px 3px 0px rgba(133, 155, 223, 1);
  border-radius: 2px;
}
.deleteBox {
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000000000000000000;
}
</style>