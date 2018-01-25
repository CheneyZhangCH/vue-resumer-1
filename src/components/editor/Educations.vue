<template>
  <div>
    <h2>教育经历</h2>
    <el-form>
      <div class="container" v-for="(education, index) in educations">
        <el-form-item v-for="key in keys"
                      :label="labels[key]"
                      :key="key.id">
          <el-input
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 4}"
            :value="education[key]"
            @input.native="updateEducation($event, key, index)"
            placeholder="请输入相关内容">
          </el-input>
        </el-form-item>
        <div @click="removeEducation(index)">
          <i class="el-icon-close remove-button"></i>
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
          period: '时间',
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
        this.$store.commit('updateEducation', {
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
