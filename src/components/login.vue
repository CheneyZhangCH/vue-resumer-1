<template>
  <div class="login-wrapper">

    <form class="ligin-form">
      <input type="text" name="username" placeholder="请输入用户名">
      <input type="password" name="password" placeholder="请输入密码">
      <p> 温馨提示：未注册用户，登录时将自动注册。</p>
      <input type="submit" value="登录">
      <span></span>

    </form>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="scss" scoped>
  .login-wrapper {
    position: relative;
    .login-form {
      position: absolute;
      top: 50%;
      left:50%;
      transform: (-50%,-50%);
    }
  }


</style>
