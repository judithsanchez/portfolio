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
    <add-new-project
      :authenticated="authenticated"
      v-if="authenticated"
    ></add-new-project>
  </div>
</template>

<script>
import '../assets/main-styles.css';
import '../assets/admin-access.css';
import judithsanchez from '../admin';
import AddNewProject from './AddNewProject.vue';

export default {
  components: {
    'add-new-project': AddNewProject,
  },
  data() {
    return {
      user: judithsanchez,
      usernameInput: '',
      passwordInput: '',
      loginMessage: '',
      authenticated: false,
    };
  },

  computed: {
    adminViewClass() {
      return {
        'admin-view': true,
      };
    },

    showAdminView() {
      return this.$parent.adminAccess;
    },
  },

  methods: {
    login() {
      if (this.user.checkCredentials(this.usernameInput, this.passwordInput)) {
        this.loginMessage = 'Hola hola caracola 😽';
        this.authenticated = true;
      } else {
        this.loginMessage = 'Get out of here! 😾';
      }
    },
  },
};
</script>
