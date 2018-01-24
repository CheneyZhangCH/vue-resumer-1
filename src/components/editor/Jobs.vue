<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container" v-for="(job, index) in jobs">

        <el-form-item label="公司">
          <el-input :value="job.company"
                    @input.native="updateJob($event,'company',index)"
                    placeholder="请输入相关内容">
          </el-input>
        </el-form-item>

        <p>{{jobs}}</p>
        <p>{{value6}}</p>
        <el-form-item label="日期">

          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>


        <!--<el-date-picker-->
        <!--:value="job.period"-->
        <!--@change.native="updateJob($event, 'period', index)"-->
        <!--type="daterange"-->
        <!--range-separator="至"-->
        <!--start-placeholder="开始日期"-->
        <!--end-placeholder="结束日期">-->
        <!--</el-date-picker>-->
        <!--</el-form-item>-->


        <el-form-item label="工作内容">
          <el-input :value="job.content"
                    @input.native="updateJob($event, 'content', index)"
                    placeholder="请输入相关内容">
          </el-input>
        </el-form-item>


        <!--<el-form-item v-for="key in keys"-->
        <!--:label="labels[key]"-->
        <!--:key="key.id">-->
        <!--<el-input :value="job[key]"-->
        <!--@input.native="updateJob($event, key, index)"-->
        <!--placeholder="请输入相关内容">-->
        <!--</el-input>-->
        <!--</el-form-item>-->
        <div @click="removeJob(index)">
          <i class="el-icon-close  remove-button"></i>
        </div>
        <hr>
      </div>
      <el-button class="edit-button" @click="addJob()">添加一项</el-button>
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
        },
        value6: ''
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
