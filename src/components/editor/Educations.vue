<template>
  <div>
    <h2>教育经历</h2>
    <el-form>
      <div class="container" v-for="(item, index) in educations">
        <div v-for="(val, key) in item">
          <el-form-item class="date-picker"
                        :label="labels[key]"
                        :key="key.id">
            <el-date-picker v-if="key === 'from' || key === 'to'"
                            v-bind:value="val"
                            v-on:input="updateEducation($event, key, index)"
                            :id="`${item.name}+${key}`"
                            type="month"
                            size="large"
                            value-format='yyyy.MM'
                            placeholder="选择日期"></el-date-picker>
            <el-input v-else-if="key === 'content'"
                      type="textarea"
                      :autosize="{ minRows: 1.3, maxRows: 4}"
                      :value="item[key]"
                      @input.native="updateEducation($event, key, index)"
                      placeholder="请输入相关内容"
                      clearable>
            </el-input>
            <el-input v-else
                      :value="item[key]"
                      @input.native="updateEducation($event, key, index)"
                      placeholder="请输入相关内容"
                      clearable>
            </el-input>
          </el-form-item>
        </div>
        <div @click="removeEducation(index)">
          <i class="el-icon-close  remove-button"></i>
        </div>
        <hr>
      </div>
      <el-button class="edit-button" @click="addEducation()">添加一项</el-button>
    </el-form>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {

    data() {
      return {
        labels: {
          name: '学校',
          from: '自',
          to: '至',
          content: '专业内容'
        }
      }
    },
    computed: {
      keys() {
        return Object.keys(this.$store.state.resume.educations[0])
      },
      educations() {
        return this.$store.state.resume.educations;
      }
    },
    methods: {
      addEducation() {
        this.$store.commit('addEducation')
      },
      removeEducation(index) {
        this.$store.commit('removeEducation', index)
      },
      updateEducation($event, key, index) {
        let newVal = ''
        if (typeof $event === 'string') {
          newVal = $event
        } else {
          newVal = $event.target.value
        }
        this.$store.commit('updateEducation', {
          value: newVal,
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
