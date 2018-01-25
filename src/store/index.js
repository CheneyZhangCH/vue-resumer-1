import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 0,
    loginUI: false,
    canLogin: true,
    user: {
      username: ''
    },
    previewUI: false,
    resume: {
      profile: {
        name: "Cheney",
        title: "前端工程师",
        sex: '男',
        age: '20',
        city: '上海',
      },
      contacts: {
        phone: '18521563197',
        qq: '809046240',
        email: 'cheney_zhang@foxmail.com'
      },
      jobs: [
        {company: '南通贝斯特', from: '', to: '', content: '公司内部OA系统'}
      ],
      educations: [
        {name: '大连理工大学', from: '', to: '', content: '学士'}
      ],
      projects: [
        {name: '在线简历编辑器', content: 'content'}
      ],
      skills: [
        {name: '优秀员工', content: 0}
      ],

    }
  },
  mutations: {
    setCurrentTab(state, payload) {
      state.currentTab = payload
      localStorage.setItem('state', JSON.stringify(state))
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
    addSkill(state) {
      state.resume.skills.push({name: '', period: ''})
    },
    removeSkill(state, index) {
      state.resume.skills.splice(index, 1)
    },
    updateProfile(state, payload) {
      let newkey = payload.key
      let value = payload.value
      state.resume.profile[newkey] = value
    },
    updateJob(state, payload) {
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
    updateSkill(state, payload) {
      let newkey = payload.key
      let value = payload.value
      let index = payload.index
      state.resume.skills[index][newkey] = value
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
    canLogin(state, payload) {
      state.canLogin = payload
    },
    setUser(state, payload) {
      state.user.username = payload.username
      localStorage.setItem('username', payload.username)
    },
    logoutUser(state) {
      state.user.username = null
      state.canLogin = true
      localStorage.removeItem('username')
    },
    initState(state, payload) {
      Object.assign(state, payload)
    },
    initUser(state) {
      state.user.username = null
      state.canLogin = true
    },
    toSave(state) {
      localStorage.setItem('state', JSON.stringify(state))
    },
    toPreview(state, payload) {
      state.previewUI = payload
    },
    closePreview(state) {
      state.previewUI = false
    }
  },
})
