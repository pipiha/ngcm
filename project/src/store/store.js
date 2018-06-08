import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: { // 定义变量
    LOOKDATA: ''
  },
  mutations: {
    increase (state) {
      state.count++
    }
  },
  actions: {
    actionIncrease ({commit}) {
      commit('increase')
    }
    // this.$store.dispatch('getUser')
  }
})
export default store
