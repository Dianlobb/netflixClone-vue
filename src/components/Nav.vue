<template>
  <nav class="nav" :class="showNavBar ? 'nav__black' : ''">
    <div class="nav__contents">
      <img
        src="../assets/img/Netflix-simbolo.png"
        alt="netflix logo"
        class="nav__logo"
      />
      <img src="../assets/img/avatar.png" alt="avatar" class="nav__avatar" />
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Nav",
  props: {
    msg: String,
  },
  setup() {
    const showNavBar = ref(false);
    const transitionNavBar = () => {
      if (window.scrollY > 100) {
        showNavBar.value = false;
      } else {
        showNavBar.value = true;
      }
    };
    window.addEventListener("scroll", transitionNavBar);
    return {
      showNavBar,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 1;
  /*Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
}
.nav__contents {
  display: flex;
  justify-content: space-between;
}
.nav__black {
  background-color: #111;
}
.nav__logo {
  position: fixed;
  top: 10px;
  left: 0;
  width: 80px;
  object-fit: contain;
  padding-left: 20px;
  cursor: pointer;
}
.nav__avatar {
  position: fixed;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
