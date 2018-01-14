<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item v-for="(val, key) in profile"
                    v-bind:label="labels[key]"
                    :key="key.id">
        <el-input v-bind:value="profile[key]"
                  v-on:input.native="updateProfile($event, key)"
                  placeholder="请输入相关内容">
        </el-input>
      </el-form-item>
      <!--<el-date-picker-->
      <!--v-model="value1"-->
      <!--type="date"-->
      <!--placeholder="选择日期">-->
      <!--</el-date-picker>-->
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

    data() {
      return {
        labels: {name: '姓名', title: '职位', sex: '性别', birth: '出生年月', city: '城市'},
        value1: ''
      }
    },
    computed: {
      keys() {
        return Object.keys(this.profile);
      },
      profile() {
        return this.$store.state.resume.profile;
      },
    },
    methods: {
      updateProfile($event, key) {
        this.$store.commit('updateProfile', {key: key, value: $event.target.value})
      },
      xxx() {
        console.log(this.value1)
      }
    }
  }
</script>
<style>

</style>
