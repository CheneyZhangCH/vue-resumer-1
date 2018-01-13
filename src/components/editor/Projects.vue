<template>
  <div>
    <h2>项目经历</h2>
    <el-form>
      <div class="container" v-for="(project, index) in projects">
        <el-form-item v-for="key in keys"
                      v-bind:label="labels[key]"
                      v-bind:key="key.id">
          <el-input v-bind:value="project[key]"
                    v-on:input.native="updateProject($event, key, index)"
                    placeholder="请输入相关内容">
          </el-input>
        </el-form-item>

        <i class="el-icon-delete remove-button" v-on:click="removeProject(index)"></i>
        <hr>
      </div>
      <el-button class="edit-button" v-on:click="addProject()">添加一项</el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        labels: {
          name: '项目名称',
          period: '时间',
          content: '项目内容'
        }
      }
    },
    computed: {
      keys() {
        return Object.keys(this.$store.state.resume.projects[0])
      },
      projects() {
        return this.$store.state.resume.projects;
      }
    },
    methods: {
      addProject() {
        this.$store.commit('addProject')
      },
      removeProject(index) {
        this.$store.commit('removeProject', index)
      },
      updateProject($event, key, index) {
        this.$store.commit('updateProject', {
          value: $event.target.value,
          key: key,
          index: index
        })
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
