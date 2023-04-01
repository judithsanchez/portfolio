<template>
  <button
    class="skill"
    v-for="(skill, index) in skills"
    :key="index"
    @click.prevent="getSkill(skill)"
  >
    {{ skill }}
  </button>
</template>

<script>
import portfolioJudithSanchez from '../portfolio-info';

export default {
  data() {
    return {
      skills: portfolioJudithSanchez.skills,
    };
  },
  methods: {
    getSkill(skill) {
      this.$emit('add-skillset', skill);
    },
  },
};
</script>
