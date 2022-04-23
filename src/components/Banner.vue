<template>
  <header
    class="banner"
    :style="{ 'background-image': 'url(' + image(movie.backdrop_path) + ')' }"
  >
    <div class="banner_contents">
      <h1 class="banner_title">
        {{ movie?.title || movie?.name || movie?.original_name }}
      </h1>
      <h1 class="banner__descriptions">
        {{ truncate(movie?.overview, 150) }}
      </h1>
      <div class="banner__buttons">
        <button class="banner__button">Play</button>
        <button class="banner__button">My List</button>
      </div>
    </div>
    <div class="banner--fadeBottom" />
  </header>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Banner",

  setup() {
    const store = useStore();

    const truncate = (string, character) => {
      return string?.length > character
        ? string.substr(0, character - 1) + "..."
        : string;
    };

    const image = (img) => {
      return `https://image.tmdb.org/t/p/original/${img}`;
    };

    return {
      truncate,
      movie: computed(() => store.getters.getMovie),
      image,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  background-size: cover;
  background-position: center center;
  position: relative;
  color: white;
  object-fit: contain;
  height: 548px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.banner_contents {
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
  text-align: left;
}
.banner_title {
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
  text-shadow: 2px 2px 2px black;
}
.banner__descriptions {
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.9rem;
  max-width: 360px;
  height: 80px;
  text-shadow: 1px 1px 2px black;
}
.banner--fadeBottom {
  width: 100vw;
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
  align-self: flex-end;
  /*My*/
  top: 20%;
  position: relative;
}
.banner__button {
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  background-color: rgb(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;
}
.banner__button:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
}
</style>
