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
        <h2>个人信息</h2>
        <el-form v-model="profile">
          <el-form-item label="姓名">
            <el-input v-model="profile.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="profile.sex"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="profile.age"></el-input>
          </el-form-item>
          <el-form-item label="所在地">
            <el-input v-model="profile.city"></el-input>
          </el-form-item>
        </el-form>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <h2>工作经历</h2>
        <el-form>
          <div v-model="workExperience" v-for="(work, index) in workExperience">
            <el-form-item label="公司">
              <el-input v-model="work.name"></el-input>
            </el-form-item>
            <el-form-item label="时间">
              <el-input v-model="work.period"></el-input>
            </el-form-item>
            <el-form-item label="工作内容">
              <el-input v-model="work.content"></el-input>
            </el-form-item>
            <el-button type="primary" icon="el-icon-delete" v-on:click="removeWorkExperience(index)"></el-button>
          </div>
          <el-button type="primary" icon="el-icon-edit" v-on:click="addWorkExperience"></el-button>
        </el-form>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <h2>教育经历</h2>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <h2>项目经历</h2>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <h2>获奖情况</h2>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
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
        ]
      }
    },
    methods: {
      addWorkExperience() {
        this.workExperience.push({name: '', period: '', content: ''})
      },
      removeWorkExperience(index) {
        this.workExperience.splice(index, 1)
      }
    }
  }

</script>

<style lang="scss" scoped>

  #editor {
    border: 1px solid green;
    min-height: 100px;
    display: flex;
    nav {
      background: black;
      width: 80px;
      height: 100%;
      text-align: center;
      li {
        z-index: 1;
        .icon {
          width: 40px;
          height: 40px;
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
          fill: black;
        }

      }

    }
    .panels {
      li {
        display: none;
        &.active {
          display: block;
        }
      }
    }
  }


</style>
