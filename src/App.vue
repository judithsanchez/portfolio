<template>
  <nav-bar />
  <about-me />
  <projects-section />
</template>

<script>
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectsSection from './components/ProjectsSection.vue';

export default {
  components: {
    'nav-bar': NavBar,
    'about-me': AboutMe,
    'projects-section': ProjectsSection,
  },
};
</script>
