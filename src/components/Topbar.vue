<template>
  <div id="topbar" v-show="!previewUI">
    <div class="container">
      <div class="content" v-show="loginUI === false">
        <div class="logo">
          Resume Editor
        </div>
        <div class="actions" v-show="loginUI === false">
          <span class="welcome" v-show="user.username"> 欢迎您, {{user.username}}</span>
          <el-button plain @click.native="toLoginUI()" v-show="canLogin === true">登陆</el-button>
          <el-button plain @click.native="toLoginUI()" v-show="canLogin === true">注册</el-button>
          <el-button plain @click.native="toSave()" v-show="canLogin === false">保存</el-button>
          <el-button plain @click.native="toPreview()" v-show="canLogin === false">预览</el-button>
          <el-button plain @click.native="toLogOut()" v-show="canLogin === false">登出</el-button>
        </div>
      </div>
    </div>

    <div v-show="loginUI === true" class="login-wrapper">
      <el-form class="form-wrapper">
        <el-form-item label="用户名">
          <el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="button-wrapper">
          <el-button class="buttons" type="primary" @click="toLogin()">登录</el-button>
          <el-button class="buttons" type="primary" @click="toRegister()">注册</el-button>
          <el-button class="buttons" v-on:click="canselLogin()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>

<script>

  import AV from '../lib/leancloud'


  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        errorMassage: '',
      }
    },

    components: {},

    computed: {
      loginUI() {
        return this.$store.state.loginUI
      },
      user() {
        return this.$store.state.user
      },
      canLogin() {
        return this.$store.state.canLogin
      },
      previewUI() {
        return this.$store.state.previewUI
      }
    },
    methods: {
      toLoginUI() {
        this.$store.commit('toLoginUI')
      },
      canselLogin() {
        this.$store.commit('cancelLogin')
      },
      toLogin() {
        AV.User.logIn(this.form.username, this.form.password).then((loginedUser) => {
          this.$store.commit('setUser', {
              username: loginedUser.attributes.username
            }
          )
          this.$store.commit('cancelLogin')
          this.$store.commit('canLogin', false)
          localStorage.setItem('username', payload.username)
        }, function (error) {
          if (error.code === 211) {
            alert('用户名不存在，请注册')
          }
        });
      },
      toRegister() {
        // 新建 AVUser 对象实例
        let user = new AV.User();
        // 设置用户名
        user.setUsername(this.form.username);
        // 设置密码
        user.setPassword(this.form.password);
        // 设置邮箱
        user.signUp().then((loginedUser) => {
          this.$store.commit('setUser', {
              username: loginedUser.attributes.username
            }
          )
          this.$store.commit('cancelLogin')
          this.$store.commit('canLogin', false)
          localStorage.setItem('username', payload.username)
        }, function (error) {
        });
      },
      toLogOut() {
        AV.User.logOut();
        this.$store.commit('logoutUser')
//        this.$store.commit('canLogin', true)
      },

      toSave() {
        this.$store.commit('toSave')
      },

      toPreview() {
        this.$store.commit('toPreview', true)
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
          width: 300px;
          height: 80px;
          line-height: 80px;
          overflow: hidden;
          display: flex;
          font-size: 32px;
          font-family: "Hannotate SC";
          justify-content: flex-start;
          align-items: center;
          color: #3488f7;
        }
        .actions {
          .welcome {
            margin-right: 16px;
          }
        }

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
      .form-wrapper {
        width: 240px;
        .button-wrapper {
          margin-top: 24px;
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }

</style>
