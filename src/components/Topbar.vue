<template>
  <div id="topbar">
    <div class="content">
      <div class="logo">
        R
      </div>
      <div class="actions">
        <el-button plain v-on:click="login()">登陆</el-button>
        <el-button plain v-on:click="login()">注册</el-button>
        <!--<login v-show="toLogin === true"></login>-->
        <div class="login-wrapper" v-show="toLogin === true">
          <!--<form class="ligin-form">-->
          <!--<input type="text" name="username" placeholder="请输入用户名">-->
          <!--<input type="password" name="password" placeholder="请输入密码">-->
          <!--<p> 温馨提示：未注册用户，登录时将自动注册。</p>-->
          <!--<input type="submit" value="登录">-->
          <!--<span v-on:click="closeLogin()">关闭</span>-->
          <!--</form>-->

          <el-form label-width="80px">
            <el-form-item label="用户名">
              <el-input type="text" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <div>
              温馨提示：未注册用户，登录时将自动注册。
            </div>
            <el-form-item>
              <el-button type="primary">立即创建</el-button>
              <el-button v-on:click="cansel()">取消</el-button>
            </el-form-item>

          </el-form>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

  //  import login from './login.vue'

  export default {
    data() {
      return {
        toLogin: false
      }
    },

    components: {
//      login: login,
    },
    methods: {
      login() {
        this.toLogin = true
      },
      cansel() {
        this.toLogin = false
      }
    }

  }
</script>

<style scoped lang="scss">

  #topbar {
    background-color: #00796b;
    .content {
      height: 80px;
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        height: 40px;
        width: 40px;
        border: 1px solid;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        background: #ffa000;
        color: white;
      }
      .actions {
        .login-wrapper {
          background: hsla(0, 0%, 0%, 0.1);
          position: fixed;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

</style>
