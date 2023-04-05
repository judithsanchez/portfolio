<template>
  <div>
    <nav-bar />
    <about-me @showAdminAccess="showAdminAccess" />
    <projects-section />
    <add-new-project />
    <admin-access v-if="adminAccess" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import AddNewProject from './components/AddNewProject.vue';
import AdminAccess from './components/AdminAccess.vue';

export default {
  components: {
    'nav-bar': NavBar,
    'about-me': AboutMe,
    'projects-section': ProjectsSection,
    'add-new-project': AddNewProject,
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
      alert('Admin access granted!');
    },
  },
};
</script>
