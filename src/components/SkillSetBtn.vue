<template>
  <button class="skill" v-for="(skill, index) in skills" :key="index">
    {{ skill }}
  </button>
</template>

<script>
import '../assets/style.css';
import portfolioJudithSanchez from '../portfolio-info';

export default {
  data() {
    return {
      skills: portfolioJudithSanchez.skills,
    };
  },
};
</script>
