<template>
  <div class="optionBox">
    <div class="optionBox_adminProfile">
      <ul class="optionBox_list">
        <li>
          <img
            src="../assets/img/avatar_two.png"
            alt="avatar"
            class="nav__avatar"
          />
          <p @click="changeProfile('avatar_two.png')">Angel</p>
        </li>
        <li>
          <img
            src="../assets/img/avatar_Three.png"
            alt="avatar"
            class="nav__avatar"
          />
          <p @click="changeProfile('avatar_Three.png')">Dad</p>
        </li>
        <li @click="router.push('Manage')">
          <font-awesome-icon icon="pen" class="optionBox_icon" size="2x" />
          <p>Manage Profile</p>
        </li>
      </ul>
    </div>
    <div class="optionBox_adminAccout">
      <ul class="optionBox_list">
        <li @click="router.push('Profile')">
          <font-awesome-icon icon="user" class="optionBox_icon" size="2x" />
          <p>Account</p>
        </li>
        <li>
          <font-awesome-icon
            icon="question-circle"
            class="optionBox_icon"
            size="2x"
          />
          <p>Help Center</p>
        </li>
      </ul>
    </div>
    <div class="optionBox_closeSession" @click="router.push('/')">
      <p>Sing out of Netflix</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "ProfileScreen",
  components: {},
  setup(_, { emit }) {
    const router = useRouter();
    const changeProfile = (profileImg) => {
      emit("change-profile", profileImg);
    };
    return {
      router,
      changeProfile,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.optionBox {
  margin: 40px 30px 0 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 17, 17, 0.877);
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid gray;
  color: white;
  z-index: 11111;
  .optionBox_adminProfile,
  .optionBox_adminAccout {
    width: 100%;
    border-bottom: 1px solid #fff;
  }
  .optionBox_closeSession {
    width: 100%;
    p {
      text-align: center;
    }
  }
  .optionBox_list {
    padding: 10px;
    list-style-type: none;
    img {
      height: 40px;
      border-radius: 8px;
    }
    li {
      display: flex;
      flex-direction: row;
      gap: 15px;
      margin-top: 5px;
      p {
        font-weight: 600;
        font-size: 13px;
      }
    }
  }
  p:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .optionBox_icon {
    margin-left: 10px;
  }
}
</style>
