<template>
  <div class="row">
    <h2 class="title">{{ title }}</h2>
    <div class="row_posters">
      <div
        class="poster_container"
        :class="isLargeRow && 'row_posterLarge'"
        v-for="movie in filterMovies(movies)"
        :key="movie.id"
      >
        <PosterCard :movie="movie" :isLargeRow="isLargeRow" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useStore } from "vuex";

export default {
  name: "Row",
  components: {
    PosterCard: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "PosterCard" */ /* webpackPrefetch: true */ "./PosterCard"
      )
    ),
  },
  props: {
    title: { type: String, require: true },
    FetchUrl: { type: String, require: true },
    isLargeRow: { type: Boolean, Default: false },
  },
  setup(props) {
    const store = useStore();

    (async () => {
      await store.dispatch("fetchRows", [
        props.title.split(" ").join(""),
        props.FetchUrl,
      ]);
    })();
    const filterMovies = (movies) => {
      if (movies.length > 0) {
        return movies.filter(
          (movie) =>
            (props.isLargeRow && movie.poster_path) ||
            (!props.isLargeRow && movie.backdrop_path)
        );
      } else {
        return movies;
      }
    };

    return {
      movies: computed(
        () => store.getters[`get${props.title.split(" ").join("")}`]
      ),
      filterMovies,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.row {
  color: #fff;
  margin-left: 20px;
  .title {
    font-size: 0.9rem;
  }
  .row_posters {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    .poster_container {
      max-height: 140px;
      margin-right: 10px;
      min-width: 250px;
       z-index: 111;
    }
    .row_posterLarge {
      max-height: 350px;
      &:hover {
        transform: scale(1.09);
        opacity: 1;
      }
    }
  }
}
</style>
