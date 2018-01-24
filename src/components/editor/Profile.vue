<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item v-for="(val, key) in profile"
                    :label="labels[key]"
                    :key="key.id">
        <el-input :value="profile[key]"
                  @input.native="updateProfile($event, key)"
                  placeholder="请输入相关内容">
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

    data() {
      return {
        labels: {name: '姓名', title: '职位', sex: '性别', city: '城市', birth: '出生年月'},
        date1: '',
        date2: ''
      }
    },
    computed: {
      profile() {
        return this.$store.state.resume.profile;
      },
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
