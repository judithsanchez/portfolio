<template>
  <div class="about-me">
    <p class="first-line">Hola! My name is</p>
    <h2 class="second-line">{{ firstName }} {{ lastName }}</h2>
    <h1 class="third-line">
      I am a <span class="job-title">{{ jobTitle }}</span>
    </h1>
    <p class="about-me-text">{{ aboutMe }}</p>

    <p class="projects-intro">{{ projectsIntro }}</p>

    <div class="download-cv-button">
      <a :href="cv">
        <p>Download <span class="cv">CV</span></p>
      </a>
    </div>
  </div>
</template>

<script>
import '../assets/style.css';
import portfolioJudithSanchez from '../portfolio-info';

export default {
  data() {
    return {
      firstName: portfolioJudithSanchez.firstName,
      lastName: portfolioJudithSanchez.lastName,
      jobTitle: portfolioJudithSanchez.jobTitle,
      aboutMe: portfolioJudithSanchez.aboutMe,
      projectsIntro: portfolioJudithSanchez.projectsIntro,
      cv: portfolioJudithSanchez.cv,
    };
  },
};
</script>
