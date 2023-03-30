<template>
  <nav class="nav-bar">
    <img src="../assets/logo-judith-sanchez.svg" alt="Judith Sanchez Logo" />

    <ul class="social-media-contact">
      <li>
        <!-- In the template section of my component.  -->
        <!-- I am using Vue's binding syntax to set the href attribute  -->
        <!-- of three a elements based on the values of the github,  -->
        <!-- linkedin, and email properties from the component's data object. -->

        <a :href="github">
          <img src="../assets/logo-github-negative.svg" alt="GitHub Logo" />
        </a>
      </li>
      <li>
        <a :href="linkedin">
          <img
            class="linkedin-logo"
            src="../assets/logo-linkedin-negative.svg"
            alt="LinkedIn Logo"
          />
        </a>
      </li>
      <li>
        <a :href="'mailto:' + email">
          <img src="../assets/logo-envelope-negative.svg" alt="Email Logo" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import '../style.css';

// 1.- I am importing an object named portfolioInfo from a
// JSON file located at '../portfolio-info.json'.

import portfolioInfo from '../portfolio-info.json';

export default {
  data() {
    return {
      // 2.- Then, I am defining a Vue component that has a data function
      // that returns an object with three properties: github, linkedin, and email.
      // Each of these properties is assigned the corresponding value
      // from the imported portfolioInfo object.
      github: portfolioInfo.github,
      linkedin: portfolioInfo.linkedin,
      email: portfolioInfo.email,
    };
  },
};
</script>
