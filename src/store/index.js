import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import comp from './modules/comp'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    comp
  }
})
