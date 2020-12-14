import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
    showContent: false,
    goodsList: [],
    size: 6,
    type: null,
    counteMap: {},
  },
  mutations: {
    setCounterMap(state, counterMap) {
      state.counteMap = counterMap;
    },
    storageChange(state, {
      id,
      value,
    }) {
      if (state.counteMap[id]) {
        if ((value === -1 && state.counteMap[id] === 1) || value === -Infinity) {
          Vue.delete(state.counteMap, id);
        } else {
          Vue.set(state.counteMap, id, state.counteMap[id] + value);
        }
      } else {
        Vue.set(state.counteMap, id, 1);
      }
      localStorage.setItem('goods', JSON.stringify(state.counteMap));
    },
    /**
     * 清除原有的商品
     * @param {*} state
     */
    resetGoodsList(state) {
      state.goodsList = [];
    },
    /**
     * 新的商品列表
     * @param {*} state
     * @param {*} list
     */
    setGoodsList(state, list) {
      state.goodsList = [...state.goodsList, ...list];
    },
    /** 获取标签类型商品 */
    setGoodsType(state, type) {
      state.type = type;
    },
    setShowContent(state, bool) {
      state.showContent = bool;
    },
    /**
     * 设置侧边标题
     * @param {*} state
     * @param {*} list
     */
    setSideList(state, list) {
      state.sideList = list;
    },
  },
  actions: {
    setCounterMap(commit, counteMap) {
      commit('setCounterMap', counteMap);
    },
    async getGoodsList({
      commit,
      state,
    }, options) {
      const {
        page,
        sort,
      } = options;
      const type = options.type || state.type;
      commit('setGoodsType', type);
      const {
        list,
      } = await api.getGoodsList(type, page, state.size, sort);
      // console.log(type, page, state.size, sort, list);
      commit('setGoodsList', list);
    },
    /**
     * 获取侧边导航栏
     * @param {*} param0
     * @param {*} type
     */
    async getSideList({
      commit,
    }, type) {
      commit('setShowContent', false);
      const sideValue = await api.getsidebar(type);
      commit('setSideList', sideValue);
      commit('setShowContent', true);
    },
  },
  modules: {},
});
