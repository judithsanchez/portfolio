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
    <!-- <div>
      <h4>Skills:</h4>
      <input type="text" v-model="skills" />
      <ul></ul>
    </div> -->
    <button @click.prevent="portfolio.addNewProject(title)">Add</button>
  </form>
</template>

<script>
import '../assets/style.css';
import portfolioJudithSanchez from '../portfolio-info';

export default {
  data() {
    return {
      title: '',
      url: '',
      description: '',
      //   skills: [],
      portfolio: portfolioJudithSanchez,
    };
  },
};
</script>
