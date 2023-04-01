<template>
  <div>
    <input type="text" v-model="usernameInput" />
    <input type="password" v-model="passwordInput" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import judithsanchez from '../admin';

export default {
  data() {
    return {
      user: judithsanchez,
      usernameInput: '',
      passwordInput: '',
    };
  },
  methods: {
    login() {
      if (this.user.checkCredentials(this.usernameInput, this.passwordInput)) {
        alert('si funciona');
      } else {
        alert('no funciona');
      }
    },
  },
};
</script>
