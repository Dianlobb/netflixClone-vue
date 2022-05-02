<template>
  <div class="profileScreen">
    <Nav />
    <div class="profileScreen_body">
      <h1>Edit Profile</h1>
      <div class="ProfileScreen_info">
        <img src="../assets/img/avatar.png" alt="avatar" class="nav__avatar" />
        <div class="profileScreen_details">
          <h2>{{ data.email }}</h2>
          <div class="profileScreen_plans">
            <h3>Plans</h3>

            <ul class="profileScreen_list_suscription">
              <li>
                <div class="profileScrenn_suscriptionInfo">
                  <h4>Premium Suscription</h4>
                  <p>Ultra HD available</p>
                </div>
                <button>Subscribe</button>
              </li>
              <li>
                <div class="profileScrenn_suscriptionInfo">
                  <h4>Standard Suscription</h4>
                  <p>HD available</p>
                </div>
                <button>Subscribe</button>
              </li>
              <li>
                <div class="profileScrenn_suscriptionInfo">
                  <h4>Basic Suscription</h4>
                  <p>Watch on your laptop, TV, phone or tablet</p>
                </div>
                <button>Subscribe</button>
              </li>
            </ul>

            <button class="profileScreen_singOut" @click="logOut">
              Sing Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Nav from "@/components/Nav";
import { computed } from "@vue/runtime-core";
import { auth } from "@/services/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";
export default {
  name: "ProfileScreen",
  components: {
    Nav,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const logOut = () => {
      auth.signOut();
      store.dispatch("logOut");
      router.push({ name: "login" });
    };
    return {
      data: computed(() => store.getters.getUserdata),
      logOut,
      signOut,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profileScreen {
  height: 100vh;
  color: white;
  .profileScreen_body {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    padding-top: 8%;
    max-width: 800px;
    h1 {
      font-size: 60px;
      font-weight: 400px;
      border-bottom: 1px solid #282c2d;
      margin-bottom: 20px;
    }
    .ProfileScreen_info {
      display: flex;
      img {
        height: 100px;
      }
      .profileScreen_details {
        color: white;
        margin-left: 25px;
        flex: 1;
        h2 {
          background-color: gray;
          padding: 15px;
          font-size: 15px;
          padding-left: 20px;
        }
        .profileScreen_list_suscription {
          li {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: baseline;
            .profileScrenn_suscriptionInfo {
              display: flex;
              flex-direction: column;
              h4,p{
                margin: 0;
              }
              p{
                color: gray;
              }
            }
            button {
              background-color: #e50914;
              color: #fff;
              font-weight: 600;
              border: none;
              cursor: pointer;
              height: 40px;
            }
          }
        }

        .profileScreen_singOut {
          padding: 10px 20px;
          font-size: 1rem;
          margin-top: 5%;
          width: 100%;
          color: #fff;
          background-color: #e50914;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
