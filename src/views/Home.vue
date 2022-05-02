<template>
  <Nav />
  <Banner v-show="show" />
  <Row
    v-show="show"
    :title="correctName('fetchNetflixOriginals')"
    :FetchUrl="API_request.fetchNetflixOriginals"
    :isLargeRow="true"
  />
  <Row
    v-show="show"
    :title="correctName('fetchTrending')"
    :FetchUrl="API_request.fetchTrending"
    :isLargeRow="false"
  />
  <Row
    v-show="show"
    :title="correctName('fetchTopRated')"
    :FetchUrl="API_request.fetchTopRated"
    :isLargeRow="false"
  />
  <Row
    v-show="show"
    :title="correctName('fetchActionMovies')"
    :FetchUrl="API_request.fetchActionMovies"
    :isLargeRow="false"
  />
  <Row
    v-show="show"
    :title="correctName('fetchComedyMovies')"
    :FetchUrl="API_request.fetchComedyMovies"
    :isLargeRow="false"
  />
  <Row
    v-show="show"
    :title="correctName('fetchHorrorMovies')"
    :FetchUrl="API_request.fetchHorrorMovies"
    :isLargeRow="false"
  />
  <Row
    v-show="show"
    :title="correctName('fetchRomanceMovies')"
    :FetchUrl="API_request.fetchRomanceMovies"
    :isLargeRow="false"
  />
  <Row
    v-show="show"
    :title="correctName('fetchDocumentaries')"
    :FetchUrl="API_request.fetchDocumentaries"
    :isLargeRow="false"
  />
  <netflix-Intro v-if="!show" @video-finish=" show = true"/>
</template>

<script>
import Nav from "@/components/Nav";
// import Banner from "./Banner";
import { useStore } from "vuex";
import { defineAsyncComponent, onMounted,ref } from "vue";
import { API_request } from "@/services/request";
import { nextTick } from "process";
import netflixIntro from "@/components/netflixIntro.vue";

export default {
  name: "Homescreen",
  components: {
    Nav,
    Banner: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "Banner" */ /* webpackPrefetch: true */ "@/components/Banner.vue"
      )
    ),
    Row: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "Row" */ /* webpackPrefetch: true */ "@/components/Row"
      )
    ),
    netflixIntro,
  },
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchData");
    onMounted(() => {
      nextTick(() => {
        window.setInterval(() => {
          store.dispatch("fetchData");
        }, 30000);
  
      });
    });
    const correctName = (key) => {
      return key
        .replace("fetch", "")
        .split(/(?=[A-Z])/)
        .join(" ");
    };
     const show = ref(null);
    // window.onload = function () {
    //   setTimeout(() => {
    //     show.value = true;
    //   }, 6000);
    // };

    return {
      API_request,
      correctName,
      show,
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
