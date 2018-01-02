<template>
  <div id="app">
    <Topbar id="topbar"></Topbar>
    <div>
      {{count}}
      <button v-on:click="add()">加</button>
      <button v-on:click="reduce()">减</button>
    </div>
    <main>
      <Editor v-bind:resume="resume" id="editor"></Editor>
      <Preview v-bind:resume="resume" id="preview"></Preview>
    </main>
  </div>
</template>

<script>
  /*
  // 先引入hello World，在template中即可应用
  import HelloWorld from './components/HelloWorld'
  import Zhang from './components/Cheney'

  // 将App导出，App引用组件HelloWorld，书写形式必须如下
  export default {
    name: 'app',
    components: {
      "HelloWorld": HelloWorld,
      "Cheney": Zhang
      // 此处的Cheney对应template中的标签名字
    }
  }
  */

  import Topbar from './components/Topbar.vue'
  import Editor from './components/Editor.vue'
  import Preview from './components/Preview.vue'

  import store from './store/index'


  export default {
    name: 'app',
    components: {
      Topbar,
      Editor,
      Preview,
    },
    store,
    data() {
      return {
        resume: {
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
          ],
          contacts: {
            phone: '',
            qq: '',
            email: ''
          }
        }
      }
    },
    computed: {
      count(){
       return this.$store.state.count
      }
    },
    methods: {
      add(){
        this.$store.commit('increment')
      },
      reduce(){
        this.$store.commit('reducement')
      }
    }

  }

</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    #topbar {
    }
    main {
      width: 1280px;
      margin: 0 auto;
      margin-top: 16px;
      display: flex;
      flex-grow: 1;
      #editor {
        min-width: 30em;
        margin-right: 40px;
      }
      #preview {
        flex-grow: 1;
      }
    }
  }
</style>
