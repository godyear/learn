//moduleA 为右边栏收纳中内容有关
const moduleA = {
  state: {
    gisViewNumber: 4,
  },
  mutations: {
    //方法
    // 视图加
    increment(state) {
      state.gisViewNumber++;
      if(state.gisViewNumber > 4) {
        state.gisViewNumber = 4;
      }
    },
    // 视图减
    decrement(state) {
      state.gisViewNumber--;
      if(state.gisViewNumber < 2) {
        state.gisViewNumber = 2;
      } 
    },
    btnGetGisNumber(state, num) {
      state.gisViewNumber = num;
    }
  },
  actions: {

  },
  getters: {
    getGisViewNumber(state) {
      return state.gisViewNumber;
    }
  }
}
export default moduleA