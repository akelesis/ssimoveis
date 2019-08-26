import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houses: [],
    house: {}
  },
  mutations: {
    getHouse(state, payload){
      state.house = payload
    }
  },
  actions: {

  }
})
