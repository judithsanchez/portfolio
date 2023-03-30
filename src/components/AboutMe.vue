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
import '../style.css';
import portfolioInfo from '../portfolio-info.json';

export default {
  data() {
    return {
      firstName: portfolioInfo.firstName,
      lastName: portfolioInfo.lastName,
      jobTitle: portfolioInfo.jobTitle,
      aboutMe: portfolioInfo.aboutMe,
    };
  },
};
</script>
