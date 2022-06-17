<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <a href="#" target="_blank">登陆</a>
        </span>
      </h3>
      <div class="form_main">
        <el-form ref="formRef" label-width="100px" :rules="rules" :model="temp">
          <el-form-item label="用户" prop="phone">
            <el-col :span="8" class="form-item">
              <el-input v-model="temp.phone"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="验证码">
            <el-col :span="8">
              <el-input v-model="getCode"></el-input>
            </el-col>
            <div class="el_btn">
              <el-button type="primary" @click="getVerificationCode()"
                >获取验证码</el-button
              >
            </div>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-col :span="8">
              <el-input v-model="temp.password" show-password></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="验证密码" prop="password1">
            <el-col :span="8">
              <el-input v-model="temp.password1"></el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <div class="btn">
        <el-button @click="getRegistrationIsCompleted">注册</el-button>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="agree" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg">{{}}</span>
      </div>
    </div>
    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beiAn">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      temp: {
        phone: "",
        password: "",
        password1: "",  
      },
      agree: false,
      rules: {
        phone: [
          { required: true, message: "请输手机号码", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "手机号无效",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        password1: [
          { required: true, message: "密码不相同", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    getVerificationCode() {
      if (this.temp.phone !== "") {
        this.$store.dispatch("reqVerificationCode", { phone: this.temp.phone });
      } else {
        alert("手机号不能为空");
      }
    },
    getRegistrationIsCompleted() {
      if (this.agree && this.temp.password === this.temp.password1) {
        this.$store.dispatch("reqRegister", {
          password: this.temp.password,
          phone: this.temp.phone,
          code: this.getCode,
        });
        this.$router.push("/login");
      } else {
        alert("参数错误，请检查密码是否正确，协议是否勾选");
      }
    },
  },
  computed: {
    ...mapState({
      getCode: (state) => state.register.data_code,
    }),
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    // width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    .form_main {
      // border: 1px solid black;
      margin-top: 20px;
      margin-left: 33%;
    }

    .el_btn {
      width: 500px;
    }

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px 6px 100px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }
  }

  controls {
  }
  .btn {
  }
  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>