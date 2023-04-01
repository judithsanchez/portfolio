<template>
  <div class="about-me">
    <p class="first-line">Hola! My name is</p>
    <h2 class="second-line">{{ firstName }} {{ lastName }}</h2>
    <h1 class="third-line">
      I am a <span class="job-title">{{ jobTitle }}</span>
    </h1>
    <p class="about-me-text">{{ aboutMe }}</p>
  </div>
</template>

<script>
import '../assets/style.css';
// import portfolioInfo from '../portfolio-info.json';
import portfolioJudithSanchez from '../portfolio-info';

export default {
  data() {
    return {
      firstName: portfolioJudithSanchez.firstName,
      lastName: portfolioJudithSanchez.lastName,
      jobTitle: portfolioJudithSanchez.jobTitle,
      aboutMe: portfolioJudithSanchez.aboutMe,
    };
  },
};
</script>
