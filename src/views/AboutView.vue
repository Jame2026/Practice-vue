<script setup lang="ts">
import SkillCard from '../components/SkillCard.vue'

const skills = [
  'Vue.js',
  'Laravel',
  'TypeScript',
  'MySQL',
  'MongoDB',
  'AWS'
]
</script>

<template>
  <div>
    <h1>About Me</h1>

    <div class="skills">
      <SkillCard
        v-for="skill in skills"
        :key="skill"
        :title="skill"
      />
    </div>
  </div>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>