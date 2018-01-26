<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container" v-for="(item, index) in jobs">
        <div v-for="(val, key) in item">
          <el-form-item :label="labels[key]"
                        :key="key.id">
            <el-date-picker class="date-picker"
                            v-if="key === 'from' || key === 'to'"
                            :value="val"
                            @input="updateJobEducation($event, key, index)"
                            :id="`jobs+${item.name}+${key}`"
                            type="month"
                            size="large"
                            value-format='yyyy.MM'
                            placeholder="选择日期"
                            clearable>>
            </el-date-picker>
            <el-input v-else-if="key === 'content'"
                      type="textarea"
                      :autosize="{ minRows: 1.3, maxRows: 4}"
                      :value="item[key]"
                      @input.native="updateJobEducation($event, key, index)"
                      placeholder="请输入相关内容"
                      clearable>>
            </el-input>
            <el-input v-else
                      :value="item[key]"
                      @input.native="updateJobEducation($event, key, index)"
                      placeholder="请输入相关内容"
                      clearable>
            </el-input>
          </el-form-item>
        </div>
        <div @click="removeJobEducation(index)">
          <i class="el-icon-close  remove-button"></i>
        </div>
        <hr>
      </div>
      <el-button class="edit-button" @click="addJobEducation()">添加</el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        labels: {
          name: '公司',
          from: '自',
          to: '至',
          content: '工作内容'
        },
      }
    },
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
      addJobEducation() {
        this.$store.commit('addJobEducation', 'jobs')
      },
      removeJobEducation(index) {
        this.$store.commit('removeJobEducation', {
          index: index,
          key: 'jobs'
        },)
      },

      updateJobEducation($event, key, index) {
        let newVal = ''
        if (typeof $event === 'string') {
          newVal = $event
        } else {
          newVal = $event.target.value
        }
        this.$store.commit('updateJobEducation', {
          value: newVal,
          mainKey: 'jobs',
          key: key,
          index: index
        })

      },
      updateJob($event, key, index) {

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
