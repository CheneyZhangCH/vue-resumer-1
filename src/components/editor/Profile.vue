<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item v-for="(val, key) in profile" v-bind:label="labels[key]">
        <el-input v-bind:value="profile[key]" v-on:input.native="updateProfile($event, key)">
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

    data() {
      return {
        labels: {name: '姓名', title: '职位', sex: '性别', birth: '出生年月', city: '城市'}
      }
    },
    computed: {
      keys() {
        return Object.keys(this.labels);
      },
      profile() {
        return this.$store.state.resume.profile;
      }
    },
    methods: {
      updateProfile($event, key) {
        this.$store.commit('updateProfile', {key: key, value: $event.target.value})
      },
    }
  }
</script>
<style>

</style>
