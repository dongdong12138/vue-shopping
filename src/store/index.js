import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
  },
  getters: {
  },
  mutations: {
    SAVE_USERINFO(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    saveUserInfo(context, payload) {
      localStorage.setItem('userInfo', JSON.stringify(payload))
      context.commit('SAVE_USERINFO', payload)
    }
  },
  modules: {
  }
})
