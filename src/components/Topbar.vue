<template>
  <div id="topbar">
    <div class="container">
      <div class="content" v-show="login === false">
        <div class="logo">
          R
        </div>
        <div class="actions" v-show="login === false">
          <el-button plain v-on:click.native="toLogin()">登陆</el-button>
          <el-button plain v-on:click.native="toLogin()">注册</el-button>
        </div>
      </div>
    </div>
    <Login v-show="login === true"></Login>
  </div>
</template>

<script>
  import Login from './Login.vue'

  export default {

    components: {
      Login: Login
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
      toLogin() {
        this.$store.commit('toLogin')
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
