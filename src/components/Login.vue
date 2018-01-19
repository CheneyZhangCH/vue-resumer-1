<template>
  <div class="login-wrapper">
    <el-form class="form-wrapper">
      <el-form-item label="用户名">
        <el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item class="button-wrapper">
        <div> {{errorMassage}}</div>
        <el-button class="buttons" type="primary" @click="toLogin()">登录</el-button>
        <el-button class="buttons" type="primary" @click="toRegister()">注册</el-button>
        <el-button class="buttons" v-on:click="canselLogin()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">

  import AV from '../lib/leancloud'

  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        errorMassage: ''
      }
    },
    computed: {
      loginUI() {
        return this.$store.state.loginUI
      }
    },
    methods: {
      canselLogin() {
        this.$store.commit('cancelLogin')
      },
      toLogin() {
        AV.User.logIn(this.form.username, this.form.password).then(function (loginedUser) {
          setUser(loginedUser.attributes.id, loginedUser.attributes.username)
        }, function (error) {
          if (error.code === 211) {
            alert('用户名不存在，请注册')
          }
        });
        let currentUser = AV.User.current();
        if (currentUser) {
          console.log(currentUser)
          this.$store.commit('setUser', {
            username: currentUser.attributes.username
          })
        }
      },
      toRegister() {
        // 新建 AVUser 对象实例
        let user = new AV.User();
        // 设置用户名
        user.setUsername(this.form.username);
        // 设置密码
        user.setPassword(this.form.password);
        // 设置邮箱
        user.signUp().then(function (loginedUser) {
          alert('注册成功')
          window.location.reload()
        }, function (error) {
        });
      },
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
    .form-wrapper {
      width: 240px;
      .button-wrapper {
        margin-top: 24px;
        display: flex;
        justify-content: space-around;
      }
    }
  }


</style>
