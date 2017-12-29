<template>
  <div>
    <h2>联系方式</h2>
    <el-form>
      <div class="container" v-model="contacts">
        <el-form-item label="电话">
          <el-input v-model="contacts.phone"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="contacts.qq"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="contacts.email"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['contacts'],
    }
</script>

<style lang="scss" scoped>

  .container {
    position: relative;
    .remove-button {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 12px;
      right: 4px;
    }
  }

</style>

