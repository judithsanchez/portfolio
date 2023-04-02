<template>
  <div
    :class="getProjectClass(index)"
    v-for="(project, index) in projects"
    :key="index"
  >
    <a class="project-url" :href="'https://' + project.url">{{
      project.url
    }}</a>
    <p class="project-description" v-html="project.description"></p>
    <ul class="project-skills">
      <li v-for="(skill, index) in project.skillsApplied" :key="index">
        {{ skill }}
        <span v-if="index !== project.skillsApplied.length - 1"> | </span>
      </li>
    </ul>
  </div>
</template>
<script>
import '../assets/main-styles.css';
import '../assets/project-info.css';
import portfolioJudithSanchez from '../portfolio-info';

export default {
  data() {
    return {
      projects: portfolioJudithSanchez.projects,
    };
  },
  computed: {
    numProjects() {
      return this.projects.length;
    },
  },
  methods: {
    getProjectClass(index) {
      const projectNum = (index % 7) + 1;
      return `project${projectNum}`;
    },
  },
};
</script>
