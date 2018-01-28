<template>
  <div>
    <h2>联系方式</h2>
    <el-form>
      <div class="container" v-model="contacts">
        <el-form-item v-for="(val, key) in contacts"
                      :label="labels[key]"
                      :key="key.id">
          <el-input :value="contacts[key]"
                    @input.native="updateContacts($event, key)"
                    placeholder="请输入相关内容"
                    clearable>
          </el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        labels: {
          phone: '联系电话',
          qq: 'QQ',
          wechat: '微信',
          email: '邮箱',
          location: '地址'
        }
      }
    },
    computed: {
      keys() {
        return Object.keys(this.$store.state.contacts)
      },
      contacts() {
        return this.$store.state.resume.contacts;
      }
    },
    methods: {
      updateContacts($event, key) {
        this.$store.commit('updateContacts', {key: key, value: $event.target.value})
      },
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

