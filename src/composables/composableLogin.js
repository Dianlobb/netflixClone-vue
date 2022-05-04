import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { auth } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const useLogin = () => {
  const store = useStore();
  const router = useRouter();
  const loginData = reactive({
    userName: "",
    password: "",
  });
  const register = () => {
    createUserWithEmailAndPassword(auth, loginData.userName, loginData.password)
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
};

export default useLogin;
