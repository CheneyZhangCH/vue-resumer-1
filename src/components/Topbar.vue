<template>
  <div id="topbar">
    <div class="content">
      <div class="logo">
        R
      </div>
      <div class="actions">
        <el-button plain>登陆</el-button>
        <el-button plain>注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">

  #topbar {
    background-color: #00796b;
    .content {
      height: 80px;
      max-width: 1280px;
      margin-left:auto;
      margin-right:auto;
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
  }

</style>
