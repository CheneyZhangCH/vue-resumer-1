<template>
  <div id="topbar">
    <div class="container">
      <div class="content" v-show="loginUI === false">
        <div class="logo">
          R
        </div>
        <div class="actions" v-show="loginUI === false">
          <span v-show="canLogOut === true">  Welcome {{user.name}}</span>
          <el-button plain v-on:click.native="toLogin()" v-show="canLogin === true">登陆</el-button>
          <el-button plain v-on:click.native="toLogin()" v-show="canLogin === true">注册</el-button>
          <el-button plain v-on:click.native="toLogOut()" v-show="canLogOut === true">登出</el-button>
        </div>
      </div>
    </div>
    <Login v-show="loginUI === true"></Login>
  </div>
</template>

<script>
  import Login from './Login.vue'

  import AV from '../lib/leancloud'


  export default {
    data() {
      return {
        canLogin: true,
        canLogOut: false
      }
    },

    components: {
      Login: Login
    },

    computed: {
      resume() {
        return this.$store.state.resume
      },
      loginUI() {
        return this.$store.state.loginUI
      },
      user() {
        return this.$store.state.user
      }
    },

    methods: {
      toLogin() {
        this.$store.commit('toLogin')
      },
      toLogOut() {
        AV.User.logOut();
        let currentUser = AV.User.current();
        console.log(currentUser)
        this.$store.commit('setUser', {
          id: '',
          username: ''
        })
      },
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
          height: 48px;
          width: 48px;
          border: 1px solid;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 32px;
          background: #ffa000;
          color: white;
        }
        .actions {
        }

      }
    }
  }

</style>
