<template>
  <div>
    <h2>获奖经历</h2>
    <el-form>
      <div class="container" v-model="awards" v-for="(award, index) in awards">
        <el-form-item label="奖项">
          <el-input v-model="award.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="award.period"></el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeAward(index)"></i>
      </div>
      <el-button type="primary" icon="el-icon-edit" v-on:click="addAward()"></el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['awards'],
    methods: {
      addAward() {
        this.awards.push({name: '', period: '', content: ''})
      },
      removeAward() {
        this.awards.splice(index, 1)
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

</style>
