<!--分类管理-->
<template>
    <div>
      分类管理
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
  filters: {
    // 返回日期格式化
    UnFormatDates(date) {
      var y, m, d, h, i, s;
      var t = new Date(date);
      y = t.getFullYear();
      m = t.getMonth() + 1;
      d = t.getDate();
      return y + "." + (m < 10 ? "0" + m : m) + "." + (d < 10 ? "0" + d : d);
    }
  },
  // 模块新建时
  created: function() {},
  // 计算属性
  mounted() {},
  // 事件处理
  methods: {
    ...mapActions(["getnewsList"])
  },
  // 监视
  watch: {}
};
</script>
<style scoped>
</style>