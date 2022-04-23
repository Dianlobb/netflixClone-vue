<template>
  <img
    class="row_poster"
    :id="movie.id"
    :src="`https://image.tmdb.org/t/p/original/${
      isLargeRow ? movie.poster_path : movie.backdrop_path
    }`"
    :alt="movie.name"
    v-if="!showVideo"
    @mouseover="showVideo = true && getVideo(movie.id)"
    @mouseleave="showVideo = false"
  />

  <iframe
    class="Show_vdeo"
    v-if="showVideo"
    @mouseleave="showVideo = false"
    width="220"
    height="145"
    :src="`https://www.youtube.com/embed/${Trailer.key}?autoplay=1&mute=1`"
  >
  </iframe>
</template>

<script>
import { useStore } from "vuex";
import { reactive, ref } from "vue";
import { fetchTrailer } from "../services/request";
export default {
  name: "PosterCard",
  props: {
    movie: { type: Object, require: true },
    isLargeRow: { type: Boolean, require: true },
  },
  setup() {
    const store = useStore();
    const showVideo = ref(false);
    const Trailer = reactive({
      key: "",
    });
    const getVideo = async (movieID) => {
      let result = await store.dispatch("getVideo", fetchTrailer(movieID));
      Trailer.key = result[0].key;
    };
     

    return {
      showVideo,
      getVideo,
      Trailer,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.row_poster {
  width: 100%;
  object-fit: contain;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.09);
    opacity: 1;
  }
}
.Show_vdeo{
  transition: opacity 450ms;
  opacity: 0;
  &:hover{
    
    opacity: 1;
  }
}
</style>
