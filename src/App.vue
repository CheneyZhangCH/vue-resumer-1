<template>
  <div id="app">
    <Topbar id="topbar"></Topbar>
    <main>
      <Editor id="editor"></Editor>
      <Preview id="preview"></Preview>
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
    computed: {},
    created() {
      let state = localStorage.getItem('state')
      let username = localStorage.getItem('username')
      if (state) {
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
      if (username !== '') {
        this.$store.commit('initUser', username)
      }
    },
    methods: {

      //  add(){
      // $store.commit('xxx') 出发状态变更
      //    this.$store.commit('increment',10)
      //  },
      //  reduce(){
      // $store.commit('xxx') 出发状态变更
      //    this.$store.commit('reducement',5)
      //  }
      //}
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
