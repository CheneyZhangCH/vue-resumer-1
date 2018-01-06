import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 0,
    resume: {
      profile: {
        name: "Cheney",
        sex: 'male',
        age: '30',
        city: 'Shanghai'
      },
      jobs: [
        {name: 'jobs', period: 'period', content: 'content'}
      ],
      educations: [
        {name: 'educations', period: 'period', content: 'content'}
      ],
      projects: [
        {name: 'projects', period: 'period', content: 'content'}
      ],
      awards: [
        {name: 'awards', period: 'period'}
      ],
      contacts: {
        phone: 'phone',
        qq: 'qq',
        email: 'email'
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
    setCurrentTab(state, payload){
      state.currentTab = payload
      console.log(this.currentTab)
    }
  }
})
