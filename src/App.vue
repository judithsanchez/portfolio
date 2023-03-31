<template>
  <nav-bar />
  <about-me />
  <projects-section />
  <project-info />
</template>

<script>
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ProjectInfo from './components/ProjectInfo.vue';

export default {
  components: {
    'nav-bar': NavBar,
    'about-me': AboutMe,
    'projects-section': ProjectsSection,
    'project-info': ProjectInfo,
  },
};
</script>
