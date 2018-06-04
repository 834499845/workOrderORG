<template>
  <div class="inputBox">
    <div class="forgetBox-list">
      <div class="forgetBox-listLeft">
        {{label}}
      </div>
      <div class="forgetBox-listcenter">
        <input type="text" :placeholder='placeholder' maxlength="12" v-model="inputVal">
      </div>
      <div class="forgetBox-listRight" v-show="isErrorFalseShow">
        <div class="forgetBox-listRightcorrect" v-show="!isErrorShow">
          <img src="static/img/正确.png" alt="">
        </div>
        <div class="forgetBox-listRightError" v-show="isErrorShow">
          <img src="static/img/感叹号.png" alt="">
          <span>输入6~12位字母和数字组合，不支持特殊字符，空格键</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: "请输入"
      },
      label: {
        type: String,
        default: "XXX"
      }
    },
    data() {
      return {
        inputVal: "",
        isErrorFalseShow: false,
        isErrorShow: false,
      };
    },
    created: function () { },
    mounted: function () {
      var self = this;
    },
    watch: {
      inputVal(val) {
        console.log(val)
      }
    },
    methods: {
    }
  };
</script>
<style scoped>
  input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 1);
  }

  .forgetBox-listRightError span {
    font-size: 12px;
    color: rgba(255, 112, 112, 1);
    margin-left: 4px;
  }

  .forgetBox-listRightError {
    display: flex;
    align-items: center;
  }

  .forgetBox-listRight {
    margin-left: 22px;
  }

  .forgetBox-listLeft {
    width: 130px;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    text-align: right;
  }

  .forgetBox-listcenter input {
    width: 272px;
    margin-left: 16px;
    padding-left: 16px;
    height: 40px;
    background: rgba(93, 110, 166, 0.5);
    border-radius: 2px;
    color: rgba(255, 255, 255, 1);
  }


  .forgetBox-list {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>