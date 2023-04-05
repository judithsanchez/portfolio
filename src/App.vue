<template>
  <div class="app-container">
    <admin-access v-if="adminAccess" :isAdminAccessVisible="adminAccess" />
    <nav-bar />
    <about-me @showAdminAccess="showAdminAccess" />
    <projects-section />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import AdminAccess from './components/AdminAccess.vue';

export default {
  components: {
    'nav-bar': NavBar,
    'about-me': AboutMe,
    'projects-section': ProjectsSection,
    'admin-access': AdminAccess,
  },
  data() {
    return {
      adminAccess: false,
    };
  },
  methods: {
    showAdminAccess() {
      this.adminAccess = true;
    },
  },
};
</script>
