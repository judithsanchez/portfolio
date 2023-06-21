<template>
  <div
    :class="getProjectClass(index)"
    v-for="(project, index) in projects"
    :key="index"
  >
    <div class="live-preview">
      <a class="project-repository" :href="'https://' + project.repository">{{
        project.repository
      }}</a>
      <a class="project-preview" :href="'https://' + project.liveVersion">
        <span class="live-icon">🎥</span>
        {{ project.liveVersion ? 'Live Version' : 'Live Preview' }}
      </a>
    </div>
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
