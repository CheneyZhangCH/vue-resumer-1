<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container" v-for="(job, index) in jobs">
        <el-form-item v-for="key in keys" v-bind:label="labels[key]"
                      :key="key.id">
          <el-input v-bind:value="job[key]" v-on:input.native="updateJob($event, key, index)">
          </el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeJob(index)"></i>
        <hr>
      </div>
      <el-button class="edit-button" v-on:click="addJob()">添加一项</el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        labels: {
          company: '公司',
          period: '时间',
          content: '工作内容'
        }
      }
    },
    computed: {
      keys() {
        return Object.keys(this.$store.state.resume.jobs[0])
      },
      jobs() {
        return this.$store.state.resume.jobs;
      }
    },
    methods: {
      addJob() {
        this.$store.commit('addJob')
      },
      removeJob(index) {
        this.$store.commit('removeJob', index)
      },
      updateJob($event, key, index) {
        this.$store.commit('updateJob', {
          value: $event.target.value,
          key: key,
          index: index
        })
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

  .edit-button {
    margin-top: 16px;
  }
</style>
