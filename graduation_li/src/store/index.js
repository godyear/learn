import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    studentCourseData: []
  },
  mutations: {
    setStudentCourseData(state, arr) {
      state.studentCourseData = arr;
    }
  },
  actions: {
  },
  getters: {
    getStudentCourseData(state) {
      return state.studentCourseData
    }
  },
  modules: {
  }
})
