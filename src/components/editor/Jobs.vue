<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container" v-for="(item, index) in jobs">
        <div v-for="(val, key) in item">
          <el-form-item :label="labels[key]"
                        :key="key.id">
            <el-date-picker v-if="key === 'from' || key === 'to'"
                            v-bind:value="val"
                            v-on:input="updateJob($event, key, index)"
                            :id="key"
                            type="month"
                            value-format='yyyy.MM'
                            placeholder="选择日期"></el-date-picker>
            <el-input v-else
                      type="textarea"
                      :autosize="{ minRows: 1.3, maxRows: 4}"
                      :value="item[key]"
                      @input.native="updateJob($event, key, index)"
                      placeholder="请输入相关内容">
            </el-input>
          </el-form-item>
        </div>
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
          from: '自',
          to: '至',
          content: '工作内容'
        },
        value1: '2018-01'
      }
    },
    watch: {},
    computed: {
      keys() {
        return Object.keys(this.$store.state.resume.jobs[0])
      }
      ,
      jobs() {
        return this.$store.state.resume.jobs;
      }
    }
    ,
    methods: {
      test($event, key) {
        console.log($event)
        console.log(key);
      },
      addJob() {
        this.$store.commit('addJob')
      }
      ,
      removeJob(index) {
        this.$store.commit('removeJob', index)
      }
      ,
      updateJob($event, key, index) {
        let newVal = ''
        if (typeof $event === 'string') {
          newVal = $event
        } else {
          newVal = $event.target.value
        }
        console.log(newVal)
        this.$store.commit('updateJob', {
          value: newVal,
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
