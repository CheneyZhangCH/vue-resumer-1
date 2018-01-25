<template>
  <div id="preview" v-bind:class="{active: previewUI}" v-show="loginUI === false">
    <div class="preview-wrapper">
      <section class="close-icon-wrapper" v-on:click="closePreview()" v-show="previewUI">
        <i class="el-icon-close" v-show="previewUI"></i>
      </section>

      <section id="profile">
        <div v-if="resume.profile">
          <h1>
            {{resume.profile.name}}
          </h1>
          <p>{{resume.profile.title}}</p>
          <span>{{resume.profile.sex}}</span>
          <span>{{resume.profile.birth}}</span>
          <span>{{resume.profile.city}}</span>
        </div>
      </section>
      <section v-if="resume.jobs">
        <h2>工作经验</h2>
        <ul>
          <li v-for="item in resume.jobs">
            <h4> {{item.company}}</h4>
            <h4> {{item.from}}</h4>
            <p>至</p>
            <h4> {{item.to}}</h4>
            <h4> {{item.content}}</h4>
          </li>
        </ul>
      </section>
      <section v-if="resume.educations">
        <h2>教育背景</h2>
        <ul>
          <li v-for="item in resume.educations">
            <h4> {{item.name}}</h4>
            <h4> {{item.period}}</h4>
            <h4> {{item.content}}</h4>
          </li>
        </ul>
      </section>
      <section v-if="resume.projects">
        <h2>项目经历</h2>
        <ul>
          <li v-for="item in resume.projects">
            <h4> {{item.name}}</h4>
            <h4> {{item.period}}</h4>
            <h4> {{item.content}}</h4>
          </li>
        </ul>
      </section>
      <section v-if="resume.skills">
        <h2>获奖经历</h2>
        <ul>
          <li v-for="item in resume.skills">
            <h4> {{item.name}}</h4>
            <h4> {{item.period}}</h4>
          </li>
        </ul>
      </section>
      <section v-if="resume.contacts">
        <h2>联系方式</h2>
        <p>电话</p>
        <p> {{resume.contacts.phone}}</p>
        <p>QQ</p>
        <h4> {{resume.contacts.qq}}</h4>
        <p>邮箱</p>
        <h4> {{resume.contacts.email}}</h4>
      </section>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    computed: {
      resume() {
        return this.$store.state.resume
      },
      loginUI() {
        return this.$store.state.loginUI
      },
      previewUI() {
        return this.$store.state.previewUI
      }
    },
    methods: {
      closePreview() {
        this.$store.commit('closePreview')
      }
    }
  }

</script>

<style scoped lang="scss">

  .active {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    > .preview-wrapper {
      position: relative;
      width: 1280px;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid;
      .close-icon-wrapper {
        position: absolute;
        right: -64px;
        top: 16px;
        width: 40px;
        height: 40px;
        .el-icon-close {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

</style>
