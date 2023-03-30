<template>
  <div class="projects-section">
    <p class="projects-intro">{{ projectsIntro }}</p>

    <div class="download-cv-button">
      <a :href="cv">
        <p>Download <span class="cv">CV</span></p>
      </a>
    </div>

    <h3>Projects</h3>
  </div>
</template>

<script>
import '../style.css';
import portfolioInfo from '../portfolio-info.json';

export default {
  data() {
    return {
      projectsIntro: portfolioInfo.projectsIntro,
      cv: portfolioInfo.cv,
    };
  },
};
</script>
