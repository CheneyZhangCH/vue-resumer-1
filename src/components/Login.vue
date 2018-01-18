<template>
  <div class="login-wrapper">
    <el-form>
      <el-form-item label="用户名">
        <el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <p class="advice"> 温馨提示：未注册用户，登录时将自动注册。</p>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">登录</el-button>
        <el-button v-on:click="canselLogin()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">

  import AV from 'leancloud-storage'

  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      resume() {
        return this.$store.state.resume
      },
      login() {
        return this.$store.state.login
      }
    },
    methods: {
      canselLogin() {
        this.$store.commit('cancelLogin')
      },
      onSubmit() {
        let APP_ID = '6CqVakWVTbDYC7XaEGp2SHwO-gzGzoHsz';
        let APP_KEY = 'bJk2dfIGpQisCyq1PB850DOV';

        AV.init({
          appId: APP_ID,
          appKey: APP_KEY
        });



      }
    }
  }
</script>

<style scoped lang="scss">

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


</style>
