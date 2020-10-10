const state = {
  name: '请先登录'
}

const mutations = {
  setName(state, data) {
    state.name = data
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}