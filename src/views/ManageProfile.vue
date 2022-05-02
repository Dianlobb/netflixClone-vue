<template>
  <Nav />
  <div class="manageProfile">
    <h1 class="manageProfile_title">Manage Profiles:</h1>
    <ul>
      <li class="manageProfile_avatar_edit" @click="router.push('Home')">
        <img src="../assets/img/avatar.png" alt="avatar" class="nav__avatar" />
        <font-awesome-icon icon="pen" class="optionBox_icon" size="2x" />
        <p>Account</p>
      </li>
      <li class="manageProfile_avatar_edit" @click="router.push('Home')">
        <img
          src="../assets/img/avatar_two.png"
          alt="avatar"
          class="nav__avatar"
        />
        <font-awesome-icon icon="pen" class="optionBox_icon" size="2x" />
        <p>Angel</p>
      </li>
      <li class="manageProfile_avatar_edit" @click="router.push('Home')">
        <img
          src="../assets/img/avatar_Three.png"
          alt="avatar"
          class="nav__avatar"
        />
        <font-awesome-icon icon="pen" class="optionBox_icon" size="2x" />
        <p>Dad</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Nav from "@/components/Nav";
export default {
  name: "MangeProfile",
  components: {
    Nav,
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.manageProfile {
  color: rgb(117, 117, 117);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  .manageProfile_title {
    width: 100%;
    text-align: center;
    font-size: 3.5vw;
    font-weight: unset;
    color: #fff;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    .manageProfile_avatar_edit {
      display: inline-block;
      justify-content: center;
      position: relative;
      flex-wrap: wrap;
      gap: 12px;
      padding: 10px;
      cursor: pointer;
      img {
        width: 100%;
        object-fit: contain;
        height: 130px;
        opacity: 0.5;
        border-radius: 10px;
      }
      .optionBox_icon {
        position: absolute;
        color: rgba(255, 255, 255, 0.493);
        z-index: 1;
        opacity: 40;
        top: 50px;
        left: 60px;
      }
      p {
        text-align: center;
        font-weight: 600;
      }
      &:hover {
        p,
        .optionBox_icon {
          color: #fff;
        }
        img {
          outline: 4px solid #fff;
        }
      }
    }
  }
}
</style>
