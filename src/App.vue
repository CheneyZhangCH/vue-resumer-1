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
      if (!username) {
        this.$store.commit('initUser')
      }
    },
    methods: {}
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
    background: #f1f2f3;
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
        min-width: 20em;
        margin-right: 40px;
        border-radius: 4px;
      }
      #preview {
        flex-grow: 1;
        overflow: auto;
        border-radius: 4px;
      }
    }
  }
</style>
