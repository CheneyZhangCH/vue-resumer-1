<template>
  <div id="preview">
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



  </div>
</template>

<script>

  export default {
    computed: {
      resume() {
        return this.$store.state.resume
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
