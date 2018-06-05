<!--工单管理-->
<template>
  <div class="mainVierw">
    <v-listsModel></v-listsModel>
  </div>
</template>
<script>
  import { mapActions, mapState } from "vuex";
  import listsModel from "../cModule/listsModel";
  export default {
    components: {
      "v-listsModel": listsModel
    },
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
</style>