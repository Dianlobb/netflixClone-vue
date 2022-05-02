<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />

</template>
<script>

</script>

<style lang="scss">
@import "./assets/styles/normalize.css";
body {
  background-color: #000;
  height: 100vh;
  font-family: sans-serif;
  .youtube_iframe {
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
</style>
