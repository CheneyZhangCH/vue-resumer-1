<template>
  <div>
    <h2>技能点</h2>
    <el-form>
      <div class="container" v-for="(item, index) in skills">
        <el-form-item v-for="(val, key) in item"
                      :label="labels[key]"
                      :key="key.id">
          <div v-if="key === 'content'">
            <p class="skill-rating-hack">你好哇</p>
            <el-slider
              :label="labels[key]"
              :value="val"
              @input="updateSkill($event, key, index)"
              :step="10">
            </el-slider>
          </div>

          <div v-else>
            <el-input :value="item[key]"
                      @input.native="updateSkill($event, key, index)"
                      placeholder="请输入相关内容"
                      clearable>
            </el-input>
          </div>

        </el-form-item>
        <div @click="removeSkill(index)">
          <i class="el-icon-close remove-button"></i>
        </div>
        <hr>
      </div>
      <el-button class="edit-button" @click="addSkill">添加一项</el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        labels: {
          name: '技能',
          content: '熟练度',
        },
        value1: '',
      }
    },
    computed: {
      keys() {
        return Object.keys(this.$store.state.resume.skills[0])
      },
      skills() {
        return this.$store.state.resume.skills;
      }
    },
    methods: {
//      test($event, key, index) {
//        console.log($event)
//        console.log(key);
//        console.log(index);
//      },
      addSkill() {
        this.$store.commit('addSkill')
      },
      removeSkill(index) {
        this.$store.commit('removeSkill', index)
      },
      updateSkill($event, key, index) {
        let newVal
        if (key === 'content') {
          newVal = $event
        } else {
          newVal = $event.target.value
        }
        console.log(newVal);
        this.$store.commit('updateSkill', {
          value: newVal,
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
    .skill-rating-hack {
      opacity: 0;
    }
  }

  .edit-button {
    margin-top: 16px;
  }
</style>
