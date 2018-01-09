<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container" v-model="items" v-for="(item, index) in items">
        <el-form-item v-for="itemKey in itemKeys" v-bind:label="labels[itemKey]" :key="itemKey.id">
          <el-input v-model="item[itemKey]"></el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeItem(index)"></i>
        <hr>
      </div>
      <el-button class="edit-button" type="primary" icon="el-icon-edit" v-on:click="addItem()"></el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['items', 'labels'],
    computed: {
      itemKeys() {
        return Object.keys(this.items[0])
      }
    },
    methods: {
      addItem() {
        this.items.push({name: '', period: '', content: ''})
      },
      removeItem(index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss" scoped>

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

  .edit-button {
    margin-top: 16px;
  }
</style>
