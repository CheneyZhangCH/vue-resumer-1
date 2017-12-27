<template>
  <div>
    <h2>教育经历</h2>
    <el-form>
      <div class="container" v-model="educationExperience" v-for="(education, index) in educationExperience">
        <el-form-item label="学校">
          <el-input v-model="education.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="education.period"></el-input>
        </el-form-item>
        <el-form-item label="专业课程">
          <el-input v-model="education.content"></el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeEducationExperience(index)"></i>
      </div>
      <el-button type="primary" icon="el-icon-edit" v-on:click="addEducationExperience()"></el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: ['educationExperience'],
    methods: {
      addEducationExperience() {
        this.educationExperience.push({name: '', period: '', content: ''})
      },
      removeEducationExperience(index) {
        this.educationExperience.splice(index, 1)
      },
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

</style>
