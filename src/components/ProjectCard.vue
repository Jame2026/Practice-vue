<script setup lang="ts">
interface Project {
  id: number
  title: string
  role: string
  description: string
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="card">
    <h3>{{ project.title }}</h3>

    <p>
      <strong>Role:</strong>
      {{ project.role }}
    </p>

    <p>
      {{ project.description }}
    </p>

    <router-link
      :to="`/projects/${project.id}`"
    >
      View Details
    </router-link>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}

a {
  color: #42b883;
}
</style>