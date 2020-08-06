import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index_text:'index_text',
    count:0,
    map_text:'map_text'
  },
  mutations: {
    change(state,val){
      state.index_text = val;
    },
    countadd(state){
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
