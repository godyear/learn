import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/comm/state'
import mutations from '@/store/comm/mutations'
import actions from '@/store/comm/actions'
import getters from '@/store/comm/getters'
import modules from '@/store/modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})

export default store