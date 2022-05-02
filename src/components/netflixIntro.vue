<template>
  <video
    width="400"
    class="Video_intro"
    ref="videoPlay"
    @mouseover="autoPlay"
    @ended="emit('video-finish')"
  >
    <source src="../assets/video/Intro.mp4" type="video/mp4" autoplay />
    Your browser does not support HTML video.
  </video>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  emits: ["video-finish"],
  setup(_, { emit }) {
    const videoPlay = ref(null);
    const autoPlay = () => {
      let isplaing = videoPlay.value.play();
      if (isplaing !== undefined) {
        isplaing.then().catch(() => {
          videoPlay.value.controls = true;
        });
      }
    };
    return {
      videoPlay,
      emit,
      autoPlay,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Video_intro {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
