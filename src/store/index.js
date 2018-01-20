import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 0,
    loginUI: false,
    user: {
      username: '',
    },
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
        {company: '南通贝斯特1', period: '2015年至今1', content: '公司内部OA系统1'},
        {company: '南通贝斯特2', period: '2015年至今2', content: '公司内部OA系统2'},
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
        phone: '',
        qq: '',
        email: ''
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
    },
    addJob(state) {
      state.resume.jobs.push({company: '', period: '', content: ''})
    },
    removeJob(state, index) {
      state.resume.jobs.splice(index, 1)
    },
    addEducation(state) {
      state.resume.educations.push({name: '', period: '', content: ''})
    },
    removeEducation(state, index) {
      state.resume.educations.splice(index, 1)
    },
    addProject(state) {
      state.resume.projects.push({name: '', period: '', content: ''})
    },
    removeProject(state, index) {
      state.resume.projects.splice(index, 1)
    },
    addAward(state) {
      state.resume.awards.push({name: '', period: '', content: ''})
    },
    removeAward(state, index) {
      state.resume.awards.splice(index, 1)
    },

    updateProfile(state, payload) {
      let newkey = payload.key
      let value = payload.value
      state.resume.profile[newkey] = value
    },
    updateJob(state, payload) {
      console.log(payload)
      let newkey = payload.key
      let value = payload.value
      let index = payload.index
      state.resume.jobs[index][newkey] = value
    },
    updateEducation(state, payload) {
      let newkey = payload.key
      let value = payload.value
      let index = payload.index
      state.resume.educations[index][newkey] = value
    },
    updateProject(state, payload) {
      let newkey = payload.key
      let value = payload.value
      let index = payload.index
      state.resume.projects[index][newkey] = value
    },
    updateAward(state, payload) {
      let newkey = payload.key
      let value = payload.value
      let index = payload.index
      state.resume.awards[index][newkey] = value
    },
    updateContacts(state, payload) {
      let newkey = payload.key
      let value = payload.value
      state.resume.contacts[newkey] = value
    },
    toLoginUI(state) {
      state.loginUI = true
    },
    cancelLogin(state) {
      state.loginUI = false
    },
    setUser(state, payload) {
      state.user.username = payload.username
      console.log(payload)
    }
  },
})
