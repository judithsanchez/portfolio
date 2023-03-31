<template>
  <div>
    <div class="project" v-for="(project, index) in projects" :key="index">
      <a :href="project.url">{{ project.url }}</a>
      <p class="description">{{ project.description }}</p>
      <ul class="skills">
        <li v-for="(skill, index) in project.skillsApplied" :key="index">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../assets/style.css';
import portfolioInfo from '../portfolio-info.json';

export default {
  data() {
    return {
      projects: portfolioInfo.projects,
    };
  },
};
</script>
