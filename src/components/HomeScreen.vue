<template>
  <Nav />
  <Banner />
  <Row
    :title="correctName('fetchNetflixOriginals')"
    :FetchUrl="API_request.fetchNetflixOriginals"
    :isLargeRow="true"
  />
  <Row
    :title="correctName('fetchTrending')"
    :FetchUrl="API_request.fetchTrending"
    :isLargeRow="false"
  />
  <Row
    :title="correctName('fetchTopRated')"
    :FetchUrl="API_request.fetchTopRated"
    :isLargeRow="false"
  />
  <Row
    :title="correctName('fetchActionMovies')"
    :FetchUrl="API_request.fetchActionMovies"
    :isLargeRow="false"
  />
  <Row
    :title="correctName('fetchComedyMovies')"
    :FetchUrl="API_request.fetchComedyMovies"
    :isLargeRow="false"
  />
  <Row
    :title="correctName('fetchHorrorMovies')"
    :FetchUrl="API_request.fetchHorrorMovies"
    :isLargeRow="false"
  />
  <Row
    :title="correctName('fetchRomanceMovies')"
    :FetchUrl="API_request.fetchRomanceMovies"
    :isLargeRow="false"
  />
  <Row
    :title="correctName('fetchDocumentaries')"
    :FetchUrl="API_request.fetchDocumentaries"
    :isLargeRow="false"
  />
</template>

<script>
import Nav from "./Nav";
// import Banner from "./Banner";
import { useStore } from "vuex";
import { defineAsyncComponent } from "vue";
import { API_request } from "../services/request";

export default {
  name: "Homescreen",
  components: {
    Nav,
    Banner: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "Banner" */ /* webpackPrefetch: true */ "./Banner"
      )
    ),
    Row: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Row" */ /* webpackPrefetch: true */ "./Row")
    ),
  },
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchData");
    const correctName = (key) => {
      return key
        .replace("fetch", "")
        .split(/(?=[A-Z])/)
        .join(" ");
    };

    return {
      API_request,
      correctName,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
