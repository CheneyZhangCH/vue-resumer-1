<template>
  <div>
    <h2>个人项目</h2>
    <el-form>
      <div class="container" v-for="(item, index) in projects">
        <el-form-item v-for="(val, key) in item"
                      :label="labels[key]"
                      :key="key.id">
          <el-input v-if="key === 'content'"
                    type="textarea"
                    :autosize="{ minRows: 1.3, maxRows: 4}"
                    :value="item[key]"
                    @input.native="updateProject($event, key, index)"
                    placeholder="请输入相关内容">
          </el-input>
          <el-input v-else
                    :value="item[key]"
                    @input.native="updateProject($event, key, index)"
                    placeholder="请输入相关内容">
          </el-input>


        </el-form-item>
        <div @click="removeProject(index)">
          <i class="el-icon-close remove-button"></i>
        </div>
        <hr>
      </div>
      <el-button class="edit-button" @click="addProject()">添加一项</el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        labels: {
          name: '项目名称',
          content: '预览地址'
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
