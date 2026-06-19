<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="skill-card">
    {{ title }}
  </div>
</template>

<style scoped>
.skill-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}
</style>