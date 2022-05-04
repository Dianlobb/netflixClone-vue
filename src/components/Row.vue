<template>
  <div class="row" @mouseleave="showVideo = false">
    <h2 class="title">{{ title }}</h2>
    <div class="row_posters">
      <div
        class="poster_container"
        :class="isLargeRow && 'row_posterLarge'"
        v-for="movie in filterMovies(movies)"
        :key="movie.id"
      >
        <PosterCard
          :movie="movie"
          :isLargeRow="isLargeRow"
          @see-trailer="getVideo"
        />
      </div>
    </div>
    <div class="youtubeVideo" v-if="showVideo">
      <YoutubeVue3
        @mouseleave="youtube.player.stopVideo()"
        class="youtube_iframe"
        ref="youtube"
        :videoid="IdPlay"
        :loop="1"
        :width="700"
        :height="420"
        @ended="onEndedorPause"
        @paused="onEndedorPause"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, ref, nextTick } from "vue";
import { useStore } from "vuex";
import { YoutubeVue3 } from "youtube-vue3";
import { fetchTrailer } from "../services/request";

export default {
  name: "Row",
  components: {
    PosterCard: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "PosterCard" */ /* webpackPrefetch: true */ "./PosterCard"
      )
    ),
    YoutubeVue3,
  },
  props: {
    title: { type: String, require: true },
    FetchUrl: { type: String, require: true },
    isLargeRow: { type: Boolean, Default: false },
  },
  setup(props) {
    const store = useStore();
    const IdPlay = ref("");
    const youtube = ref(null);
    const showVideo = ref(false);
    (() => {
      store.dispatch("fetchRows", [
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
      }
      return movies;
    };

    const playCurrentVideo = () => youtube.value?.player.playVideo();

    const onEndedorPause = () => nextTick(() => (showVideo.value = false));
    const getVideo = async (dataMovie) => {
      const [movieID, mediaType] = dataMovie;
      try {
        await youtube.value?.player.stopVideo();
      } catch (error) {
        youtube.value = null;
      }

      nextTick(async () => {
        let result = await store.dispatch(
          "getVideo",
          fetchTrailer(
            movieID,
            mediaType || (props.title.includes("Netflix") ? "tv" : "movie")
          )
        );
        IdPlay.value = result.length ? result[0].key : null;
        showVideo.value = true;
      });
    };
    return {
      movies: computed(
        () => store.getters[`get${props.title.split(" ").join("")}`]
      ),
      filterMovies,
      youtube,
      playCurrentVideo,
      IdPlay,
      getVideo,
      onEndedorPause,
      showVideo,
    };
  },
};
</script>

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
      position: relative;
    }
    .row_posterLarge {
      max-height: 350px;
      &:hover {
        transform: scale(1.09);
        opacity: 1;
      }
    }
  }
  .youtubeVideo {
    width: 100%;
  }
}
</style>
