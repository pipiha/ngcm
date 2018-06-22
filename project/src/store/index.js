import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'
import * as actions from './actions'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const state = {
  userInfo: '',
  submitStr:'',
}
const mutations = {
  [types.GET_USER] (state, data) {
    /**
         * @param state 为上面定义的state
         *  @param data 为commit 传送过来的data
         */
    state.userInfo = data
  },
  [types.SUB_STR] (state, data) {
    /**
         * @param state 为上面定义的state
         *  @param data 为commit 传送过来的data
         */
    state.submitStr = data
  },
}

export default new Vuex.Store({
  actions,
  state,
  mutations,
  strict: false // debug
})
