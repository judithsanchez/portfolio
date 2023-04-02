<template>
  <nav-bar />
  <about-me />
  <projects-section />
  <admin-access />
  <add-new-project />
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
    return {};
  },
};
</script>
