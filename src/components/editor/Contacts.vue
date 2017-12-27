<template>
  <div>
    <h2>联系方式</h2>
    <el-form>
      <div class="container" v-model="contacts">
        <el-form-item label="电话">
          <el-input v-model="project.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="project.period"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="project.content"></el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeProjectExperience(index)"></i>
      </div>
      <el-button type="primary" icon="el-icon-edit" v-on:click="addProjectExperience()"></el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['projectExperience'],
    methods: {
      addProjectExperience() {
        this.projectExperience.push({name: '', period: '', content: ''})
      },
      removeProjectExperience() {
        this.projectExperience.splice(index, 1)
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

