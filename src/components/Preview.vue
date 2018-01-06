<template>
  <div id="preview">
    <h1>
      {{resume}}
    </h1>
    <!--<span>{{resume.profile.sex}}</span>-->
    <!--<span>{{resume.profile.age}}</span>-->
    <!--<span>{{resume.profile.city}}</span>-->
  </div>
</template>

<script>

  export default {
    computed : {
      resume(){
        return this.$store.state.resume
      }
    }
  }

</script>

<style scoped>

  #preview{
    border:1px solid red;
    min-height: 100px;
  }

</style>
