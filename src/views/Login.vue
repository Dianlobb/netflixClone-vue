<template>
  <div class="loginScreen">
    <div class="loginScreen_Background">
      <img
        class="loginScreen_logo"
        src="../assets/img/Netflix-simbolo.png"
        alt=""
      />
      <button class="loginScrenn_button" @click="singIn = true">Sing In</button>
      <div class="loginScreen_gradient"></div>
    </div>
    <transition name="scale" mode="out-in">
    <singin-Screen class="loginScrenn_body" v-if="singIn"></singin-Screen>
    
    <div class="loginScrenn_body" v-else>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div class="loginScren_input">
        <form>
          <input type="email" placeholder="Eail Address" />
          <button class="loginScreen_getStarted" @click="singIn = true">
            GET STARTED
          </button>
        </form>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import singinScreen from "@/components/singinScreen.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Login",
  components: {
    singinScreen,
  },
  setup() {
    const singIn = ref(false);
    return {
      singIn,
    };
  },
};
</script>
<style lang="scss">
.loginScreen {
  position: relative;
  height: 100%;
  background: url("../assets/img/backGroundLogin.jpg") center no-repeat;
  background-size: cover;
  .loginScreen_logo {
    position: fixed;
    left: 0;
    width: 150px;
    object-fit: contain;
    padding-left: 20px;
  }
  .loginScrenn_button {
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  .loginScreen_gradient {
    width: 100%;
    z-index: 1;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
  .loginScrenn_body {
    z-index: 1;
    color: #fff;
    padding: 20px;
    position: absolute;
    top: 30%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    h1 {
      font-size: 3.125rem;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 30px;
      font-weight: 400;
    }
    h3 {
      font-size: 1.3rem;
      font-weight: 400;
    }
    .loginScren_input {
      margin: 20px;
      form {
        input {
          padding: 10px;
          outline-widht: 0;
          height: 30px;
          width: 30%;
          border: none;
          max-width: 600px;
        }
        .loginScreen_getStarted {
          padding: 16px 20px;
          font-size: 1rem;
          color: #fff;
          background-color: #e50914;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.4);
}
</style>
