<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <div>
    <h1>Projects</h1>

    <div class="grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
}
</style>