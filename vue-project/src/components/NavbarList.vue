<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Utilisation du composant Logo -->
      <Logo />
    </div>
  </nav>
</template>

<script setup>
// Importation du composant Logo.vue
import Logo from './LogoComponent.vue';
</script>

<style scoped>
</style>
