<template>
  <div>
    <h2>获奖经历</h2>
    <el-form>
      <div class="container" v-model="items" v-for="(item, index) in items">
        <el-form-item label="奖项">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="item.period"></el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeItem(index)"></i>
        <hr>
      </div>
      <el-button type="primary" icon="el-icon-edit" v-on:click="addItem()"></el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['items'],
    methods: {
      addItem() {
        this.items.push({name: '', period: '', content: ''})
      },
      removeItem() {
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

</style>
