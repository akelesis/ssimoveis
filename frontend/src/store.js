import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houses: [],
    house: {},
    action: {},
    research: {}
  },
  mutations: {
    getHouse(state, payload){
      state.house = payload
    },
    getAction(state, payload){
      state.action = payload
    }
  },
  actions: {

  }
})
