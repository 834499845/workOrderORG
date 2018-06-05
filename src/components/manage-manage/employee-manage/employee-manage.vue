<!--管理中心-员工管理-->
<template>
  <div class="manageBox">
    <div class="manageBoxView">
      <router-view keep-alive></router-view>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from "vuex";
  export default {
    components: {},
    data() {
      return {};
    },
    // 过滤
    filters: {},
    // 模块新建时
    created: function () { },
    // 计算属性
    mounted() { },
    // 事件处理
    methods: {},
    // 监视
    watch: {}
  };
</script>
<style scoped>
  .manageBoxView {
    width: calc(100% - 48px - 40px);
    height: 100%;
    margin-left: 48px;
    overflow: hidden;
    background-color: rgb(38, 40, 63);
  }

  .manageBox {
    width: 100%;
    background-color: rgb(38, 40, 63);
    overflow: hidden;
  }
</style>