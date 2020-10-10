const state = {
  cname: '第二个vuex模块'
}

const mutations = {
  setName(state, data) {
    state.cname = data
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}