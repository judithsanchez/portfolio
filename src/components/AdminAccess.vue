<template>
  <div :class="adminViewClass" v-if="showAdminView">
    <h3>Who are you? 😼</h3>
    <div>
      <label>Username</label>
      <input type="text" v-model="usernameInput" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="passwordInput" />
    </div>
    <p>{{ loginMessage }}</p>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import '../assets/main-styles.css';
import '../assets/admin-access.css';
import judithsanchez from '../admin';

export default {
  data() {
    return {
      user: judithsanchez,
      usernameInput: '',
      passwordInput: '',
      loginMessage: '',
    };
  },

  methods: {
    login() {
      if (this.user.checkCredentials(this.usernameInput, this.passwordInput)) {
        this.loginMessage = 'Hola hola caracola 😽';
      } else {
        this.loginMessage = 'Get out of here! 😾';
      }
    },
  },
};
</script>
