<template>
  <div class="projects-section">
    <p class="projects-intro">{{ projectsIntro }}</p>

    <div class="download-cv-button">
      <a :href="cv">
        <p>Download <span class="cv">CV</span></p>
      </a>
    </div>

    <h3>Projects</h3>

    <div class="projects-list">
      <project-info></project-info>
    </div>
  </div>
</template>

<script>
import '../assets/style.css';
import portfolioJudithSanchez from '../portfolio-info';
import ProjectInfo from './ProjectInfo.vue';

export default {
  components: {
    'project-info': ProjectInfo,
  },
  data() {
    return {
      projectsIntro: portfolioJudithSanchez.projectsIntro,
      cv: portfolioJudithSanchez.cv,
    };
  },
};
</script>
