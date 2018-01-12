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
        <Profile v-bind:profile="resume.profile"></Profile>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <Jobs v-bind:jobs="resume.jobs"></Jobs>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <Educations v-bind:educations="resume.educations"></Educations>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <Projects v-bind:projects="resume.projects"></Projects>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <Awards v-bind:awards="resume.awards"></Awards>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <Contacts v-bind:contacts="resume.contacts"></Contacts>
      </li>
    </ol>
  </div>
</template>

<script>

  import Profile from "./editor/Profile.vue";
  import Jobs from "./editor/Jobs.vue";
  import Educations from "./editor/Educations.vue";
  import Projects from "./editor/Projects.vue";
  import Awards from "./editor/Awards.vue";
  import Contacts from "./editor/Contacts.vue";

  export default {
    components: {
      Profile: Profile,
      Jobs: Jobs,
      Educations: Educations,
      Projects: Projects,
      Awards: Awards,
      Contacts: Contacts
    },
    data() {
      return {
        items: [0, 1, 2, 3, 4, 5],
        icons: ['shenfenxinxi', 'gongzuo', 'xueli', 'projectunpressed', 'award4', 'phone1'],
      }
    },
    computed: {
      currentTab: {
        get() {
          return this.$store.state.currentTab
        },
        set(value) {
          return this.$store.commit('setCurrentTab', value)
        }
      },
      resume() {
        return this.$store.state.resume
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
