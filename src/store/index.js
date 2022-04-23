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
  },
  mutations: {
    SET_MOVIES(state, data) {
      state.movie = data;
    },
    SET_ROWS(state, [key, data]) {
      state[key.replace("fetch", "")] = data;
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
  },
  modules: {},
});
