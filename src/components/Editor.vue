<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in items" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-bind:class="{active: currentTab === 0}">
        <Profile v-bind:profile="profile"></Profile>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <WorkExperience v-bind:items="workExperience"></WorkExperience>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <EducationExperience v-bind:items="educationExperience"></EducationExperience>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ProjectExperience v-bind:items="projectExperience"></ProjectExperience>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <Awards v-bind:items="awards"></Awards>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>

<script>

  import Profile from "./editor/Profile.vue"
  import WorkExperience from "./editor/WorkExperience.vue"
  import EducationExperience from "./editor/EducationExperience.vue"
  import ProjectExperience from "./editor/ProjectExperience.vue"
  import Awards from "./editor/Awards.vue"

  export default {
    components: {
      Profile: Profile,
      WorkExperience: WorkExperience,
      EducationExperience: EducationExperience,
      ProjectExperience: ProjectExperience,
      Awards: Awards
    },
    data() {
      return {
        currentTab: 0,
        items: [0, 1, 2, 3, 4, 5],
        icons: ['shenfenxinxi', 'gongzuo', 'xueli', 'projectunpressed', 'award4', 'phone1'],
        profile: {
          name: "",
          sex: '',
          age: '',
          city: ''
        },
        workExperience: [
          {name: '', period: '', content: ''}
        ],
        educationExperience: [
          {name: '', period: '', content: ''}
        ],
        projectExperience: [
          {name: '', period: '', content: ''}
        ],
        awards: [
          {name: '', period: ''}
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>

  #editor {
    border: 1px solid green;
    min-height: 100px;
    display: flex;
    overflow: hidden;
    nav {
      background: black;
      width: 80px;
      height: 100%;
      text-align: center;
      li {
        z-index: 1;
        .icon {
          width: 32px;
          height: 32px;
          color: white;
          margin-top: 16px;
          margin-bottom: 16px;
          vertical-align: -0.15em;
          fill: white;
        }
      }
      .active {
        background: white;
        .icon {
          fill: grey;
        }
      }
    }
    .panels {
      flex: 1;
      li {
        display: none;
        &.active {
          display: block;
          height: 100%;
          width: 100%;
          padding: 16px;
          overflow: auto;
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

        }
      }
    }
  }
</style>
