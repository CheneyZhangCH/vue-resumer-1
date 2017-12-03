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

  export default {
    name: 'app',
    components: {
      Topbar,
      Editor,
      Preview,
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
      display: flex;
      align-items: stretch;
      flex-grow: 1;
      #editor {
        min-width: 400px;
      }
      #preview {
        flex-grow: 1;
      }
    }
  }
</style>
