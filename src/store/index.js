import { createStore } from "vuex";
import { instance } from "../services/axios";
import { API_request } from "../services/request";

export default createStore({
  state: {
    movie: {},
    Trending: {},
    NetflixOriginals: {},
    TopRated: {},
    ActionMovies: {},
    ComedyMovies: {},
    HorrorMovies: {},
    RomanceMovies: {},
    Documentaries: {},
    islogin: sessionStorage.getItem("IS_LOGIN") || false,
    userdata: {},
  },
  getters: {
    getMovie: (state) => state.movie,
    getTrending: (state) => state.Trending,
    getNetflixOriginals: (state) => state.NetflixOriginals,
    getTopRated: (state) => state.TopRated,
    getActionMovies: (state) => state.ActionMovies,
    getComedyMovies: (state) => state.ComedyMovies,
    getHorrorMovies: (state) => state.HorrorMovies,
    getRomanceMovies: (state) => state.RomanceMovies,
    getDocumentaries: (state) => state.Documentaries,
    getIslogin: (state) => state.islogin,
    getUserdata: (state) => state.userdata,
  },
  mutations: {
    SET_MOVIES(state, data) {
      state.movie = data;
    },
    SET_ROWS(state, [key, data]) {
      state[key.replace("fetch", "")] = data;
    },
    IS_LOGIN(state, data) {
      state.islogin = data;
    },
    SET_DATA_USER(state, data) {
      state.userdata = data;
    },
  },
  actions: {
    async fetchData(context) {
      const request = await instance.get(API_request.fetchNetflixOriginals);
      const movie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      context.commit("SET_MOVIES", movie);
      return request;
    },
    async fetchRows(context, [key, value]) {
      const request = await instance.get(value);
      context.commit("SET_ROWS", [key, request.data.results]);
      return request;
    },
    async getVideo(context, payload) {
      const request = await instance.get(payload);
      return request.data.results.filter(
        (item) => item.type === "Trailer" && item.official == true
      );
    },
    async Login(context, paylod) {
      context.commit("IS_LOGIN", true);
      sessionStorage.setItem("IS_LOGIN", true);
      context.commit("SET_DATA_USER", paylod);
    },
    async logOut(context) {
      sessionStorage.setItem("IS_LOGIN", false);
      context.commit("IS_LOGIN", false);
    },
  },
  modules: {},
});
