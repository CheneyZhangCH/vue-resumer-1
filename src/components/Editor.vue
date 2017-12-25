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
      <li v-bind:class="{active: currentTab === 0}">1</li>
      <li v-bind:class="{active: currentTab === 1}">2</li>
      <li v-bind:class="{active: currentTab === 2}">3</li>
      <li v-bind:class="{active: currentTab === 3}">4</li>
      <li v-bind:class="{active: currentTab === 4}">5</li>
      <li v-bind:class="{active: currentTab === 5}">6</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentTab: 0,
        items: [0,1,2,3,4,5],
        icons: ['shenfenxinxi','gongzuo','xueli','projectunpressed','award4','phone1']
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
