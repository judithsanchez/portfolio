<template>
  <div class="about-me">
    <p class="first-line">Hola! My name is</p>
    <h2 class="second-line" @click="incrementCounter">
      {{ firstName }} {{ lastName }}
    </h2>
    <h1 class="third-line">
      I am a <span class="job-title">{{ jobTitle }}</span>
    </h1>
    <p class="about-me-text">
      As a tech enthusiast, I'm passionate about creating solutions through
      code. I have a diverse background that includes studying
      <span class="white-highlight">Physiotherapy</span> and working as an
      online <span class="white-highlight">Spanish tutor</span>. From that job,
      my pet project was born:
      <span class="aqua-highlight">Bocaditos de Español</span>. I'd love for you
      to check it out!
    </p>

    <p class="projects-intro">
      <span class="aqua-highlight">Do you want to see my projects? </span>

      <span class="white-highlight"
        >You're already checking out one with this portfolio!</span
      >

      But there's more to explore - keep scrolling down to discover what else
      I've been working on.
    </p>

    <div class="download-cv-button">
      <a :href="cv" target="_blank">
        <p>Download <span class="cv">CV</span></p>
      </a>
    </div>
  </div>
</template>

<script>
import '../assets/main-styles.css';
import '../assets/about-me.css';
import portfolioJudithSanchez from '../portfolio-info';

export default {
  data() {
    return {
      firstName: portfolioJudithSanchez.firstName,
      lastName: portfolioJudithSanchez.lastName,
      jobTitle: portfolioJudithSanchez.jobTitle,
      cv: portfolioJudithSanchez.cv,
      clickCounter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.clickCounter++;
      if (this.clickCounter === 3) {
        this.$emit('show-admin-access');
      }
    },
  },
};
</script>
