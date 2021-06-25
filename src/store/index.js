import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index_text:'index_text',
    count: 1,
    map_text: 'map_text',
    same_name: 'same_name_val'
  },
  // getters 属性，相当于computed（计算属性）
  getters: {
    concat_text: state => {
      // return 1;
      return state.index_text + state.map_text;
    }
  },
  // 只能进行同步更新
  mutations: {
    uodata_index_text(state,val){
      state.index_text = val;
    },
    countadd(state, add_num){
      add_num = add_num ? add_num : 1;
      state.count = state.count + add_num;
    }
  },
  // 可进行异步更新 ，
  actions: {
    async_add (context, add_num) {
      context.commit('countadd',add_num)
    },
    async_es6 ({commit,add_num}) {
      commit('countadd',add_num)
    },
    actionA ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('countadd')
          resolve()
        }, 1000)
      })
    }
  },
  modules: {
  }
})
