import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, value) {
      state.count = value
    }
  },
  actions: {
    addAction(context){
      context.commit('setCount', this.state.count+1)
    },
    delAction(context){
      context.commit('setCount', this.state.count-1)
    }
  },
  modules: {
  }
})
