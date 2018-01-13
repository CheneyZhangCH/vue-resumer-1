<template>
  <div>
    <h2>获奖经历</h2>
    <el-form>
      <div class="container" v-for="(award, index) in awards">
        <el-form-item v-for="key in keys"
                      v-bind:label="labels[key]"
                      v-bind:key="key.id">
          <el-input v-bind:value="award[key]"
                    v-on:input.native="updateAward($event, key, index)"
                    placeholder="请输入相关内容">
          </el-input>
        </el-form-item>
        <i class="el-icon-delete remove-button" v-on:click="removeAward(index)"></i>
        <hr>
      </div>
      <el-button class="edit-button" type="primary" icon="el-icon-edit" v-on:click="addAward()"></el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        labels: {
          name: '获得奖项',
          period: '获得时间',
        }
      }
    },
    computed: {
      keys() {
        return Object.keys(this.$store.state.resume.awards[0])
      },
      awards() {
        return this.$store.state.resume.awards;
      }
    },
    methods: {
      addAward() {
        this.$store.commit('addAward')
      },
      removeAward(index) {
        this.$store.commit('removeAward', index)
      },
      updateAward($event, key, index) {
        this.$store.commit('updateAward', {
          value: $event.target.value,
          key: key,
          index: index
        })
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
