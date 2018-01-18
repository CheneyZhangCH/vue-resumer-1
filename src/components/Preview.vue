<template>
  <div id="preview" v-show="login === false">
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
          <h4> {{item.period}}</h4>
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

    <section v-if="resume.awards">
      <h2>获奖经历</h2>
      <ul>
        <li v-for="item in resume.awards">
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
</template>

<script>

  export default {
    data() {
      return {
        value6: ''
      }
    },
    computed: {
      resume() {
        return this.$store.state.resume
      },
      login() {
        return this.$store.state.login
      }
    }
  }

</script>

<style scoped>

  #preview {
    border: 1px solid red;
    min-height: 100px;
  }

</style>
