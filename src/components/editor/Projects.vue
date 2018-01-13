<template>
  <div>
    <h2>项目经历</h2>
    <el-form>
      <div class="container" v-model="projects" v-for="(project, index) in projects">
        <el-form-item label="项目">
          <el-input v-model="project.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="project.period"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="project.content"></el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeProject(index)"></i>
        <hr>
      </div>
      <el-button class="edit-button" v-on:click="addProject()">添加</el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['projects'],
    methods: {
      addProject() {
        this.$store.commit('addProject')
      },
      removeProject(index) {
        this.$store.commit('removeProject', index)
      }
    },
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

  .edit-button {
    margin-top: 16px;
  }

</style>
