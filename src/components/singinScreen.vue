<template>
  <div>
    <div class="singupScreen  ">
      <form>
        <h1>Sing In</h1>
        <input type="email" v-model="loginData.userName" placeholder="Email" />
        <input
          type="password"
          placeholder="Password"
          v-model="loginData.password"
        />
        <button type="submit" @click.prevent="singIn">Sing In</button>
        <h4>
          <span class="singupScreen_grey">New to Netflix? </span>
          <span class="singupScreen_link" @click.prevent="register"
            >Sign up now.</span
          >
        </h4>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { auth } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// @ is an alias to /src

export default {
  name: "Login",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    const loginData = reactive({
      userName: "",
      password: "",
    });
    const register = () => {
      createUserWithEmailAndPassword(
        auth,
        loginData.userName,
        loginData.password
      )
        .then(({ user }) => {
          let data = {
            islogin: true,
            uid: user.uid,
            email: user.email,
          };
          store.dispatch("Login", data);
          router.push({ name: "Home" });
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    const singIn = () => {
      signInWithEmailAndPassword(auth, loginData.userName, loginData.password)
        .then(({ user }) => {
          let data = {
            islogin: true,
            uid: user.uid,
            email: user.email,
          };
          store.dispatch("Login", data);
          router.push({ name: "Home" });
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    return {
      loginData,
      register,
      singIn,
    };
  },
};
</script>
<style lang="scss">
.singupScreen {
  
  max-width: 300px;
  padding: 70px;
  margin-left: auto;
  margin-right: auto;

  background: rgba(0, 0, 0, 0.555);
  form {
    display: grid;
    flex-direction: column;
    h1 {
      text-align: left;
      margin-bottom: 25px;
      font-size: 1.5rem;
    }
    input {
      outline-width: 0;
      height: 40px;
      margin-bottom: 14px;
      border-radius: 5px;
      border: none;
      padding: 5px 15px;
    }
    button {
      padding: 16px 20px;
      font-size: 1rem;
      color: #fff;
      border-radius: 5px;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      margin-top: 20px;
    }
    h4 {
      text-align: left;
      margin-top: 30px;
      .singupScreen_grey {
        color: gray;
      }
      .singupScreen_link:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}
</style>
