<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()

const project = projects.find(
  p => p.id === Number(route.params.id)
)
</script>

<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>

    <p>
      Role: {{ project.role }}
    </p>

    <p>
      {{ project.description }}
    </p>
  </div>

  <div v-else>
    <h2>Project Not Found</h2>
  </div>
</template>