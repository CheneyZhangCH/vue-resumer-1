<template>
  <div>
    <h2>个人信息</h2>
    <el-form v-model="profile">
      <el-form-item label="姓名">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="profile.sex"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="profile.age"></el-input>
      </el-form-item>
      <el-form-item label="所在地">
        <el-input v-model="profile.city"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['profile']
  }
</script>
<style>

</style>
