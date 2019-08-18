import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuVisibility: false,
    loggedIn: false
  },
  mutations: {
    toggleMenu(state, isVisible){
      if(isVisible === undefined){
        state.menuVisibility = !state.menuVisibility
      }
      else{
        state.menuVisibility = isVisible
      }
    },
    toggleBtn(state, visibility){
      state.loggedIn = visibility
    }
  },
  actions: {

  }
})
