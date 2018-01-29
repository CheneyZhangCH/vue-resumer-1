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
        name: "张晨辉",
        title: "前端工程师",
        sex: '男',
        age: '29',
      },
      contacts: {
        phone: '18521563197',
        qq: '809046240',
        wechat: 'zch819046240',
        email: 'cheney_zhang@foxmail.com',
        location: '上海市浦东新区',
      },
      jobs: [
        {name: '南通江海海洋工程研究院', from: '2016.05', to: '2018.02', content: '公司内部OA系统'},
        {name: '欧赛德上海船舶设计有限公司', from: '2014.06', to: '2016.05', content: '公司内部OA系统'},
        {name: 'STX大连造船集团', from: '2012.10', to: '2014.06', content: '公司内部OA系统'},
        {name: '江苏熔盛重工造船集团', from: '2011.06', to: '2012.10', content: '公司内部OA系统'},
      ],
      educations: [
        {name: '大连理工大学', from: '2007.09', to: '2011.06', content: '本科'},
        {name: '尉氏县第一高级中学', from: '2004.09', to: '2007.06', content: '高中'}
      ],
      projects: [
        {name: '在线简历编辑器', content: 'www.baidubuzhidao.com'},
        {name: 'note online', content: 'www.baidubuzhidao.com'},
        {name: 'github', content: 'www.baidubuzhidao.com'},
      ],
      skills: [
        {name: 'English', content: 80},
        {name: 'Html', content: 70},
        {name: 'CSS', content: 60},
        {name: 'Javascript', content: 70},
        {name: 'Vue', content: 60},
        {name: 'Nodejs', content: 60},
        {name: 'Express', content: 60},
        {name: 'Eggjs', content: 60},
      ],
    }
  },
  mutations: {
    setCurrentTab(state, payload) {
      state.currentTab = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    addJobEducation(state, payload) {
      state.resume[payload].push({name: '', from: '', to: '', content: ''})
    },
    removeJobEducation(state, payload) {
      let index = payload.index
      let key = payload.key
      state.resume[key].splice(index, 1)
    },
    updateJobEducation(state, payload) {
      let mainKey = payload.mainKey
      let key = payload.key
      let value = payload.value
      let index = payload.index
      state.resume[mainKey][index][key] = value
    },

    //
    addSkillProject(state, payload) {
      state.resume[payload].push({name: '', content: ''})
    },
    removeSkillProject(state, payload) {
      let index = payload.index
      let key = payload.key
      state.resume[key].splice(index, 1)
    },

    updateSkillProject(state, payload) {
      let mainKey = payload.mainKey
      let key = payload.key
      let value = payload.value
      let index = payload.index
      state.resume[mainKey][index][key] = value
    },

    //
    updateProfile(state, payload) {
      let newkey = payload.key
      let value = payload.value
      state.resume.profile[newkey] = value
    },
    updateContacts(state, payload) {
      let newkey = payload.key
      let value = payload.value
      state.resume.contacts[newkey] = value
    },

    //
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
