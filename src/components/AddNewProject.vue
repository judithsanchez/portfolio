<template>
  <form class="add-new-project-form">
    <h3>Add New Project</h3>
    <div class="add-new-project-title">
      <h4>Title:</h4>
      <input type="text" v-model="title" />
    </div>
    <div class="add-new-project-url">
      <h4>URL:</h4>
      <input type="text" v-model="url" />
    </div>
    <div class="add-new-project-description">
      <h4>Description:</h4>
      <textarea v-model="description"></textarea>
    </div>
    <div>
      <h4>Skills:</h4>
    </div>
    <div class="skill-set">
      <skill-set-btn @add-skillset="addSkillset"></skill-set-btn>
    </div>
    <button
      class="add-new-project-btn"
      @click.prevent="portfolio.addNewProject(title, url, description, skills)"
    >
      Add Project
    </button>
  </form>
</template>

<script>
import portfolioJudithSanchez from '../portfolio-info';
import SkillSetBtn from './SkillSetBtn.vue';

export default {
  components: {
    'skill-set-btn': SkillSetBtn,
  },
  data() {
    return {
      title: '',
      url: '',
      description: '',
      skills: [],
      portfolio: portfolioJudithSanchez,
    };
  },
  methods: {
    addSkillset(skill) {
      this.skills.push(skill);
    },
  },
};
</script>
