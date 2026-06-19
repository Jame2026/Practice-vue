<template>
  <nav class="navbar">
    <h2>CK Portfolio</h2>

    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 2px;
  background: #f81212;
}

.links {
  display: flex;
  gap: 1rem;
}

a {
  color: white;
  text-decoration: none;
}

.router-link-active {
  color: #42b883;
  font-weight: bold;
}
</style>