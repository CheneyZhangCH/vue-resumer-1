<template>
  <div>
    <h2>个人信息</h2>
    <p>{{profile}}</p>
    <p>{{keys}}</p>
    <el-form>

      <!--<el-form-item v-for="{key, value}  in profile" v-bind:label="profile.key">-->
        <!--<el-input v-bind:value="profile.key" v-on:input.native="updateProfileName($event,key)"></el-input>-->
      <!--</el-form-item>-->

      <el-form-item label="公司">
        <el-input v-bind:value="profile.name" v-on:input.native="updateProfileName($event)"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-bind:value="profile.title" v-on:input.native="updateProfileTitle($event)"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-bind:value="profile.sex" v-on:input.native="updateProfileSex($event)"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-bind:value="profile.birth" v-on:input.native="updateProfileBirth($event)"></el-input>
      </el-form-item>
      <el-form-item label="所在地">
        <el-input v-bind:value="profile.city" v-on:input.native="updateProfileCity($event)"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    computed: {
      keys() {
        return Object.keys(this.$store.state.resume.profile);
      },
      profile() {
        return this.$store.state.resume.profile;
      }
    },
    methods: {
      updateProfileName($event) {
        this.$store.commit('updateProfileName', $event.target.value)
      }
      ,
      updateProfileTitle($event) {
        this.$store.commit('updateProfileTitle', $event.target.value)
      }
      ,
      updateProfileSex($event) {
        this.$store.commit('updateProfileSex', $event.target.value)
      }
      ,
      updateProfileBirth($event) {
        this.$store.commit('updateProfileBirth', $event.target.value)
      }
      ,
      updateProfileCity($event) {
        this.$store.commit('updateProfileCity', $event.target.value)
      }
    }
  }
</script>
<style>

</style>
