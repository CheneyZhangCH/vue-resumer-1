import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 0,
    resume: {
      profile: {
        name: "Cheney",
        title: "Web Developer",
        sex: 'male',
        birth: '1988-02',
        city: 'Shanghai'
      },
      jobs: [
        {company: '南通贝斯特', period: '2015年至今', content: '公司内部OA系统'},
      ],
      educations: [
        {name: '大连理工大学', period: '2007-09~2011-07', content: '学士'},
      ],
      projects: [
        {name: '在线简历编辑器', period: 'period', content: 'content'},
      ],
      awards: [
        {name: '优秀员工', period: 'period'},
      ],
      contacts: {
        phone: '18521563197',
        qq: '819046240',
        email: 'cheney_zhang@foxmail.com'
      }
    }
  },
  mutations: {
    // increment(state, payload) {
    //   state.count += payload
    // },
    // reducement(state, payload) {
    //   state.count -= payload
    // },
    setCurrentTab(state, payload) {
      state.currentTab = payload
      console.log(this.state.currentTab)
    }
  }
})
