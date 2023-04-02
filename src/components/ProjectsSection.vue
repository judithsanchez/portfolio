<template>
  <div class="projects-section">
    <h3>Projects</h3>

    <div class="projects-list">
      <project-info></project-info>
    </div>
  </div>
</template>

<script>
import '../assets/style.css';
import '../assets/projects-section.css';
import ProjectInfo from './ProjectInfo.vue';

export default {
  components: {
    'project-info': ProjectInfo,
  },
  data() {
    return {};
  },
};
</script>
