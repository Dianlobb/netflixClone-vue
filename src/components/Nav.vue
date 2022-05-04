<template>
  <nav class="nav" :class="showNavBar ? 'nav__black' : ''">
    <div class="nav__contents">
      <router-link :to="{ name: 'Home' }">
        <img
          src="../assets/img/Netflix-simbolo.png"
          alt="netflix logo"
          class="nav__logo"
        />
      </router-link>

      <img
        :src="getImgUrl(profilePath)"
        alt="avatar"
        class="nav__avatar"
        @mouseover="showOptions = true"
      />
      <ProfileOptions
        @mouseleave="showOptions = false"
        v-if="showOptions"
        @change-profile="profilePath = $event"
      />
    </div>
  </nav>
</template>

<script>
import ProfileOptions from "@/components/ProfileOptions";
import { ref } from "vue";
export default {
  name: "Nav",
  props: {
    msg: String,
  },
  components: {
    ProfileOptions,
  },
  setup() {
    const showNavBar = ref(false);
    const showOptions = ref(false);
    const profilePath = ref("avatar.png");

    const transitionNavBar = () => {
      showNavBar.value = window.scrollY > 180 ? true : false;
    };
    window.addEventListener("scroll", transitionNavBar);

    return {
      showNavBar,
      showOptions,
      profilePath,
      getImgUrl:(pic) => require("../assets/img/" + pic),
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
