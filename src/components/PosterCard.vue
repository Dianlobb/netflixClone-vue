<template>
  <h5 v-if="!isLargeRow">
    {{ movie?.title || movie?.name || movie?.original_name }}
  </h5>
  <img
    class="row_poster"
    :class="isLargeRow ? 'large' : 'normal'"
    :id="movie.id"
    :src="srcImg"
    :alt="movie.name"
    @click="emit('see-trailer', [movie.id, movie?.media_type])"
    loading="lazy"
  />
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "PosterCard",
  emits: ["see-trailer"],
  props: {
    movie: { type: Object, require: true },
    isLargeRow: { type: Boolean, require: true },
  },
  setup(props, { emit }) {
    return {
      emit,
      srcImg: computed(
        () =>
          `https://image.tmdb.org/t/p/${props.isLargeRow ? "w500" : "w300"}/${
            props.isLargeRow
              ? props.movie.poster_path
              : props.movie.backdrop_path
          }`
      ),
    };
  },
};
</script>

<style scoped lang="scss">
.row_poster {
  width: 100%;
  object-fit: contain;
  transition: transform 450ms;
  z-index: -1;
  .normal {
    aspect-ratio: 16/9;
  }
  .large {
    aspect-ratio: 1;
  }
  &:hover {
    transform: scale(1.09);
    opacity: 1;
  
  }
}
h5 {
  color: #fff;
  position: absolute;
  text-shadow: 0.5px 0.5px 1px black;
  margin-left: 8px;
}
</style>
