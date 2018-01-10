<template>
  <div>

    {{profile}}
    <h2>个人信息</h2>
    <el-form v-model="profile">
      <el-form-item v-for="key in keys" v-bind:label="labels[key]">
        <el-input v-bind:value="profile[key]" v-on:input.native="updateProfile()"></el-input>
      </el-form-item>
      <!--<el-form-item label="职位">-->
      <!--<el-input v-bind:value="profile.title" v-on:input.native="updateProfile"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="性别">-->
      <!--<el-input v-model="profile.sex"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="出生年月">-->
      <!--<el-input v-model="profile.birth"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="所在地">-->
      <!--<el-input v-model="profile.city"></el-input>-->
      <!--</el-form-item>-->
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['labels'],
    computed: {
      keys() {
        return Object.keys(this.$store.state.resume.profile)
      },
      profile() {
        return this.$store.state.resume.profile;
      }
    },
    methods: {
      updateProfile(e,key) {
        this.$store.commit({
          type: 'updateProfile',
          value: e.target.value,
          key: key,
        })
      }
    }
  }
</script>
<style>

</style>
