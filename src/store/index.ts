import Vue from "vue";
import Vuex from "vuex";
import { apiStatistics as api } from "@/service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    areas: [],
    cameras: [],
  },
  getters: {
    GET_AREAS(state) {
      return state.areas;
    },
    GET_CAMERAS(state) {
      return state.cameras;
    },
  },
  mutations: {
    SET_AREAS(state, areas) {
      state.areas = areas;
    },
    SET_CAMERAS(state, cameras) {
      state.cameras = cameras;
    },
  },
  actions: {
    async getAreas({ commit }) {
      try {
        const response = await api.getAreas();
        commit("SET_AREAS", response.data);
      } catch (err) {
        return console.log(err);
      }
    },
    async getCameras({ commit }) {
      try {
        const response = await api.getCameras();
        commit("SET_CAMERAS", response.data);
      } catch (err) {
        return console.log(err);
      }
    },
  },
  modules: {},
});
