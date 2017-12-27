<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container" v-model="workExperience" v-for="(work, index) in workExperience">
        <el-form-item label="公司">
          <el-input v-model="work.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="work.period"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="work.content"></el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeWorkExperience(index)"></i>
        <hr>
      </div>
      <el-button type="primary" icon="el-icon-edit" v-on:click="addWorkExperience()"></el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['workExperience'],
    methods: {
      addWorkExperience() {
        this.workExperience.push({name: '', period: '', content: ''})
      },
      removeWorkExperience(index) {
        this.workExperience.splice(index, 1)
      }
    }
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
