<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="login">
      <div class="loginLeft">
      </div>
      <div class="loginRight">
        <div class="loginRight-title">
          <h6>运璟产品管理系统</h6>
        </div>
        <div class="loginRight-account">
          <div class="loginRight-accountIcon">
            <img src="static/img/账号.png" alt="">
          </div>
          <div class="loginRight-accountInput">
            <input type="number" placeholder="请输入账号" v-model="accountVal" maxlength="11" @keyup.enter="submitEnter">
          </div>
        </div>
        <div class="loginRight-account loginRight-pwd">
          <div class="loginRight-accountIcon">
            <img src="static/img/密码.png" alt="">
          </div>
          <div class="loginRight-accountInput">
            <input type="password" placeholder="请输入密码" v-model="pwdVal" maxlength="12" @keyup.enter="submitEnter">
          </div>
        </div>
        <!-- <div class="loginRight-opPwd">
          <div class="loginRight-opPwdCode">
            验证码登录
          </div>
          <div class="loginRight-findPwd" @click="findPwdClick">
            忘记密码?
          </div>
        </div> -->
        <div class="loginRight-but" @click="loginClick">
          登录
        </div>
        <div class="loginRight-tost" v-show="isAccoutError">
          <img src="static/img/感叹号.png" alt="">
          <span>账号或密码错误，请重新输入</span>
        </div>
      </div>
      <div class="forgetBox" v-show="isForgetBoxShow">
        <div class="forgetBox-content">
          <div class="forgetBox-list">
            <div class="forgetBox-listLeft">
              请输入新密码
            </div>
            <div class="forgetBox-listcenter">
              <input type="text" placeholder="输入6~12位数字和字母组合" maxlength="12" v-model="forgetPwdVal">
            </div>
            <div class="forgetBox-listRight">
              <div class="forgetBox-listRightcorrect" v-show="!isErrorShow">
                <img src="static/img/正确.png" alt="">
              </div>
              <div class="forgetBox-listRightError" v-show="isErrorShow">
                <img src="static/img/感叹号.png" alt="">
                <span>输入6~12位字母和数字组合，不支持特殊字符，空格键</span>
              </div>
            </div>
          </div>
          <div class="forgetBox-list forgetBox-listTwo">
            <div class="forgetBox-listLeft">
              请再次输入新密码
            </div>
            <div class="forgetBox-listcenter">
              <input type="text" placeholder="输入6~12位数字和字母组合" maxlength="12" v-model="forgetPwdTwoVal">
            </div>
            <div class="forgetBox-listRight">
              <div class="forgetBox-listRightcorrect" v-show="isErrorShow">
                <img src="static/img/正确.png" alt="">
              </div>
              <div class="forgetBox-listRightError" v-show="!isErrorShow">
                <img src="static/img/感叹号.png" alt="">
                <span>输入6~12位字母和数字组合，不支持特殊字符，空格键</span>
              </div>
            </div>
          </div>
          <div class="forgetBox-but">
            <div class="forgetBox-butLeft" @click="forgetBoxClick(1)">
              取消
            </div>
            <div class="forgetBox-butRIght" @click="forgetBoxClick(2)">
              确认
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import inputModel from "./cModule/inputModel";
export default {
  components: {
    "v-inputModel": inputModel
  },
  data() {
    return {
      // 修改密码
      isForgetBoxShow: false,
      forgetPwdVal: "",
      forgetPwdTwoVal: "",
      isErrorShow: false,
      // 登陆
      isAccoutError: false,
      accountVal: "",
      pwdVal: ""
    };
  },
  created: function() {},
  mounted: function() {
    var self = this;
  },
  watch: {
    accountVal(val) {
      var self = this;
      if (val.length > 0) {
        if (val.length > 11) {
          self.accountVal = val.slice(0, 11);
        }
      }
    }
  },
  methods: {
    // 登陆enter键
    submitEnter() {
      this.loginClick();
    },
    // 登陆事件
    loginClick() {
      var self = this;
      if (self.vFun() == false) {
        self.isAccoutError = true;
      } else {
        self.isAccoutError = false;
        this.$router.push({
          path: "/work"
        });
      }
    },
    vFun() {
      var self = this;
      var accountValstr = self.accountVal.replace(/(^\s+)|(\s+$)/g, "");
      var accountReg = new RegExp(/^\d{11}$/);
      var pwdValstr = self.pwdVal.replace(/(^\s+)|(\s+$)/g, "");
      var pwdReg = new RegExp(/^[a-zA-Z_0-9]{6,12}$/);
      var vFunTrue = false;
      if (
        accountReg.test(accountValstr) == false ||
        pwdReg.test(pwdValstr) == false
      ) {
        vFunTrue = false;
      } else {
        vFunTrue = true;
      }
      return vFunTrue;
    },
    // 修改密码
    findPwdClick() {
      this.isForgetBoxShow = true;
    },
    forgetBoxClick(index) {
      var self = this;
      if (index == 1) {
        // 取消
        this.isForgetBoxShow = false;
      } else {
        // 确认
      }
    }
  }
};
</script>
<style scoped>
/* 忘记密码 */
.forgetBox-butRIght {
  width: 72px;
  height: 36px;
  background: linear-gradient(
    90deg,
    rgba(0, 170, 254, 1),
    rgba(19, 157, 236, 1)
  );
  border-radius: 2px;
  margin-left: 34px;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 36px;
}
.forgetBox-butLeft {
  width: 72px;
  height: 36px;
  background: rgba(182, 182, 182, 1);
  border-radius: 2px;
  margin-left: 146px;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 36px;
}
.forgetBox-but {
  width: 100%;
  height: 36px;
  display: flex;
  margin-top: 36px;
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
.forgetBox-listTwo {
  margin-top: 36px !important;
}
.forgetBox-list {
  height: 40px;
  width: 100%;
  margin-top: 60px;
  display: flex;
  align-items: center;
}
.forgetBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.forgetBox-content {
  width: 774px;
  height: 308px;
  background: rgba(45, 55, 86, 1);
  box-shadow: -1px 2px 9px 0px rgba(133, 155, 223, 1);
  border-radius: 1px;
  overflow: hidden;
}
/* 忘记密码 */
.loginRight-tost img {
  width: 12px;
  height: 12px;
  margin-right: 4px;
}
.loginRight-tost span {
  width: 156px;
  height: 16px;
  font-size: 12px;
  color: rgba(255, 112, 112, 1);
  line-height: 16px;
}
.loginRight-tost {
  margin-left: 44px;
  margin-top: 12px;
  width: 288px;
  height: 16px;
  color: rgba(255, 112, 112, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginRight-but {
  margin-left: 44px;
  margin-top: 36px;
  width: 288px;
  height: 40px;
  background: linear-gradient(
    90deg,
    rgba(0, 170, 254, 1),
    rgba(19, 157, 236, 1)
  );
  border-radius: 2px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.loginRight-opPwdCode {
  width: 60px;
  height: 16px;
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
}
.loginRight-findPwd {
  width: 54px;
  height: 16px;
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
}
.loginRight-opPwd {
  width: 288px;
  height: 16px;
  margin-left: 44px;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.loginRight-accountInput input {
  height: 40px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  font-size: 14px;
  width: 230px;
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgba(255, 255, 255, 1);
}
.loginRight-accountInput {
  width: 230px;
  height: 40px;
}
.loginRight-accountIcon {
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginRight-pwd {
  margin-top: 24px !important;
}
.loginRight-account {
  width: 288px;
  height: 40px;
  background: rgba(93, 110, 166, 1);
  border-radius: 2px;
  opacity: 0.5;
  margin-left: 44px;
  margin-top: 45px;
  display: flex;
  align-items: center;
}
.loginRight-title h6 {
  font-size: 32px;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 38px;
  height: 38px;
  display: block;
  font-weight: 400;
}
.loginRight-title {
  width: 100%;
  height: 38px;
  margin-top: 75px;
  color: rgba(160, 199, 254, 1);
}
.loginLeft {
  width: 608px;
  height: 440px;
  margin-right: 100px;
  background: url("/static/img/login.png") no-repeat;
  background-size: 100% 100%;
}
.loginRight {
  width: 376px;
  height: 440px;
  background: rgba(45, 55, 86, 1);
  margin-left: 100px;
  overflow: hidden;
}
.login {
  height: 100%;
  width: 100%;
  background: url("/static/img/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>