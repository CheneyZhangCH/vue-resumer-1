<template>
  <div id="topbar">
    <div class="container">
      <div class="content" v-show="resume.login === false">
        <div class="logo">
          R
        </div>
        <div class="actions" v-show="resume.login === false">
          <el-button plain v-on:click.native="toLogin()">登陆</el-button>
          <el-button plain v-on:click.native="toLogin()">注册</el-button>
        </div>
      </div>
      <div class="login-wrapper" v-show="resume.login === true">
        <el-form>
          <el-form-item label="用户名">
            <el-input type="text" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <p class="advice"> 温馨提示：未注册用户，登录时将自动注册。</p>
          <el-form-item>
            <el-button type="primary" @click="onSubmit()">登录</el-button>
            <el-button v-on:click="canselLogin()">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    data() {
      return {}
    },

    computed: {
      resume() {
        return this.$store.state.resume
      }
    },

    components: {
//      login: login,
    },
    methods: {
      toLogin() {
        this.$store.commit('toLogin')

      },
      canselLogin() {
        this.$store.commit('cancelLogin')

      },
      onSubmit() {

      }
    }

  }
</script>

<style scoped lang="scss">

  #topbar {
    background: hsla(0, 0%, 0%, 0.2);
    width: 100%;
    .container {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      .content {
        height: 80px;
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
        }

      }
      .login-wrapper {
        font-size: 14px;
        color: rgb(153, 153, 153);
        background: hsla(0, 0%, 0%, 0.2);
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        .advice {
          margin-bottom: 16px;
          color: rgb(153, 153, 153);
          font-size: 14px;
        }
      }
    }
  }

</style>
