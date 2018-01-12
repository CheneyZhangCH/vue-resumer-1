<template>
  <div>
    <h2>工作经历</h2>
    <p> {{jobs}}    </p>
    <p> {{keys}}    </p>
    <el-form>
      <div class="container" v-for="(job, index) in jobs">

        <el-form-item v-for="key in keys" v-bind:label="labels[key]"
                      :key="key.id">
          <el-input v-bind:value="job[key]" v-on:input.native="updateJob($event, key, index)">
          </el-input>
        </el-form-item>


        <!--<el-form-item label="公司">-->
        <!--<el-input v-model="job.company"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="时间">-->
        <!--<el-input v-model="job.period"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="工作内容">-->
        <!--<el-input v-model="job.content"></el-input>-->
        <!--</el-form-item>-->
        <i class="el-icon-delete remove-button" v-on:click="removeJob(index)"></i>
        <hr>
      </div>
      <el-button class="edit-button" type="primary" icon="el-icon-edit" v-on:click="addJob()"></el-button>
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
